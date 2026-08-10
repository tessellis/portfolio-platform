import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const workDirectory = path.join(process.cwd(), 'src/content/work');

export interface WorkFrontmatter {
  title: string;
  description: string;
  heroImage?: string;
  tags: string[];
  categories: string[];
  role: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface MDXFile<T> {
  slug: string;
  frontmatter: T;
  content: string;
  readingTime?: string;
}

function getMDXFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((file) => file.endsWith('.mdx'));
}

export function getAllWorkSlugs(): string[] {
  return getMDXFiles(workDirectory).map((file) => file.replace(/\.mdx$/, ''));
}

export function getWorkBySlug(slug: string): MDXFile<WorkFrontmatter> {
  const filePath = path.join(workDirectory, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as WorkFrontmatter,
    content,
  };
}

export function getAllWork(): MDXFile<WorkFrontmatter>[] {
  return getAllWorkSlugs()
    .map((slug) => getWorkBySlug(slug))
    .sort((a, b) => Number(b.frontmatter.year) - Number(a.frontmatter.year));
}
