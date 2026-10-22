import type { ProgramItem } from './types';

/* ============================================================
   LEARNING PROGRAMS
   ------------------------------------------------------------
   Not a certificate wall. Each entry has to say what actually
   happened there — `what` is the whole point of the section.
   ============================================================ */

export const programs: ProgramItem[] = [
  {
    id: 'monshaat',
    name: 'Monsha’at Human Capital Program',
    location: 'Saudi Arabia',
    year: '2025–26',
    what: 'Built Tiin with guidance from Saudi founders, investors and ecosystem mentors, concluding in September 2026.',
    relatedWork: ['tiin'],
    order: 1,
  },
  {
    id: 'mckinsey-forward',
    name: 'McKinsey Forward Program',
    year: '2025',
    what: 'Structured problem solving, communication and the habit of writing the answer first.',
    order: 2,
  },
  {
    id: 'fintech-summer-sessions',
    name: 'Fintech Summer Sessions',
    location: 'Saudi Arabia',
    year: '2025',
    what: 'The Saudi fintech landscape — regulation, infrastructure and where SME finance actually sits in it.',
    relatedWork: ['tiin'],
    order: 3,
  },
  {
    id: 'misk-pristine',
    name: 'Misk × Pristine',
    year: '2025',
    what: 'Sustainability & Innovation — the innovation side of sustainability rather than the reporting side.',
    relatedWork: ['think-sustainability'],
    order: 4,
  },
  {
    id: 'mawhiba-metaminds',
    name: 'Mawhiba MetaMinds M3',
    year: '2026',
    what: 'Selected for the MetaMinds M3 cohort in 2026. The Garage Challenge opportunity came through the program.',
    order: 5,
  },
  {
    id: 'buildspace',
    name: 'buildspace',
    year: '2024',
    what: 'Ship something in a fixed number of weeks, in public, with everyone else doing the same.',
    order: 6,
  },
];

export const programsSorted: ProgramItem[] = [...programs].sort((a, b) => a.order - b.order);
