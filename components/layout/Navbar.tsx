'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-base-light/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Blackout Society" width={178} height={176} priority className="h-11 w-auto" />
          <span className="hidden text-lg font-extrabold tracking-tight text-ink sm:inline">
            BLACKOUT <span className="text-blood">SOCIETY</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blood after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="hidden bg-blood px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-shadow hover:shadow-red-glow lg:inline-block"
        >
          Get a Quote
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={cn('h-0.5 w-6 bg-ink transition-transform', open && 'translate-y-2 rotate-45')} />
          <span className={cn('h-0.5 w-6 bg-ink transition-opacity', open && 'opacity-0')} />
          <span className={cn('h-0.5 w-6 bg-ink transition-transform', open && '-translate-y-2 -rotate-45')} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-base-light lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink/10 py-4 text-sm font-bold uppercase tracking-wide text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block bg-blood px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
