import { constructMetadata } from '@/lib/seo';
import BlogHero from '@/components/blog/BlogHero';
import BlogList from '@/components/blog/BlogList';

export const metadata = constructMetadata({
  title: 'Blog | BKP Developers',
  description: 'Read our latest articles, insights, and news on software development, design, marketing, and technology trends.',
});

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  );
}
