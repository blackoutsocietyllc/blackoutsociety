'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import CanvasLoader from '@/components/three/CanvasLoader';
import StaticHeroFallback from '@/components/three/StaticHeroFallback';
import { useMediaQuery } from '@/lib/hooks';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    scrollProgress.current = latest;
  });

  const use3D = !isMobile && !prefersReducedMotion;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-base-light"
    >
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-60" />

      {/* 3D / fallback visual */}
      <div className="absolute inset-0">
        {use3D ? <HeroScene scrollProgress={scrollProgress} /> : <StaticHeroFallback />}
      </div>

      {/* Vignette for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-light via-transparent to-base-light/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 sm:px-10 lg:px-16">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 border border-ink/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink/70 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 bg-blood" />
          Premium Automotive Finishing
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Precision.
          <br />
          Protection.
          <br />
          <span className="text-gradient-red bg-[length:200%_auto] animate-shimmer">Style.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-lg text-base font-medium text-ink/70 sm:text-lg"
        >
          Window tint, paint protection film, ceramic coating, and vinyl wraps —
          engineered and installed to a showroom standard. This is automotive
          finishing for people who notice the details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/contact"
            className="bg-blood px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-red-glow transition-all duration-300 hover:shadow-red-glow-lg"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="border-b-2 border-ink/20 px-1 py-4 text-sm font-bold uppercase tracking-widest text-ink transition-colors duration-300 hover:border-blood hover:text-blood"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/40">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-ink/40 to-transparent" />
      </motion.div>
    </section>
  );
}
