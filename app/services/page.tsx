import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';
import SectionHeading from '@/components/ui/SectionHeading';
import { services, additionalServices } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Window tint, paint protection film, ceramic coating, and vinyl wraps — full specs, warranty details, and what to expect from every Blackout Society install.',
};

export default function ServicesPage() {
  const total = services.length + additionalServices.length;

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-base-light pb-20 pt-40 sm:pb-28 sm:pt-48">
          <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-60" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-ink/50">
              <span className="h-1.5 w-1.5 bg-blood" />
              What We Do
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Every service, <span className="text-blood">every detail.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium text-ink/70 sm:text-lg">
              Full specs, real warranty terms, and exactly what happens to your vehicle at
              each stage — no surprises between the quote and the finished car.
            </p>
          </div>
        </section>

        {services.map((service, i) => (
          <ServiceDetail key={service.slug} service={service} index={i} total={total} />
        ))}

        <section className="relative bg-base-panel py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <SectionHeading
              eyebrow="More Services"
              title="Round out the job."
              description="Additional services we run alongside — or independent of — the core lineup above."
            />
          </div>
        </section>

        {additionalServices.map((service, i) => (
          <ServiceDetail
            key={service.slug}
            service={service}
            index={services.length + i}
            total={total}
          />
        ))}

        <section className="relative bg-black py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-16">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Not sure which service is right for your car?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us what you're driving and what you're trying to solve — we'll put
              together a package that fits.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block bg-blood px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-red-glow transition-all duration-300 hover:shadow-red-glow-lg"
            >
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
