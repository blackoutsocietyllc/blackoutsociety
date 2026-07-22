'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { tintLevels } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import { cn } from '@/lib/utils';

export default function TintSimulator() {
  const [active, setActive] = useState(tintLevels[1]);

  return (
    <section id="simulator" className="relative overflow-hidden bg-black py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-blood/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          light
          eyebrow="Try It Yourself"
          title={
            <>
              Preview your
              <br />
              perfect shade.
            </>
          }
          description="Every eye is different. Hover or tap a shade below to see how it transforms the look of your windows before you ever book an appointment."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Window mockup */}
          <TiltCard glow={false} className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-square w-full max-w-md border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-10">
              <div className="relative h-full w-full">
                <svg viewBox="0 0 300 300" className="h-full w-full">
                  {/* square window */}
                  <rect x="30" y="30" width="240" height="240" fill="#141414" />

                  {/* glowing red dot — size & brightness IS the tint level */}
                  <circle
                    cx="150"
                    cy="150"
                    r={10 + (active.value / 100) * 26}
                    fill="#ff1a0f"
                    style={{ opacity: Math.max(0.1, active.value / 100) * 0.35, transition: 'all 0.5s ease-in-out' }}
                  />
                  <circle
                    cx="150"
                    cy="150"
                    r={4 + (active.value / 100) * 8}
                    fill="#ff1a0f"
                    style={{ opacity: Math.max(0.2, active.value / 100), transition: 'all 0.5s ease-in-out' }}
                  />

                  {/* window frame */}
                  <rect x="30" y="30" width="240" height="240" fill="none" stroke="#e10600" strokeWidth="2" opacity="0.8" />
                </svg>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                  Live Preview
                </span>
                <motion.span
                  key={active.value}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-blood px-3 py-1 text-sm font-extrabold text-white"
                >
                  <span className="font-mono">{active.label}</span> Tint
                </motion.span>
              </div>
            </div>
          </TiltCard>

          {/* Controls */}
          <div className="order-1 flex flex-col gap-4 lg:order-2">
            {tintLevels.map((level) => (
              <button
                key={level.value}
                onMouseEnter={() => setActive(level)}
                onFocus={() => setActive(level)}
                onClick={() => setActive(level)}
                aria-pressed={active.value === level.value}
                className={cn(
                  'group flex items-center justify-between border px-6 py-5 text-left transition-all duration-300',
                  active.value === level.value
                    ? 'border-blood bg-white/5 shadow-red-glow'
                    : 'border-white/10 hover:border-white/30'
                )}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      'flex h-11 w-11 items-center justify-center border font-mono text-sm font-bold transition-colors',
                      active.value === level.value
                        ? 'border-blood bg-blood text-white'
                        : 'border-white/20 text-white/70'
                    )}
                  >
                    {level.label}
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-white">
                      <span className="font-mono">{level.label}</span> Visible Light Transmission
                    </p>
                    <p className="mt-1 text-xs text-white/50">{level.description}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    'hidden h-2 w-2 rounded-full transition-colors sm:block',
                    active.value === level.value ? 'bg-blood' : 'bg-white/20'
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
