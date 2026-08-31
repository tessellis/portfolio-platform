export interface Publication {
  title: string;
  venue: string;
  date: string;
  url: string;
  abstract: string;
}

export const publications: Publication[] = [
  {
    title: 'Placeholder Publication Title One',
    venue: 'Placeholder Journal Name',
    date: '2026',
    url: '#',
    abstract: 'One-line placeholder summary of what this publication covers and why it matters.',
  },
  {
    title: 'Placeholder Publication Title Two',
    venue: 'Placeholder Conference Proceedings',
    date: '2025',
    url: '#',
    abstract: 'One-line placeholder summary of what this publication covers and why it matters.',
  },
];