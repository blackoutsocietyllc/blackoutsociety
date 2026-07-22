'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Process() {
  return (
    <section id="process" className="relative bg-base-light py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="How It Works"
          align="center"
          title="From quote to keys-back, dialed in."
          className="mx-auto"
        />

        <div className="relative mt-20">
          {/* connecting line - desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
              className="h-full bg-blood"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 lg:pl-0"
              >
                {/* connecting line - mobile */}
                {i !== processSteps.length - 1 && (
                  <div className="absolute bottom-[-2.5rem] left-3 top-3 w-px bg-ink/10 lg:hidden" />
                )}

                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blood lg:relative lg:mb-6">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                <span className="hidden font-mono text-sm font-bold text-ink/20 lg:block">{step.number}</span>
                <h3 className="font-display text-xl font-bold text-ink lg:mt-2">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
