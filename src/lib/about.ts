export interface ExperienceEntry {
  role: string;
  org: string;
  dates: string;
  summary: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  dates: string;
  details: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Lead Software Engineer',
    org: 'OPEnS Lab',
    dates: '2025 — 2026',
    summary: 'Led development of Ear2Earth, an open-source IoT environmental sensor data visualization and sonification platform.',
    bullets: [
      'Architected and built the core data visualization pipeline',
      'Redesigned the UI color system and centralized CSS tokens for accessibility',
      'Mentored team members on frontend architecture decisions',
      'Presented the project at the university engineering expo',
    ],
  },
  {
    role: 'Placeholder Role',
    org: 'Placeholder Company',
    dates: '2024 — 2025',
    summary: 'One-line summary of what you did in this role.',
    bullets: [
      'Placeholder accomplishment one',
      'Placeholder accomplishment two',
      'Placeholder accomplishment three',
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: 'Honors B.S., Computer Science',
    school: 'Oregon State University',
    dates: '2022 — 2026',
    details: 'Summa cum laude. Honors thesis and coursework in HCI, deep learning, and database systems.',
  },
];