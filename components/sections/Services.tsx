'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function Services() {
  return (
    <section id="services" className="relative bg-base-light py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Precision,
              <br />
              every time.
            </>
          }
          description="Every service we offer is built around the same philosophy: meticulous prep, premium materials, and installation that holds up for years — not months."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="h-full">
                <div className="relative flex h-full flex-col border border-ink/10 bg-base-panel p-8 clip-card transition-colors duration-300 hover:border-blood/40">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center border border-ink/15 bg-white/5 text-ink transition-colors duration-300 group-hover:border-blood/50">
                    <ServiceIcon icon={service.icon} className="h-7 w-7 text-ink" />
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-xs font-medium text-ink/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-blood" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink transition-colors group-hover:text-blood"
                  >
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 border-b-2 border-ink/20 px-1 py-2 text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:border-blood hover:text-blood"
          >
            View All Services
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
