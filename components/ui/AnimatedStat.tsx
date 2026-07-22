'use client';

import { useInView } from 'react-intersection-observer';
import { useAnimatedCounter } from '@/lib/hooks';
import type { Stat } from '@/lib/data';

export default function AnimatedStat({ value, suffix, label }: Stat) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const count = useAnimatedCounter(value, inView, 1800);
  const isDecimal = value % 1 !== 0;

  return (
    <div ref={ref} className="text-center">
      <p className="font-mono text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {isDecimal ? count.toFixed(1) : Math.round(count).toLocaleString()}
        <span className="text-blood">{suffix}</span>
      </p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-ink/50 sm:text-sm">{label}</p>
    </div>
  );
}
