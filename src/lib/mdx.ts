import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const workDirectory = path.join(process.cwd(), 'src/content/work');
const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export interface WorkFrontmatter {
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  role: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
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

export function getAllBlogSlugs(): string[] {
  return getMDXFiles(blogDirectory).map((file) => file.replace(/\.mdx$/, ''));
}

export function getBlogBySlug(slug: string): MDXFile<BlogFrontmatter> {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllBlogPosts(): MDXFile<BlogFrontmatter>[] {
  return getAllBlogSlugs()
    .map((slug) => getBlogBySlug(slug))
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}