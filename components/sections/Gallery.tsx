'use client';

import { motion } from 'framer-motion';
import { galleryItems } from '@/lib/data';

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-base-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden border border-ink/10"
            >
              {/* BEFORE layer */}
              <div className="absolute inset-0 flex items-center justify-center bg-[repeating-linear-gradient(45deg,#d9d9d9,#d9d9d9_10px,#e6e6e6_10px,#e6e6e6_20px)]">
                <span className="border border-black/20 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
                  Before — Placeholder
                </span>
              </div>

              {/* AFTER layer - reveals on hover */}
              <div className="absolute inset-0 w-0 overflow-hidden transition-all duration-700 ease-out group-hover:w-full">
                <div className="absolute inset-0 w-[calc(100vw/1)] max-w-none bg-gradient-to-br from-black via-[#1c1c1c] to-black sm:w-[600px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="border border-blood bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blood">
                      After — Placeholder
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-blood" />
                </div>
              </div>

              {/* divider line */}
              <div className="absolute inset-y-0 left-0 w-0.5 bg-blood opacity-0 transition-all duration-700 ease-out group-hover:left-full group-hover:opacity-100" />

              {/* caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-xs font-semibold text-white">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
