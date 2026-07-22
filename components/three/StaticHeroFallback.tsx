'use client';

/**
 * Lightweight, non-WebGL hero visual for mobile / reduced-motion / low-power
 * devices. Mirrors the 3D scene's multi-beam disco laser rig with pure CSS —
 * several angled beams sweeping on staggered timings so they cross like a
 * real multi-head laser fixture, without the cost of WebGL. All red.
 */
const BEAMS = [
  { rotate: -12, width: 'w-5', color: 'via-blood-glow', duration: '3.6s', delay: '0s' },
  { rotate: 18, width: 'w-1.5', color: 'via-blood', duration: '4.2s', delay: '0.6s' },
  { rotate: -32, width: 'w-2', color: 'via-blood-glow', duration: '5s', delay: '1.4s' },
  { rotate: 6, width: 'w-1', color: 'via-blood-dark', duration: '4.6s', delay: '2.1s' },
];

export default function StaticHeroFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blood/30 blur-[90px]" />
        {BEAMS.map((beam, i) => (
          // outer wrapper sets the fixed fan-out angle (static, untouched by
          // the animation) — the inner div carries the animated sweep, since
          // an animated `transform` on an element fully overrides any other
          // transform on that same element rather than composing with it.
          <div key={i} className="absolute inset-0" style={{ transform: `rotate(${beam.rotate}deg)` }}>
            <div
              className={`absolute top-1/2 h-[160%] ${beam.width} -translate-y-1/2 bg-gradient-to-b from-transparent ${beam.color} to-transparent opacity-90 animate-laser-sweep motion-reduce:animate-none motion-reduce:opacity-0`}
              style={{ animationDuration: beam.duration, animationDelay: beam.delay }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
