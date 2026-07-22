import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get a free quote from Blackout Society in Bedford, Texas — window tint, PPF, ceramic coating, and vinyl wraps.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Get In Touch"
          title={
            <>
              Ready for the <span className="text-blood">Blackout treatment?</span>
            </>
          }
          description="Tell us about your vehicle and we'll follow up with a custom quote within one business day."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
