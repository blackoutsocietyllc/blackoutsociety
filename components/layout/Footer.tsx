import Image from 'next/image';

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/blackout_societyllc' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591510170613' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@blackout_societyllc' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black pt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Blackout Society" width={178} height={176} className="h-14 w-auto" />
              <span className="text-lg font-extrabold tracking-tight text-white">
                BLACKOUT <span className="text-blood">SOCIETY</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Premium window tint, paint protection film, ceramic coating, and vinyl wraps — installed to a
              showroom standard.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-blood">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Service Area</h4>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Proudly serving Bedford and the surrounding metro — mobile service available for select packages.
            </p>
            <p className="mt-4 text-sm text-white/70">Bedford, Texas</p>
            <a href="tel:+18779570491" className="mt-1 block text-sm font-semibold text-white hover:text-blood">
              (877) 957-0491
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Follow</h4>
            <ul className="mt-5 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-blood"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Blackout Society. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-white/30">Placeholder legal / license number goes here.</p>
            <a href="/privacy" className="text-xs text-white/40 transition-colors hover:text-blood">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
