export type ProjectCategory = 'Full Stack' | 'UX' | 'AI' | 'IoT' | 'Data';

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  categories: ProjectCategory[];
  featured: boolean;
}