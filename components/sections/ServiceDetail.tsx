'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Service } from '@/lib/data';
import ServiceIcon from '@/components/ui/ServiceIcon';
import TiltCard from '@/components/ui/TiltCard';
import { cn } from '@/lib/utils';

export default function ServiceDetail({
  service,
  index,
  total,
}: {
  service: Service;
  index: number;
  total: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className={cn('relative scroll-mt-24 py-20 sm:py-28', reversed ? 'bg-base-panel' : 'bg-base-light')}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div
          className={cn(
            'grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16',
            reversed && 'lg:[&>*:first-child]:order-2'
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center border border-ink/15 bg-white/5 text-ink">
              <ServiceIcon icon={service.icon} className="h-7 w-7 text-ink" />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-blood">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {service.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70">{service.longDescription}</p>

            <ul className="mt-6 space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blood" />
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="mt-8 inline-block bg-blood px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-red-glow transition-all duration-300 hover:shadow-red-glow-lg"
            >
              Get a Quote for {service.shortTitle}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard glow={false}>
              <div className="border border-ink/10 bg-black">
                {service.image ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center bg-[repeating-linear-gradient(45deg,#141414,#141414_10px,#0a0a0a_10px,#0a0a0a_20px)]">
                    <span className="border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      {service.title} — Photo Placeholder
                    </span>
                  </div>
                )}
                <dl className="grid grid-cols-2 gap-px bg-white/10">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="bg-black p-4">
                      <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 font-mono text-lg font-bold text-white">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
