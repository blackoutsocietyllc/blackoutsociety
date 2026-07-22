'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: align === 'center' ? 0 : -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em]',
          align === 'center' && 'justify-center',
          light ? 'text-white/60' : 'text-ink/50'
        )}
      >
        <span className="h-1.5 w-1.5 bg-blood" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className={cn(
          'font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl',
          light ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className={cn(
            'mt-5 text-base font-medium sm:text-lg',
            light ? 'text-white/70' : 'text-ink/65'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
