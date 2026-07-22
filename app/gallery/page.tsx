import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import Gallery from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Before-and-after transformations from Blackout Society — window tint, PPF, ceramic coating, and vinyl wrap projects.',
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="The Proof"
          title={
            <>
              See the <span className="text-blood">transformation.</span>
            </>
          }
          description="A look at recent installs — hover any card to reveal the after. Real project photography replaces these placeholders as jobs come in."
        />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
