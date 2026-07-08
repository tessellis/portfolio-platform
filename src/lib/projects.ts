import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    description: 'A short one-line description of the flagship project goes here.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    categories: ['Full Stack', 'UX'],
    featured: true,
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'A short one-line description of this project.',
    tags: ['React', 'Node.js'],
    categories: ['Full Stack'],
    featured: false,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description: 'A short one-line description of this project.',
    tags: ['Python', 'TensorFlow'],
    categories: ['AI', 'Data'],
    featured: false,
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    description: 'A short one-line description of this project.',
    tags: ['Arduino', 'C++', 'MQTT'],
    categories: ['IoT'],
    featured: false,
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    description: 'A short one-line description of this project.',
    tags: ['Figma', 'React'],
    categories: ['UX'],
    featured: false,
  },
  {
    slug: 'project-six',
    title: 'Project Six',
    description: 'A short one-line description of this project.',
    tags: ['Python', 'pandas', 'D3.js'],
    categories: ['Data'],
    featured: false,
  },
];

export const allCategories: Project['categories'][number][] = [
  'Full Stack',
  'UX',
  'AI',
  'IoT',
  'Data',
];