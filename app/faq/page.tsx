import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import FaqAccordion from '@/components/ui/FaqAccordion';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about window tint, PPF, ceramic coating, warranties, and scheduling.',
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Good To Know"
          title={
            <>
              Questions, <span className="text-blood">answered.</span>
            </>
          }
          description="Can't find what you're looking for? Reach out and we'll get back to you directly."
        />

        <section className="relative bg-base-light pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
            <FaqAccordion items={faqs} />

            <div className="mt-12 text-center">
              <p className="text-sm text-ink/60">Still have a question?</p>
              <a
                href="/contact"
                className="mt-4 inline-block bg-blood px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-red-glow transition-all duration-300 hover:shadow-red-glow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
