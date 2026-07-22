'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import LaserBeam from './LaserBeam';

function CameraRig({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const initial = useRef({ x: camera.position.x, y: camera.position.y, z: camera.position.z });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scroll = scrollProgress.current;
    const mx = (state.pointer.x || 0) * 0.35;
    const my = (state.pointer.y || 0) * 0.2;

    camera.position.x = initial.current.x + mx + Math.sin(t * 0.15) * 0.05;
    camera.position.y = initial.current.y + my - scroll * 0.6;
    camera.position.z = initial.current.z - scroll * 2.2;
    camera.lookAt(0, -scroll * 0.3, 0);
  });

  return null;
}

export default function HeroScene({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  // Force a layout re-measure after mount: the canvas can otherwise get
  // stuck at its default 300x150 size if the resize observer's first
  // callback fires before the section has settled into its final layout.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });
    const timeout = setTimeout(() => window.dispatchEvent(new Event('resize')), 300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.6, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#0a0a0a'), 0);
      }}
    >
      <CameraRig scrollProgress={scrollProgress} />
      <LaserBeam />
      <Sparkles count={40} scale={[9, 5, 3]} size={1.5} speed={0.3} color="#ff1a0f" opacity={0.5} />
      <Sparkles count={40} scale={[9, 5, 3]} size={1} speed={0.2} color="#f5f5f5" opacity={0.3} />
    </Canvas>
  );
}
