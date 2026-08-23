import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Blackout Society collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title={
            <>
              Privacy <span className="text-blood">Policy.</span>
            </>
          }
          description="Last updated: August 23, 2026"
        />

        <section className="relative bg-base-light pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl space-y-10 px-6 sm:px-10 lg:px-16">
            <p className="text-base leading-relaxed text-ink/75">
              Blackout Society ("we," "us," or "our") respects your privacy. This policy explains what information we
              collect through theblackoutsociety.com, how we use it, and the choices you have. By using this site,
              you agree to the practices described below.
            </p>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Information We Collect</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                When you submit our contact or quote form, we collect the information you provide directly — your
                name, phone number, email address, the service you're interested in, and any vehicle or project
                details you include. We do not collect payment information through this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">How We Use Your Information</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                We use the information you submit to respond to quote requests, schedule appointments, and answer
                questions about our services. We do not sell, rent, or trade your personal information to third
                parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Cookies &amp; Analytics</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                This site may use standard web analytics tools to understand how visitors use our pages — for
                example, which pages are viewed and how visitors arrive at the site. This data is aggregated and
                does not identify you personally. You can disable cookies through your browser settings at any time.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Third-Party Links</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                Our site links to third-party platforms, including Instagram, Facebook, TikTok, and Google Maps.
                These platforms have their own privacy policies, and we are not responsible for their practices. We
                encourage you to review their policies before interacting with them.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Data Security</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                We take reasonable measures to protect the information you share with us. However, no method of
                transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Your Rights &amp; Choices</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                You may contact us at any time to request that we update, correct, or delete the personal
                information you've provided to us. We'll respond to reasonable requests within a reasonable
                timeframe.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Children's Privacy</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                Our site is not directed at children under 13, and we do not knowingly collect information from
                children.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Changes to This Policy</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                We may update this policy from time to time. Changes will be posted on this page with an updated
                "Last updated" date above.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Contact Us</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                Questions about this policy or your information? Reach out at{' '}
                <a href="mailto:blackoutsocietyllc@gmail.com" className="font-semibold text-blood hover:underline">
                  blackoutsocietyllc@gmail.com
                </a>{' '}
                or{' '}
                <a href="tel:+18779570491" className="font-semibold text-blood hover:underline">
                  (877) 957-0491
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
