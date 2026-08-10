import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getBySlug } from '@/lib/mdx';
import { MDXContent } from '@/components/mdx/MDXContent';
import styles from './page.module.css';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getAllSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = getBySlug(slug);

  return (
    <article className="section">
      <div className="container">
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← All posts
          </Link>
          <h1>{post.frontmatter.title}</h1>
          <div className={styles.meta}>
            <span>
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        <MDXContent source={post.content} />
      </div>
    </article>
  );
}