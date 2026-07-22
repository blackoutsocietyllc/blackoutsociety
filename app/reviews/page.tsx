import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'What Blackout Society customers say after their window tint, PPF, ceramic coating, and wrap installs.',
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Client Reviews"
          title={
            <>
              Trusted by drivers who <span className="text-blood">expect the best.</span>
            </>
          }
          description="Real feedback from real installs — no incentivized reviews, just what customers said after picking up their car."
        />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
