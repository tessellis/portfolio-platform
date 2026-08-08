import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllWorkSlugs, getWorkBySlug, getAllWork } from '@/lib/mdx';
import { MDXContent } from '@/components/mdx/MDXContent';
import styles from './page.module.css';
import Image from 'next/image';

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getAllWorkSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const project = getWorkBySlug(slug);
  const allProjects = getAllWork();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = allProjects[currentIndex - 1];
  const nextProject = allProjects[currentIndex + 1];

  return (
    <article className="section">
      <div className="container">
        <div className={styles.header}>
          <Link href="/work" className={styles.backLink}>
            ← All projects
          </Link>

          <h1>{project.frontmatter.title}</h1>
          <p className={styles.description}>{project.frontmatter.description}</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span>{project.frontmatter.role}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span>{project.frontmatter.year}</span>
            </div>
            {project.frontmatter.liveUrl && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Live</span>
                <a href={project.frontmatter.liveUrl} target="_blank" rel="noopener noreferrer">
                  View site →
                </a>
              </div>
            )}
            {project.frontmatter.githubUrl && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Code</span>
                <a href={project.frontmatter.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              </div>
            )}
          </div>

          <div className={styles.tags}>
            {project.frontmatter.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.frontmatter.heroImage ? (
          <div className={styles.heroImageWrap}>
            <Image
              src={project.frontmatter.heroImage}
              alt={project.frontmatter.title}
              fill
              className={styles.heroImage}
              priority
            />
          </div>
        ) : (
          <div className={styles.heroImagePlaceholder} />
        )}

        <MDXContent source={project.content} />

        <nav className={styles.projectNav}>
          {prevProject ? (
            <Link href={`/work/${prevProject.slug}`} className={styles.navLink}>
              <span className={styles.navLabel}>← Previous</span>
              <span>{prevProject.frontmatter.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject && (
            <Link href={`/work/${nextProject.slug}`} className={`${styles.navLink} ${styles.navLinkRight}`}>
              <span className={styles.navLabel}>Next →</span>
              <span>{nextProject.frontmatter.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}