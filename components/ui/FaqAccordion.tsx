'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FaqItem } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-base font-bold text-ink sm:text-lg">{item.question}</span>
              <span
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center border border-ink/20 text-ink transition-all duration-300',
                  isOpen && 'rotate-45 border-blood bg-blood text-white'
                )}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-14 text-sm leading-relaxed text-ink/65">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
