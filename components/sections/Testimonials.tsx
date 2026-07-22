'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    setDirection(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => go(index + 1), 6500);
    return () => clearInterval(timer);
  }, [index, go]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="relative bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/50">
          <span className="h-1.5 w-1.5 bg-blood" />
          Featured Review
        </div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.name}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-blood">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-2xl font-medium leading-snug text-white sm:text-3xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-white">{active.name}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{active.location}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(index - 1)}
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-blood hover:text-blood"
          >
            &larr;
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  i === index ? 'w-6 bg-blood' : 'bg-white/25'
                )}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => go(index + 1)}
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-blood hover:text-blood"
          >
            &rarr;
          </button>
        </div>
      </div>

      <div className="mx-auto mt-24 mb-12 flex max-w-6xl items-center justify-center gap-3 px-6 text-xs font-bold uppercase tracking-[0.3em] text-white/50 sm:px-10 lg:px-16">
        <span className="h-1.5 w-1.5 bg-blood" />
        All Reviews
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-10 lg:px-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-3 flex gap-1">
              {Array.from({ length: t.rating }).map((_, j) => (
                <svg key={j} viewBox="0 0 20 20" className="h-4 w-4 fill-blood">
                  <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white">{t.name}</p>
            <p className="mt-0.5 text-xs uppercase tracking-widest text-white/40">{t.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
