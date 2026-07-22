import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { blogPosts } from '@/lib/data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        <article className="relative bg-base-light pb-20 pt-40 sm:pb-28 sm:pt-48">
          <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-60" />
          <div className="relative mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/60 transition-colors hover:text-blood"
            >
              &larr; All Posts
            </a>

            <span className="mt-6 inline-block w-fit border border-blood/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blood">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-ink/40">
              <span>{formatDate(post.date)}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>

            <div className="mt-10 flex aspect-[16/7] items-center justify-center border border-ink/10 bg-[repeating-linear-gradient(45deg,#1a1a1a,#1a1a1a_10px,#141414_10px,#141414_20px)]">
              <span className="border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Image Placeholder
              </span>
            </div>

            <div className="mt-10 space-y-6">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-ink/75">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14 border-t border-ink/10 pt-10 text-center">
              <p className="text-sm text-ink/60">Ready to get started?</p>
              <a
                href="/contact"
                className="mt-4 inline-block bg-blood px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-red-glow transition-all duration-300 hover:shadow-red-glow-lg"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="relative bg-base-panel py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
              <h2 className="font-display text-xl font-bold text-ink">More on {post.category}</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <a
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block border border-ink/10 bg-base-light p-5 transition-colors hover:border-blood/40"
                  >
                    <h3 className="font-display text-base font-bold text-ink transition-colors group-hover:text-blood">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{r.excerpt}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
