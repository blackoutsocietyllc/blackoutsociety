import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import CallBar from '@/components/ui/CallBar';
import './globals.css';

const clashDisplay = localFont({
  src: [
    { path: '../public/fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-clash',
  display: 'swap',
});

const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://blackoutsociety.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Blackout Society | Premium Window Tint, PPF & Ceramic Coating',
    template: '%s | Blackout Society',
  },
  description:
    'Blackout Society delivers precision automotive window tinting, paint protection film, ceramic coating, and vinyl wraps. Precision. Protection. Style.',
  keywords: [
    'window tint',
    'paint protection film',
    'PPF',
    'ceramic coating',
    'vinyl wrap',
    'car tint',
    'automotive customization',
  ],
  authors: [{ name: 'Blackout Society' }],
  openGraph: {
    title: 'Blackout Society | Precision. Protection. Style.',
    description:
      'Premium car tinting, paint protection film, ceramic coating, and vinyl wraps. Elevate your vehicle with Blackout Society.',
    url: siteUrl,
    siteName: 'Blackout Society',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blackout Society | Precision. Protection. Style.',
    description:
      'Premium car tinting, PPF, ceramic coating, and vinyl wraps.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${satoshi.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-base-light text-ink antialiased pb-11">
        {children}
        <CallBar />
      </body>
    </html>
  );
}
