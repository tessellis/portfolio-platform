import { getAllWork } from './mdx';

export function getFeaturedProjects() {
  return getAllWork()
    .filter((p) => p.frontmatter.featured)
    .slice(0, 3);
}

export function getAllProjects() {
  return getAllWork();
}