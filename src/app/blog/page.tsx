import { List } from '@/components/sections/List';
import { getAllPosts } from '@/lib/mdx';
import styles from './page.module.css';

export default function () {
  const posts = getAllPosts();

  return (
    <section className={`${styles.page} section`}>
      <div className="container">
        <div className={styles.header}>
          <h1></h1>
          <p>Writing on process, decisions, and things I&apos;m learning.</p>
        </div>
        <List posts={posts} />
      </div>
    </section>
  );
}