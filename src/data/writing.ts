import type { WritingItem } from './types';

/* ============================================================
   WRITING
   ------------------------------------------------------------
   Published pieces have real URLs. Earlier note titles stay in this
   file for later, but are hidden until their original links are added.
   Some dates on those hidden notes are placeholders.
   ============================================================ */

export const writing: WritingItem[] = [
  {
    id: 'fintech-eight-weeks',
    title: 'What 8 Weeks of Fintech Taught Me About Building a Real Startup in Saudi',
    date: 'Sep 2025',
    yearSort: 2025,
    topic: 'Fintech',
    shortDescription:
      'Eight weeks of Fintech Saudi Summer Sessions, compressed into what they actually imply for someone building here: predictive versus generative AI, crowdfunding trust and compliance, embedded finance, insurance, and designing around a real customer need.',
    platform: 'LinkedIn',
    externalLink:
      'https://www.linkedin.com/pulse/what-8-weeks-fintech-taught-me-building-real-startup-saudi-imran-ssyne',
    order: 0,
  },
  {
    id: 'progress-that-never-looks-like-progress',
    title: 'Progress That Never Looks Like Progress',
    date: '4 Jan 2026',
    yearSort: 2026,
    topic: 'Reflection',
    shortDescription: 'A year-end reflection on Tiin, university, leadership and choosing focus.',
    platform: 'Substack',
    externalLink: 'https://maryamimran.substack.com/p/progress-that-never-looks-like-progress',
    order: 1,
  },
  {
    id: 'hobbies-microbiologist',
    title: 'I tried a bunch of hobbies, almost became a microbiologist, and still don’t have a team leader',
    date: '1 Aug 2025',
    yearSort: 2025,
    topic: 'Newsletter',
    shortDescription: 'A personal July update on experiments, interests and work in progress.',
    platform: 'Substack',
    externalLink: 'https://maryamimran.substack.com/p/i-tried-a-bunch-of-hobbies-almost',
    order: 2,
  },
  {
    id: 'one-year-of-newsletters',
    title: 'One Year of Newsletters!! - June Dump',
    date: '10 Jul 2025',
    yearSort: 2025,
    topic: 'Newsletter',
    shortDescription: 'One year of monthly updates, looking back at June and the habit of writing.',
    platform: 'Substack',
    externalLink: 'https://maryamimran.substack.com/p/one-year-of-newsletters-june-dump',
    order: 3,
  },
  {
    id: 'april-may-combo-recap',
    title: 'Skipped April, Survived May: Welcome to the Combo Recap',
    date: '10 Jun 2025',
    yearSort: 2025,
    topic: 'Newsletter',
    shortDescription: 'An April and May recap from university and life outside the classroom.',
    platform: 'Substack',
    externalLink: 'https://maryamimran.substack.com/p/skipped-april-survived-may-welcome',
    order: 4,
  },
  {
    id: 'march-character-building',
    title: 'March Was a Character-Building Episode',
    date: '6 Apr 2025',
    yearSort: 2025,
    topic: 'Newsletter',
    shortDescription: 'A personal March recap and reflection.',
    platform: 'Substack',
    externalLink: 'https://maryamimran.substack.com/p/march-was-a-character-building-episode',
    order: 5,
  },
  {
    id: 'wrong-quickly',
    title: 'University teaches you to avoid being wrong. Real life rewards you for being wrong quickly.',
    date: '2026',
    yearSort: 2026,
    topic: 'Learning',
    shortDescription:
      'Four years of optimising for the right answer, then an environment that pays for the fast wrong one.',
    pullQuote:
      'University teaches you to avoid being wrong. Real life rewards you for being wrong quickly.',
    platform: 'LinkedIn',
    externalLink: '',
    order: 1,
  },
  {
    id: 'harvard-rejection',
    title: 'On the Harvard rejection',
    date: '2025',
    yearSort: 2025,
    topic: 'Ambition',
    shortDescription:
      'What a no from the place you aimed at actually costs you, and what it doesn’t.',
    platform: 'LinkedIn',
    externalLink: '',
    order: 2,
  },
  {
    id: 'is-money-enough',
    title: 'Is Money Enough?',
    date: '2025',
    yearSort: 2025,
    topic: 'Business',
    shortDescription:
      'On what capital solves for a small business, and the problems it leaves entirely intact.',
    platform: 'LinkedIn',
    externalLink: '',
    order: 3,
  },
  {
    id: 'turning-20',
    title: 'Turning 20',
    date: '2025',
    yearSort: 2025,
    topic: 'Personal',
    shortDescription: 'A stocktake, written mostly for myself.',
    platform: 'LinkedIn',
    externalLink: '',
    order: 4,
  },
  {
    id: 'learning-publicly',
    title: 'Learning publicly',
    date: '2025',
    yearSort: 2025,
    topic: 'Personal Branding',
    shortDescription:
      'The case for posting the half-finished version, and the actual cost of doing it.',
    platform: 'LinkedIn',
    externalLink: '',
    order: 5,
  },
  {
    id: 'founder-reflections',
    title: 'Founder reflections',
    date: '2026',
    yearSort: 2026,
    topic: 'Entrepreneurship',
    shortDescription:
      'Notes from building Tiin — customer discovery, changing direction, and what that feels like from inside.',
    platform: 'LinkedIn',
    externalLink: '',
    order: 6,
  },
  {
    id: 'sme-writing',
    title: 'On Saudi SMEs',
    date: '2026',
    yearSort: 2026,
    topic: 'Business',
    shortDescription:
      'What small business owners are actually asking for when they ask for better numbers.',
    platform: 'LinkedIn',
    externalLink: '',
    order: 7,
  },
  {
    id: 'student-leadership',
    title: 'On student leadership',
    date: '2024',
    yearSort: 2024,
    topic: 'Leadership',
    shortDescription:
      'Running things at university, where nobody reports to you and everything is voluntary.',
    platform: 'LinkedIn',
    externalLink: '',
    order: 8,
  },
];

export const writingSorted: WritingItem[] = writing
  .filter((item) => item.externalLink)
  .sort((a, b) => b.yearSort - a.yearSort || a.order - b.order);

/** Pieces that exist but whose original URLs are still missing. Never rendered. */
export const writingAwaitingLinks: WritingItem[] = writing.filter((item) => !item.externalLink);
