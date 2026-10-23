import type { EducationItem, RecognitionItem } from './types';

/* ============================================================
   EDUCATION + RECOGNITION
   ------------------------------------------------------------
   `verified: false` entries stay in the data and are never
   rendered. Flip to true once you've confirmed the exact wording.
   No trophies, no medals, no certificate wall — numbers and type.
   ============================================================ */

export const education: EducationItem[] = [
  {
    id: 'ubt-bais',
    institution: 'University of Business & Technology',
    short: 'UBT',
    qualification: 'Business Analytics & Information Systems',
    results: [{ label: 'CGPA', value: '5.0 / 5.0' }],
    detail: ['Jeddah, Saudi Arabia', 'CGPA 5.0 / 5.0'],
    year: '2024—NOW',
    order: 1,
  },
  {
    id: 'ie-university',
    institution: 'IE University',
    short: 'IE University',
    qualification: 'Breakthrough Robotics Summer Program',
    detail: ['Madrid, Spain', 'Led the VITA robotics team in 2026'],
    year: '2026',
    order: 2,
  },
  {
    id: 'pisjes',
    institution: 'Pakistan International School Jeddah — English Section',
    short: 'PISJES',
    qualification: 'Cambridge IGCSE & A Levels',
    results: [
      { label: 'Economics', value: 'A*' },
      { label: 'Business', value: 'A*' },
      { label: 'Mathematics', value: 'A' },
    ],
    year: '2012–2024',
    order: 3,
  },
  {
    id: 'tks',
    institution: 'The Knowledge Society',
    short: 'TKS',
    qualification: 'Emerging technology and innovation program',
    detail: ['2023–24', 'Meta AI, WEF education, Food Connect and moonshot projects'],
    year: '2023–24',
    order: 4,
  },
];

export const recognition: RecognitionItem[] = [
  {
    id: 'cgpa',
    value: '5.0',
    title: 'CGPA',
    organization: 'University of Business & Technology',
    year: '2024—NOW',
    detail: 'Out of 5.0',
    verified: true,
    group: 'academic',
    order: 1,
  },
  {
    id: 'cba-recognition',
    title: 'Academic Recognition',
    organization: 'College of Business Administration, UBT',
    year: '2025',
    verified: true,
    group: 'academic',
    order: 2,
  },
  {
    /* Was two entries — the award and the placing — with the placing held
       back for wording. Maryam confirmed it, so they are one record now. */
    id: 'outstanding-cambridge-learner',
    value: 'TOP IN KSA',
    title: 'Outstanding Cambridge Learner',
    organization: 'Cambridge International',
    year: '2024',
    detail: 'Economics, at AS Level and again at A Level',
    verified: true,
    group: 'academic',
    order: 3,
  },
  {
    id: 'ie-robotics-first',
    value: '1ST',
    title: 'Breakthrough Robotics Program',
    organization: 'IE University, Madrid',
    year: '2026',
    detail: 'VITA — Visual Infrared Transport Assistant',
    verified: true,
    group: 'competition',
    order: 5,
  },
  {
    id: 'moonshot-pirates-result',
    value: 'TOP 7',
    title: 'Moonshot Pirates',
    year: '2024–25',
    detail: 'Global Sustainability Challenge — placed top 7 out of 78 teams',
    verified: true,
    group: 'competition',
    order: 6,
  },
  {
    id: 'flaire-garage-challenge',
    value: '7TH',
    title: 'The Garage Challenge',
    organization: 'The Garage, Riyadh',
    year: '2026',
    detail: 'Flaire — hackathon MVP, 10-person team',
    verified: true,
    group: 'competition',
    order: 7,
  },
  {
    id: 'appreciation-letters',
    title: 'Letters of Appreciation',
    organization: 'University of Business & Technology',
    year: '2025',
    detail: 'For sustainability programming and institutional work',
    verified: true,
    group: 'appreciation',
    order: 7,
  },
];

/** Only verified entries ever reach the UI. */
export const publishedRecognition: RecognitionItem[] = recognition
  .filter((r) => r.verified)
  .sort((a, b) => a.order - b.order);

export const educationSorted: EducationItem[] = [...education].sort((a, b) => a.order - b.order);
