'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type BeamConfig = {
  color: string;
  speed: number;
  length: number;
  width: number;
  phase: number;
  wobbleAmount: number;
  wobbleSpeed: number;
  flickerSpeed: number;
};

/**
 * Disco-style laser rig: several beams radiating from a shared origin,
 * each spinning at its own speed/direction with a slow wobble and gentle
 * flicker, so they sweep and cross like a real multi-head laser fixture.
 * All red — brand accent, not a full RGB rig. Flicker frequencies are all
 * well under 3Hz to avoid any photosensitive-strobe concerns.
 */
const BEAMS: BeamConfig[] = [
  { color: '#ff1a0f', speed: 0.5, length: 15, width: 0.16, phase: 0, wobbleAmount: 0.35, wobbleSpeed: 0.25, flickerSpeed: 1.6 },
  { color: '#ff1a0f', speed: -0.38, length: 13, width: 0.12, phase: 1.3, wobbleAmount: 0.45, wobbleSpeed: 0.3, flickerSpeed: 2.1 },
  { color: '#ff1a0f', speed: 0.62, length: 14, width: 0.14, phase: 2.6, wobbleAmount: 0.3, wobbleSpeed: 0.2, flickerSpeed: 1.3 },
  { color: '#ff1a0f', speed: -0.55, length: 16, width: 0.18, phase: 3.9, wobbleAmount: 0.5, wobbleSpeed: 0.35, flickerSpeed: 1.9 },
  { color: '#ff1a0f', speed: 0.44, length: 12, width: 0.13, phase: 5.2, wobbleAmount: 0.4, wobbleSpeed: 0.28, flickerSpeed: 1.1 },
  { color: '#ff1a0f', speed: -0.3, length: 14, width: 0.12, phase: 2.1, wobbleAmount: 0.38, wobbleSpeed: 0.22, flickerSpeed: 1.7 },
];

/** Soft gaussian-edged, length-tapering glow texture — replaces the hard
 * rectangular silhouette a flat plane would otherwise have. Shared by every
 * beam layer (and scaled per-plane), so it's generated once. */
function createBeamTexture() {
  const width = 64;
  const height = 256;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  const imageData = ctx.createImageData(width, height);

  for (let y = 0; y < height; y++) {
    const lengthT = y / height; // 0 at the far tip, 1 at the base
    const lengthFade = Math.pow(lengthT, 0.5);
    for (let x = 0; x < width; x++) {
      const dx = (x - width / 2) / (width / 2);
      const widthFade = Math.exp(-Math.pow(dx * 2.4, 2));
      const alpha = widthFade * lengthFade;
      const idx = (y * width + x) * 4;
      imageData.data[idx] = 255;
      imageData.data[idx + 1] = 255;
      imageData.data[idx + 2] = 255;
      imageData.data[idx + 3] = Math.round(alpha * 255);
    }
  }

  ctx.putImageData(imageData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createGlowOrbTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.4, 'rgba(255,255,255,0.6)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function Beam({ config, texture }: { config: BeamConfig; texture: THREE.CanvasTexture }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);

  const color = useMemo(() => new THREE.Color(config.color), [config.color]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const angle =
      config.phase +
      t * config.speed +
      Math.sin(t * config.wobbleSpeed + config.phase) * config.wobbleAmount;

    if (group.current) {
      group.current.rotation.z = angle;
    }

    const flicker = 0.65 + Math.sin(t * config.flickerSpeed + config.phase * 2) * 0.35;
    if (core.current) {
      (core.current.material as THREE.MeshBasicMaterial).opacity = flicker;
    }
    if (glow.current) {
      (glow.current.material as THREE.MeshBasicMaterial).opacity = flicker * 0.5;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={glow} position={[0, config.length / 2, -0.02]}>
        <planeGeometry args={[config.width * 5, config.length]} />
        <meshBasicMaterial
          map={texture}
          color={color}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
          opacity={0}
        />
      </mesh>
      <mesh ref={core} position={[0, config.length / 2, 0]}>
        <planeGeometry args={[config.width, config.length]} />
        <meshBasicMaterial
          map={texture}
          color="#ffffff"
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
          opacity={0}
        />
      </mesh>
    </group>
  );
}

export default function LaserBeam() {
  const emitter = useRef<THREE.Mesh>(null);
  const beamTexture = useMemo(() => createBeamTexture(), []);
  const orbTexture = useMemo(() => createGlowOrbTexture(), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pulse = 0.7 + Math.sin(t * 1.4) * 0.3;
    if (emitter.current) {
      (emitter.current.material as THREE.MeshBasicMaterial).opacity = pulse;
      const s = 1 + pulse * 0.25;
      emitter.current.scale.set(s, s, s);
    }
  });

  return (
    <group position={[-6, 3.6, -2]}>
      {BEAMS.map((cfg, i) => (
        <Beam key={i} config={cfg} texture={beamTexture} />
      ))}
      <mesh ref={emitter} position={[0, 0, 0.05]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={orbTexture}
          color="#ffffff"
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}
