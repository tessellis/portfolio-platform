export interface Publication {
  title: string;
  venue: string;
  date: string;
  url: string;
  abstract: string;
}

export const publications: Publication[] = [
  {
    title: 'Ear2Earth: Leveraging the Digital Audio Workstation Paradigm for Accessible Scientific Data Sonification',
    venue: 'Undergraduate Honors Thesis, Oregon State University',
    date: '2026',
    url: 'https://ir.library.oregonstate.edu/concern/honors_college_theses/bz60d601g',
    abstract: 'A web-based platform that sonifies environmental sensor data using a Digital Audio Workstation interface, built for non-technical audiences.',
  },
  {
    title: 'Celebrating Identity Series',
    venue: 'PRISM — OSU Art & Literary Journal',
    date: '2024',
    url: 'https://prism.orangemedianetwork.com/?s=tess+ellis',
    abstract: 'Two personal essays — on the Maya cenotes and on Día de Muertos — selected for PRISM\'s Celebrating Identity Series, paired with an artist interview.',
  },
];