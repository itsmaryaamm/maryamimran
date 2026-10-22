import type { MediaItem, Tag, WorkItem } from './types';
import { workById } from './work';

// The Everything page follows the master index in Portfolio_Master_Editable.docx.
// Some source records are still blank. Keep those rows factual and concise until
// Maryam provides their dates, descriptions, and images.
export type IndexGroup =
  | 'education'
  | 'projects'
  | 'leadership'
  | 'sustainability'
  | 'events'
  | 'learning'
  | 'awards'
  | 'writing'
  | 'certificates';

export interface IndexEntry {
  key: string;
  group: IndexGroup;
  title: string;
  titleAlt?: string;
  meta: string;
  year: string;
  yearSort: number;
  tags: Tag[];
  shortDescription?: string;
  featuredMedia?: MediaItem;
  work?: WorkItem;
  detail?: string;
  href?: string;
  document?: string;
}

interface MasterItem {
  id: string;
  group: IndexGroup;
  title: string;
  workId?: string;
  year?: string;
  meta?: string;
  detail?: string;
  tags?: Tag[];
  media?: MediaItem;
  document?: string;
}

export const groupMeta: Record<IndexGroup, { label: string; blurb: string }> = {
  education: { label: 'Education', blurb: 'Schools, university and summer study' },
  projects: { label: 'Projects & startups', blurb: 'Products, prototypes and competitions' },
  leadership: { label: 'Leadership & roles', blurb: 'Teams, representation and internships' },
  sustainability: { label: 'Sustainability', blurb: 'Campus initiatives and reporting' },
  events: { label: 'Events', blurb: 'Experiences connected to education' },
  learning: { label: 'Learning', blurb: 'Programs and practice beyond formal education' },
  awards: { label: 'Awards', blurb: 'Academic recognition and competitions' },
  writing: { label: 'Writing & creative', blurb: 'Posts, long-form writing and visual work' },
  certificates: { label: 'Certificates & courses', blurb: 'Short courses and credentials' },
};

export const groupOrder: IndexGroup[] = [
  'education', 'projects', 'leadership', 'sustainability', 'events',
  'learning', 'awards', 'writing', 'certificates',
];

// IDs and order match the Word document's master index. Related roles and
// awards have one row each, instead of repeating them in several lenses.
const masterItems: MasterItem[] = [
  { id: 'E01', group: 'education', title: 'IE University — Breakthrough Robotics Program', year: '2026', meta: 'Madrid, Spain', detail: 'Completed the two-week Breakthrough Robotics program in Madrid. I led the three-person VITA team, which placed first among three teams in the final class competition.', tags: ['learn', 'build', 'lead'], media: { src: '/assets/technology/ie-program-certificate.jpg', alt: 'Maryam holding her IE University summer school certificate at the closing ceremony', ratio: '4/3' } },
  { id: 'E02', group: 'education', title: 'The Knowledge Society (TKS)', workId: 'tks', tags: ['learn', 'research'] },
  { id: 'E03', group: 'education', title: 'University of Business and Technology (UBT)', year: '2024—NOW', meta: 'Business Analytics & Information Systems', detail: 'Started in BBA Marketing in August 2024 and transferred to Business Analytics and Information Systems in June 2025. My university work also includes the Sustainability Club and BAIS Advisory Board.', tags: ['learn'], media: { src: '/assets/impact/ubt-speaking.jpg', alt: 'Maryam speaking to students at the University of Business and Technology', ratio: '4/3' } },
  { id: 'E04', group: 'education', title: 'Pakistan International School Jeddah English Section (PISJES)', year: '2012–2024', meta: 'Cambridge IGCSE & A Levels', detail: 'Completed Cambridge IGCSE and A Levels and served as Head Girl in 2023–24.', tags: ['learn', 'lead'] },

  { id: 'P01', group: 'projects', title: 'Flaire — The Garage Challenge', workId: 'flaire', tags: ['build', 'compete'] },
  { id: 'P02', group: 'projects', title: 'VITA — IE Robotics Project', workId: 'vita', year: '2026', tags: ['build', 'lead'] },
  { id: 'P03', group: 'projects', title: 'Friction — Digital Wellbeing App', year: '2026', meta: 'iOS app concept and prototype', detail: 'A digital wellbeing concept designed to introduce a deliberate pause before opening distracting apps.', tags: ['build', 'design'] },
  { id: 'P04', group: 'projects', title: 'EquiFinance — UBT Sparkathon', workId: 'equi-finance', tags: ['build', 'compete'] },
  { id: 'P05', group: 'projects', title: 'Damian — Meta AI Challenge', workId: 'meta-damian', tags: ['build', 'research'] },
  { id: 'P06', group: 'projects', title: 'WE-Think — WEF Education Challenge', workId: 'we-think', tags: ['research', 'compete'] },
  { id: 'P07', group: 'projects', title: 'Moonshot Pirates — Sustenance', workId: 'moonshot-pirates', tags: ['build', 'compete'] },
  { id: 'P08', group: 'projects', title: 'Moonshot Abundance — Air to Water', workId: 'air-to-water', tags: ['build', 'research'] },
  { id: 'P09', group: 'projects', title: 'Pharmacy 3D Printing Hackathon', workId: 'pharmacy-3d', tags: ['build', 'compete'] },
  { id: 'P10', group: 'projects', title: 'Food Connect App — TKS', meta: 'App project', tags: ['build'] },
  { id: 'P11', group: 'projects', title: 'Tiin — Venture & Demo Day', workId: 'tiin', tags: ['build', 'lead', 'speak'] },

  { id: 'R01', group: 'leadership', title: 'UBT Sustainability Club — President', workId: 'sustainability-club', year: '2025—NOW', detail: 'Led PR before becoming club president on 27 February 2025. Coordinated sustainability events, volunteers, outreach and student engagement.', tags: ['lead', 'operate'] },
  { id: 'R02', group: 'leadership', title: 'UBT BAIS Advisory Board — Student Representative', workId: 'bais-advisory-board', year: '2025—NOW', tags: ['lead'] },
  { id: 'R03', group: 'leadership', title: 'PISJES Head Girl', workId: 'head-girl', tags: ['lead', 'speak'] },
  { id: 'R04', group: 'leadership', title: 'Pakistan Humari Pehchaan', workId: 'pakistan-humari-pehchaan', tags: ['lead', 'market'] },
  { id: 'R05', group: 'leadership', title: 'UBT Administration Internship', meta: 'Administrative internship', tags: ['operate'] },
  { id: 'X05', group: 'leadership', title: 'Foni Internship', workId: 'foni', tags: ['market', 'analyze'] },
  { id: 'X06', group: 'leadership', title: 'Silent Kitchen Story Internship', workId: 'silent-kitchen-story', tags: ['market', 'design'] },

  { id: 'S01', group: 'sustainability', title: 'REBOOT — International E-Waste Day', year: '2026', meta: 'Campus awareness event', detail: 'An interactive electronic waste awareness event held on 14 October 2026, with repair and replacement activities, a look inside everyday technology, and reuse and recycling stations.', tags: ['lead', 'operate'] },
  { id: 'S02', group: 'sustainability', title: 'Think Sustainability', workId: 'think-sustainability', tags: ['lead', 'operate'] },
  { id: 'S03', group: 'sustainability', title: 'UBT Sustainability Literacy', workId: 'sustainability-literacy', tags: ['analyze', 'research'] },
  { id: 'S04', group: 'sustainability', title: 'Breast Cancer Awareness', year: '2026', meta: 'Awareness activities', detail: 'Worked on awareness materials and activities in October 2026, including pink ribbon designs, fact and myth concepts, and take-home information.', tags: ['design', 'operate'] },
  { id: 'S06', group: 'sustainability', title: 'Recycling Day', meta: 'Campus event', tags: ['operate'] },
  { id: 'S07', group: 'sustainability', title: 'Orientation Day and Sustainability Club Orientation', year: '2026', meta: 'Club orientation', detail: 'Prepared and presented an orientation covering the club’s teams, leaders, initiatives and volunteer opportunities.', tags: ['lead', 'speak'], media: { src: '/assets/impact/club-orientation.jpg', alt: 'Maryam presenting the UBT Sustainability Club orientation beside the presentation screen', ratio: '4/3' } },
  { id: 'S08', group: 'sustainability', title: 'Sustainability Rankings and Reporting Work', workId: 'ui-greenmetric', year: '2026', tags: ['analyze', 'research'] },

  { id: 'EV01', group: 'events', title: 'Food Bonanza', workId: 'food-gala', tags: ['lead', 'operate'] },
  { id: 'S05', group: 'events', title: 'Agentic AI — Engineering Day', workId: 'engineering-day-ai', tags: ['speak'] },
  { id: 'M01', group: 'events', title: 'UBT AI Club — Online Agentic AI Workshop', workId: 'agentic-ai', year: '2026', tags: ['speak'] },
  { id: 'M02', group: 'events', title: 'IBM Bob — AI Global Conference Session', year: '2026', meta: 'Conference session', detail: 'Shared reflections on AI trust and the social challenges around AI at a conference session on 16 October 2026.', tags: ['speak', 'research'] },
  { id: 'M03', group: 'events', title: 'Leadership and Youth Summits', meta: 'Speaking and conference participation', tags: ['speak'] },

  { id: 'X01', group: 'learning', title: 'Mawhiba MetaMinds M3', year: '2026', meta: 'Talent development program', detail: 'Selected for the MetaMinds M3 cohort. The Garage Challenge opportunity came through this program.', tags: ['learn'] },
  { id: 'X02', group: 'learning', title: 'McKinsey Forward', meta: 'Professional development program', tags: ['learn'] },
  { id: 'X03', group: 'learning', title: 'Monsha’at Entrepreneurship Program', meta: 'Entrepreneurship program', tags: ['learn', 'build'] },
  { id: 'X04', group: 'learning', title: 'Fintech Saudi', meta: 'Program participation', tags: ['learn'] },
  { id: 'X07', group: 'learning', title: 'Misk Pristine Career Essentials', meta: 'Career development program', tags: ['learn'] },
  { id: 'X08', group: 'learning', title: 'Buildspace S5 — Archive', meta: 'Program participation archive', tags: ['learn', 'build'] },
  { id: 'L01', group: 'learning', title: 'Automation & Low-Code Practice', workId: 'automation-lowcode', year: '2025', tags: ['learn', 'build'] },

  { id: 'A01', group: 'awards', title: 'Cambridge Outstanding Learner — Top in Saudi Arabia (AS Economics)', year: '2023', meta: 'Academic award', detail: 'Recognized as the Top in Saudi Arabia student in AS Level Economics.', tags: ['learn'], document: '/assets/certificates/cambridge-as-economics.pdf' },
  { id: 'A02', group: 'awards', title: 'Cambridge Outstanding Learner — Top in Saudi Arabia (A Level Economics)', year: '2024', meta: 'Academic award', detail: 'Recognized as Top in Saudi Arabia in A Level Economics.', tags: ['learn'], document: '/assets/certificates/cambridge-a-economics.pdf' },
  { id: 'A03', group: 'awards', title: 'Nestlé NxL — Next Level Season 3', workId: 'nestle-nxl', tags: ['compete'] },
  { id: 'A04', group: 'awards', title: 'L’Oréal Brandstorm', workId: 'loreal-brandstorm', tags: ['compete'] },
  { id: 'A05', group: 'awards', title: 'UBT Awards and Recognition', meta: 'Recognition collection', detail: 'A photograph from a university certificate presentation.', tags: ['learn'], media: { src: '/assets/impact/ubt-certificate-presentation.jpg', alt: 'Maryam with attendees at a university certificate presentation', ratio: '4/3' } },

  { id: 'M04', group: 'writing', title: 'LinkedIn Content and Writing', meta: 'Professional writing', detail: 'Posts and reflections on projects, hackathons, AI, sustainability, learning and professional events.', tags: ['write'] },
  { id: 'M05', group: 'writing', title: 'Substack Writing', meta: 'Long-form writing', tags: ['write'] },
  { id: 'M06', group: 'writing', title: 'Motion Graphics and Creative Work', meta: 'Creative media', detail: 'Motion graphics experiments and tutorials, including AI-enabled animation and visual storytelling.', tags: ['design', 'write'] },

  { id: 'C01', group: 'certificates', title: 'IBM Introduction to AI — Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/ibm-intro-ai.pdf', detail: 'IBM Introduction to Artificial Intelligence course certificate.' },
  { id: 'C02', group: 'certificates', title: 'IBM Developing Interpersonal Skills — Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/ibm-interpersonal-skills.pdf', detail: 'IBM interpersonal skills course certificate.' },
  { id: 'C03', group: 'certificates', title: 'Leadership — University of Illinois / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/illinois-leadership.pdf', detail: 'University of Illinois leadership course certificate.' },
  { id: 'C04', group: 'certificates', title: 'Introduction to Creative Thinking — Imperial College / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/imperial-creative-thinking.pdf', detail: 'Imperial College London creative thinking course certificate.' },
  { id: 'C05', group: 'certificates', title: 'Learning How to Learn — Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/learning-how-to-learn.pdf', detail: 'Learning How to Learn course certificate.' },
  { id: 'C06', group: 'certificates', title: 'McKinsey Forward Certificates', meta: 'Certificates', tags: ['learn'] },
  { id: 'C07', group: 'certificates', title: 'The Science of Well-Being — Yale / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/yale-wellbeing.pdf', detail: 'Yale University Science of Well-Being course certificate.' },
  { id: 'C12', group: 'certificates', title: 'Mindshift — McMaster University / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/mcmaster-mindshift.pdf', detail: 'McMaster University Mindshift course certificate.' },
  { id: 'C13', group: 'certificates', title: 'Communication in the 21st Century Workplace — UC Irvine / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/uci-communication.pdf', detail: 'University of California, Irvine workplace communication course certificate.' },
  { id: 'C14', group: 'certificates', title: 'Effective Problem-Solving and Decision-Making — UC Irvine / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/uci-problem-solving.pdf', detail: 'University of California, Irvine problem-solving and decision-making course certificate.' },
  { id: 'C15', group: 'certificates', title: 'Positive Psychology: Resilience Skills — University of Pennsylvania / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/upenn-resilience.pdf', detail: 'University of Pennsylvania resilience skills course certificate.' },
  { id: 'C08', group: 'certificates', title: 'TKS Certificates', meta: 'Certificate collection', tags: ['learn'] },
  { id: 'C09', group: 'certificates', title: 'Mawhiba Certificates', meta: 'Certificate collection', tags: ['learn'] },
  { id: 'C10', group: 'certificates', title: 'Workshop and Training Certificates', meta: 'Certificate collection', tags: ['learn'] },
  { id: 'C11', group: 'certificates', title: 'Competition Participation Certificates', meta: 'Certificate collection', tags: ['learn'] },
];

export const indexEntries: IndexEntry[] = masterItems.map((item) => {
  const work = item.workId ? workById(item.workId) : undefined;
  const year = item.year ?? work?.year ?? '—';
  return {
    key: item.id,
    group: item.group,
    title: item.title,
    titleAlt: work?.titleAlt,
    meta: item.meta ?? work?.role ?? 'Experience',
    year,
    yearSort: Number(year.match(/\d{4}/)?.[0]) || 0,
    tags: item.tags ?? work?.secondaryTags ?? [],
    shortDescription: item.detail ?? work?.shortDescription,
    featuredMedia: item.media ?? work?.featuredMedia,
    work,
    detail: item.detail,
    document: item.document,
  };
});

// Keep the source document's order inside each section. Undated records do
// not jump to the top or acquire a guessed year.
export const entriesInGroup = (group: IndexGroup): IndexEntry[] =>
  indexEntries.filter((entry) => entry.group === group);

export const groupCounts: Record<IndexGroup, number> = groupOrder.reduce(
  (counts, group) => {
    counts[group] = entriesInGroup(group).length;
    return counts;
  },
  {} as Record<IndexGroup, number>,
);

export const distinctEntryCount = indexEntries.length;
