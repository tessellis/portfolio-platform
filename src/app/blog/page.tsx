import { BlogList } from '@/components/sections/BlogList';
import { getAllBlogPosts } from '@/lib/mdx';
import styles from './page.module.css';

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <section className={`${styles.page} section`}>
      <div className="container">
        <div className={styles.header}>
          <h1>Blog</h1>
          <p>Writing on process, decisions, and things I&apos;m learning.</p>
        </div>
        <BlogList posts={posts} />
      </div>
    </section>
  );
}