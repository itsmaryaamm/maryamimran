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
  | 'programs'
  | 'awards'
  | 'speaking'
  | 'courses';

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
}

export const groupMeta: Record<IndexGroup, { label: string; blurb: string }> = {
  education: { label: 'Education', blurb: 'Schools, university and summer study' },
  projects: { label: 'Projects & startups', blurb: 'Products, prototypes and competitions' },
  leadership: { label: 'Leadership & roles', blurb: 'Teams, representation and internships' },
  sustainability: { label: 'Sustainability', blurb: 'Campus initiatives and reporting' },
  events: { label: 'Events', blurb: 'Experiences connected to education' },
  programs: { label: 'Programs & work', blurb: 'Professional development and placements' },
  awards: { label: 'Awards', blurb: 'Academic recognition and competitions' },
  speaking: { label: 'Speaking & creative', blurb: 'Talks, writing and visual work' },
  courses: { label: 'Courses', blurb: 'Certificates and short courses' },
};

export const groupOrder: IndexGroup[] = [
  'education', 'projects', 'leadership', 'sustainability', 'events',
  'programs', 'awards', 'speaking', 'courses',
];

// IDs and order match the Word document's master index. Related roles and
// awards have one row each, instead of repeating them in several lenses.
const masterItems: MasterItem[] = [
  { id: 'E01', group: 'education', title: 'IE University — Breakthrough Robotics Program', workId: 'vita', year: '2026', meta: 'Madrid, Spain', detail: 'Completed the two-week Breakthrough Robotics program in Madrid. I led the three-person VITA team, which placed first among three teams in the final class competition.', tags: ['learn', 'build', 'lead'], media: { src: '/assets/technology/ie-program-certificate.jpg', alt: 'Maryam holding her IE University summer school certificate at the closing ceremony', ratio: '4/3' } },
  { id: 'E02', group: 'education', title: 'The Knowledge Society (TKS)', workId: 'tks', tags: ['learn', 'research'] },
  { id: 'E03', group: 'education', title: 'University of Business and Technology (UBT)', year: '2024—NOW', meta: 'Business Analytics & Information Systems', detail: 'Started in BBA Marketing in August 2024 and transferred to Business Analytics and Information Systems in June 2025. My university work also includes the Sustainability Club and BAIS Advisory Board.', tags: ['learn'] },
  { id: 'E04', group: 'education', title: 'Pakistan International School Jeddah English Section (PISJES)', year: '2012–2024', meta: 'Cambridge IGCSE & A Levels', detail: 'Completed Cambridge IGCSE and A Levels and served as Head Girl in 2023–24.', tags: ['learn', 'lead'] },

  { id: 'P01', group: 'projects', title: 'Flaire — The Garage Challenge', workId: 'flaire', tags: ['build', 'compete'] },
  { id: 'P02', group: 'projects', title: 'VITA — IE Robotics Project', workId: 'vita', year: '2026', tags: ['build', 'lead'] },
  { id: 'P03', group: 'projects', title: 'Friction — Digital Wellbeing App', year: '2026', meta: 'iOS app concept and prototype', detail: 'A digital wellbeing concept designed to introduce a deliberate pause before opening distracting apps.', tags: ['build', 'design'] },
  { id: 'P04', group: 'projects', title: 'Equi Finance — UBT Sparkathon', meta: 'Hackathon project', tags: ['build', 'compete'] },
  { id: 'P05', group: 'projects', title: 'Meta AI Chatbot — TKS', meta: 'AI project', tags: ['build', 'research'] },
  { id: 'P06', group: 'projects', title: 'WEF Education Challenge — TKS', meta: 'Education innovation challenge', tags: ['research', 'compete'] },
  { id: 'P07', group: 'projects', title: 'Moonshot Pirates — Sustenance', workId: 'moonshot-pirates', tags: ['build', 'compete'] },
  { id: 'P08', group: 'projects', title: 'Moonshot Abundance — Air to Water', workId: 'air-to-water', tags: ['build', 'research'] },
  { id: 'P09', group: 'projects', title: 'Pharmacy 3D Printing Hackathon', meta: 'Technology hackathon', tags: ['build', 'compete'] },
  { id: 'P10', group: 'projects', title: 'Food Connect App', meta: 'App project', tags: ['build'] },
  { id: 'P11', group: 'projects', title: 'Tiin — Startup Concept', workId: 'tiin', tags: ['build', 'lead'] },

  { id: 'R01', group: 'leadership', title: 'UBT Sustainability Club — PR Lead to President', workId: 'sustainability-club', year: '2025—NOW', detail: 'Moved from public relations work to club president on 27 February 2025, coordinating sustainability events, volunteers, outreach and student engagement.', tags: ['lead', 'operate'] },
  { id: 'R02', group: 'leadership', title: 'UBT BAIS Advisory Board — Student Representative', workId: 'bais-advisory-board', year: '2025—NOW', tags: ['lead'] },
  { id: 'R03', group: 'leadership', title: 'PISJES Head Girl', workId: 'head-girl', tags: ['lead', 'speak'] },
  { id: 'R04', group: 'leadership', title: 'Pakistan Humari Pehchaan', workId: 'pakistan-humari-pehchaan', tags: ['lead', 'market'] },
  { id: 'R05', group: 'leadership', title: 'UBT Administration Internship', meta: 'Administrative internship', tags: ['operate'] },

  { id: 'S01', group: 'sustainability', title: 'REBOOT — International E-Waste Day', year: '2026', meta: 'Campus awareness event', detail: 'An interactive electronic waste awareness event held on 14 October 2026, with repair and replacement activities, a look inside everyday technology, and reuse and recycling stations.', tags: ['lead', 'operate'] },
  { id: 'S02', group: 'sustainability', title: 'Think Sustainability', workId: 'think-sustainability', tags: ['lead', 'operate'] },
  { id: 'S03', group: 'sustainability', title: 'UBT Sustainability Literacy', workId: 'sustainability-literacy', tags: ['analyze', 'research'] },
  { id: 'S04', group: 'sustainability', title: 'Breast Cancer Awareness', year: '2026', meta: 'Awareness activities', detail: 'Worked on awareness materials and activities in October 2026, including pink ribbon designs, fact and myth concepts, and take-home information.', tags: ['design', 'operate'] },
  { id: 'S05', group: 'sustainability', title: 'Engineering Day', workId: 'engineering-day-ai', tags: ['speak'] },
  { id: 'S06', group: 'sustainability', title: 'Recycling Day', meta: 'Campus event', tags: ['operate'] },
  { id: 'S07', group: 'sustainability', title: 'Orientation Day and Sustainability Club Orientation', year: '2026', meta: 'Club orientation', detail: 'Prepared and presented an orientation covering the club’s teams, leaders, initiatives and volunteer opportunities.', tags: ['lead', 'speak'], media: { src: '/assets/impact/club-orientation.jpg', alt: 'Maryam presenting the UBT Sustainability Club orientation beside the presentation screen', ratio: '4/3' } },
  { id: 'S08', group: 'sustainability', title: 'Sustainability Rankings and Reporting Work', workId: 'ui-greenmetric', year: '2026', tags: ['analyze', 'research'] },

  { id: 'EV01', group: 'events', title: 'Food Gala & Bonanza', workId: 'food-gala', tags: ['lead', 'operate'] },

  { id: 'X01', group: 'programs', title: 'Mawhiba MetaMinds M3', year: '2026', meta: 'Talent development program', detail: 'Selected for the MetaMinds M3 cohort. The Garage Challenge opportunity came through this program.', tags: ['learn'] },
  { id: 'X02', group: 'programs', title: 'McKinsey Forward', meta: 'Professional development program', tags: ['learn'] },
  { id: 'X03', group: 'programs', title: 'Monsha’at Entrepreneurship Program', meta: 'Entrepreneurship program', tags: ['learn', 'build'] },
  { id: 'X04', group: 'programs', title: 'Fintech Saudi', meta: 'Program participation', tags: ['learn'] },
  { id: 'X05', group: 'programs', title: 'Foni Internship', workId: 'foni', tags: ['market', 'analyze'] },
  { id: 'X06', group: 'programs', title: 'Silent Kitchen Story Internship', workId: 'silent-kitchen-story', tags: ['market', 'design'] },
  { id: 'X07', group: 'programs', title: 'Misk Pristine Career Essentials', meta: 'Career development program', tags: ['learn'] },
  { id: 'X08', group: 'programs', title: 'Buildspace S5 — Archive', meta: 'Program participation archive', tags: ['learn', 'build'] },

  { id: 'A01', group: 'awards', title: 'Cambridge Outstanding Learner — Top in Saudi Arabia (AS Economics)', year: '2023', meta: 'Academic award', detail: 'Recognized as the Top in Saudi Arabia student in AS Level Economics.', tags: ['learn'] },
  { id: 'A02', group: 'awards', title: 'Cambridge Outstanding Learner — Top in Saudi Arabia (A Level Economics)', year: '2024', meta: 'Academic award', detail: 'Recognized as Top in Saudi Arabia in A Level Economics.', tags: ['learn'] },
  { id: 'A03', group: 'awards', title: 'NxL Season 3', workId: 'nestle-nxl', tags: ['compete'] },
  { id: 'A04', group: 'awards', title: 'L’Oréal Brandstorm', workId: 'loreal-brandstorm', tags: ['compete'] },
  { id: 'A05', group: 'awards', title: 'UBT Awards and Recognition', meta: 'Recognition collection', tags: ['learn'] },

  { id: 'M01', group: 'speaking', title: 'UBT AI Club — Agentic AI Talk', workId: 'agentic-ai', year: '2026', tags: ['speak'] },
  { id: 'M02', group: 'speaking', title: 'IBM Bob — AI Global Conference Session', year: '2026', meta: 'Conference session', detail: 'Shared reflections on AI trust and the social challenges around AI at a conference session on 16 October 2026.', tags: ['speak', 'research'] },
  { id: 'M03', group: 'speaking', title: 'Leadership and Youth Summits', meta: 'Speaking and conference participation', tags: ['speak'] },
  { id: 'M04', group: 'speaking', title: 'LinkedIn Content and Writing', meta: 'Professional writing', detail: 'Posts and reflections on projects, hackathons, AI, sustainability, learning and professional events.', tags: ['write'] },
  { id: 'M05', group: 'speaking', title: 'Substack Writing', meta: 'Long-form writing', tags: ['write'] },
  { id: 'M06', group: 'speaking', title: 'Motion Graphics and Creative Work', meta: 'Creative media', detail: 'Motion graphics experiments and tutorials, including AI-enabled animation and visual storytelling.', tags: ['design', 'write'] },

  { id: 'C01', group: 'courses', title: 'IBM Introduction to AI — Coursera', meta: 'Course', tags: ['learn'] },
  { id: 'C02', group: 'courses', title: 'IBM Interpersonal Skills — Coursera', meta: 'Course', tags: ['learn'] },
  { id: 'C03', group: 'courses', title: 'Leadership — University of Illinois / Coursera', meta: 'Course', tags: ['learn'] },
  { id: 'C04', group: 'courses', title: 'Creativity — Imperial College / Coursera', meta: 'Course', tags: ['learn'] },
  { id: 'C05', group: 'courses', title: 'Learning How to Learn — Coursera', meta: 'Course', tags: ['learn'] },
  { id: 'C06', group: 'courses', title: 'McKinsey Forward Certificates', meta: 'Certificates', tags: ['learn'] },
  { id: 'C07', group: 'courses', title: 'Other Coursera Certificates', meta: 'Certificate collection', tags: ['learn'] },
  { id: 'C08', group: 'courses', title: 'TKS Certificates', meta: 'Certificate collection', tags: ['learn'] },
  { id: 'C09', group: 'courses', title: 'Mawhiba Certificates', meta: 'Certificate collection', tags: ['learn'] },
  { id: 'C10', group: 'courses', title: 'Workshop and Training Certificates', meta: 'Certificate collection', tags: ['learn'] },
  { id: 'C11', group: 'courses', title: 'Competition Participation Certificates', meta: 'Certificate collection', tags: ['learn'] },
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
