'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const serviceOptions = ['Window Tint', 'Paint Protection Film', 'Ceramic Coating', 'Home Window Tinting', 'Not Sure Yet'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;

    try {
      const res = await fetch('https://formsubmit.co/ajax/blackoutsocietyllc@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative bg-base-panel py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Form */}
          <div className="border border-ink/10 bg-white/5 p-8 sm:p-10">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[380px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center bg-blood text-2xl font-extrabold text-white">
                  &#10003;
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">Request received.</h3>
                <p className="mt-3 max-w-sm text-sm text-ink/60">
                  Thanks for reaching out — a member of our team will contact you shortly to confirm details and schedule your appointment.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="New Quote Request — Blackout Society" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" type="text" required autoComplete="name" />
                  <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <div>
                  <label htmlFor="service" className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/60">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full border border-ink/15 bg-base-light px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-blood"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/60">
                    Vehicle &amp; Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Year, make, model, and anything else we should know"
                    className="w-full resize-none border border-ink/15 bg-base-light px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-blood"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-sm font-semibold text-blood">
                    Something went wrong sending your request — please call us at{' '}
                    <a href="tel:+18779570491" className="underline">
                      (877) 957-0491
                    </a>{' '}
                    instead.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={cn(
                    'w-full bg-blood px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-red-glow-lg disabled:opacity-70'
                  )}
                >
                  {status === 'submitting' ? 'Sending...' : 'Request Free Quote'}
                </button>
              </form>
            )}
          </div>

          {/* Info + map */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InfoBlock title="Call Us" value="(877) 957-0491" href="tel:+18779570491" />
              <InfoBlock title="Email" value="blackoutsocietyllc@gmail.com" href="mailto:blackoutsocietyllc@gmail.com" />
              <InfoBlock title="Location" value="Bedford, Texas" />
              <InfoBlock title="Hours" value="Mon–Sat, 9AM–7PM" />
            </div>

            <div className="relative aspect-video w-full overflow-hidden border border-ink/10 grayscale transition-all duration-500 hover:grayscale-0">
              <iframe
                title="Blackout Society Shop Location Map"
                src="https://www.google.com/maps?q=Bedford%2C%20Texas&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute bottom-2 left-2 border border-black/20 bg-white/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/60">
                Placeholder Map — Update With Real Address
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-ink/15 bg-base-light px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-blood"
      />
    </div>
  );
}

function InfoBlock({ title, value, href }: { title: string; value: string; href?: string }) {
  const content = (
    <>
      <p className="text-xs font-bold uppercase tracking-widest text-ink/50">{title}</p>
      <p className="mt-2 text-base font-bold text-ink">{value}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} className="block border border-ink/10 bg-white/5 p-5 transition-colors hover:border-blood/40">
        {content}
      </a>
    );
  }

  return <div className="border border-ink/10 bg-white/5 p-5">{content}</div>;
}
