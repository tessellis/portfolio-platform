import Link from 'next/link';
import { MDXFile, BlogFrontmatter } from '@/lib/mdx';
import styles from './BlogList.module.css';

interface BlogListProps {
  posts: MDXFile<BlogFrontmatter>[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return <p className={styles.empty}>No posts yet — check back soon.</p>;
  }

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.item}>
          <div className={styles.itemHeader}>
            <h2>{post.frontmatter.title}</h2>
            <span className={styles.date}>
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
          <p className={styles.description}>{post.frontmatter.description}</p>
          <div className={styles.meta}>
            <span>{post.readingTime}</span>
            {post.frontmatter.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}