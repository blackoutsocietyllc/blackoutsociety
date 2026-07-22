'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedStat from '@/components/ui/AnimatedStat';

const trustMarkers = [
  { title: 'Certified Installers', copy: 'Factory-trained technicians certified by leading film & coating manufacturers.' },
  { title: 'Warranty Backed', copy: 'Every install is covered by manufacturer-backed, transferable warranties.' },
  { title: 'Climate-Controlled Bay', copy: 'Dust-free, temperature-controlled installation environment — every time.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-base-panel py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Why Choose Us"
          align="center"
          title="Numbers that back the craftsmanship."
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-ink/10 py-12 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              {i !== 0 && (
                <span className="absolute -left-4 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-ink/10 sm:block" />
              )}
              <AnimatedStat {...stat} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {trustMarkers.map((marker, i) => (
            <motion.div
              key={marker.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-ink/10 bg-white/5 p-8 transition-colors hover:border-blood/40"
            >
              <span className="mb-4 block font-mono text-3xl font-bold text-blood">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{marker.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{marker.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
