import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guides and breakdowns on window tint, PPF, ceramic coating, and vinyl wraps from Blackout Society.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="From The Shop"
          title={
            <>
              Straight answers, <span className="text-blood">no upsell.</span>
            </>
          }
          description="Guides on tint, protection film, and coatings — written by the people who install them. Placeholder posts below; real articles go here as they're published."
        />

        <section className="relative bg-base-light pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col border border-ink/10 bg-base-panel p-6 transition-colors duration-300 hover:border-blood/40"
                >
                  <div className="flex aspect-[16/10] items-center justify-center border border-ink/10 bg-[repeating-linear-gradient(45deg,#1a1a1a,#1a1a1a_10px,#141414_10px,#141414_20px)]">
                    <span className="border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      Image Placeholder
                    </span>
                  </div>
                  <span className="mt-5 inline-block w-fit border border-blood/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blood">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-blood">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink/40">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink transition-colors group-hover:text-blood">
                    Read Article
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
