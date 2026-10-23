import type { DocumentItem, MediaItem, Tag, WorkItem } from './types';
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
  categories: IndexGroup[];
  title: string;
  titleAlt?: string;
  meta: string;
  year: string;
  yearSort: number;
  tags: Tag[];
  shortDescription?: string;
  featuredMedia?: MediaItem;
  images?: MediaItem[];
  work?: WorkItem;
  detail?: string;
  href?: string;
  document?: string;
  documents?: DocumentItem[];
  related?: { label: string; key: string }[];
}

interface MasterItem {
  id: string;
  group: IndexGroup;
  categories?: IndexGroup[];
  title: string;
  workId?: string;
  year?: string;
  meta?: string;
  detail?: string;
  tags?: Tag[];
  media?: MediaItem;
  images?: MediaItem[];
  document?: string;
  documents?: DocumentItem[];
  related?: { label: string; key: string }[];
  href?: string;
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

// Each experience has one record; categories can overlap in the filters.
const masterItems: MasterItem[] = [
  { id: 'E01', group: 'education', title: 'IE University — Breakthrough Robotics Program', year: '2026', meta: 'Madrid, Spain', detail: 'Completed the two-week Breakthrough Robotics program in Madrid. I led the three-person VITA team, which placed first among three teams in the final class competition.', tags: ['learn', 'build', 'lead'], media: { src: '/assets/technology/ie-program-certificate.jpg', alt: 'Maryam holding her IE University summer school certificate at the closing ceremony', ratio: '4/3' }, documents: [{ label: 'IE University Breakthrough Robotics certificate', src: '/assets/certificates/ie-breakthrough-robotics.pdf', pages: 1 }], related: [{ label: 'VITA robotics project', key: 'P02' }] },
  { id: 'E02', group: 'education', title: 'The Knowledge Society (TKS)', workId: 'tks', tags: ['learn', 'research'], related: [{ label: 'WE-Think', key: 'P06' }, { label: 'Damian', key: 'P05' }, { label: 'Air-to-Water', key: 'P08' }, { label: 'Pharmacy 3D Printing', key: 'P09' }] },
  { id: 'E03', group: 'education', title: 'University of Business and Technology (UBT)', year: '2024—NOW', meta: 'Business Analytics & Information Systems', detail: 'Started in BBA Marketing in August 2024 and transferred to Business Analytics and Information Systems in June 2025. My university work also includes the Sustainability Club and BAIS Advisory Board.', tags: ['learn'], media: { src: '/assets/impact/ubt-speaking.jpg', alt: 'Maryam speaking to students at the University of Business and Technology', ratio: '4/3' } },
  { id: 'E04', group: 'education', title: 'Pakistan International School Jeddah English Section (PISJES)', year: '2012–2024', meta: 'Cambridge IGCSE & A Levels', detail: 'Completed Cambridge IGCSE and A Levels with A* in Economics and Business and A in Mathematics. Received Cambridge Outstanding Learner recognition for Top in Saudi Arabia in AS and A Level Economics, and served as Head Girl in 2023–24.', tags: ['learn', 'lead'], media: { src: '/assets/impact/head-girl-maroon.jpg', alt: 'Maryam in her Head Girl blazer', ratio: '4/3' }, related: [{ label: 'Head Girl', key: 'R03' }, { label: 'Cambridge awards', key: 'A01' }] },

  { id: 'P01', group: 'projects', title: 'Flaire — The Garage Challenge', workId: 'flaire', tags: ['build', 'compete'] },
  { id: 'P02', group: 'projects', title: 'VITA — IE Robotics Project', workId: 'vita', year: '2026', tags: ['build', 'lead'] },
  { id: 'P03', group: 'projects', title: 'Friction — Digital Wellbeing App', year: '2026', meta: 'iOS app concept and prototype', detail: 'A digital wellbeing concept designed to introduce a deliberate pause before opening distracting apps.', tags: ['build', 'design'] },
  { id: 'P04', group: 'projects', title: 'EquiFinance — UBT Sparkathon', workId: 'equi-finance', tags: ['build', 'compete'] },
  { id: 'P05', group: 'projects', title: 'Damian — Meta AI Challenge', workId: 'meta-damian', tags: ['build', 'research'] },
  { id: 'P06', group: 'projects', title: 'WE-Think — WEF Education Challenge', workId: 'we-think', tags: ['research', 'compete'] },
  { id: 'P07', group: 'projects', title: 'Moonshot Pirates — Sustenance', workId: 'moonshot-pirates', tags: ['build', 'compete'], related: [{ label: 'Abundance air-to-water project', key: 'P08' }] },
  { id: 'P08', group: 'projects', title: 'Moonshot Abundance — Air to Water', workId: 'air-to-water', tags: ['build', 'research'] },
  { id: 'P09', group: 'projects', title: 'Pharmacy 3D Printing Hackathon', workId: 'pharmacy-3d', tags: ['build', 'compete'] },
  { id: 'P10', group: 'projects', title: 'Food Connect App — TKS', meta: 'App project', tags: ['build'] },
  { id: 'P11', group: 'projects', title: 'Tiin — Venture & Demo Day', workId: 'tiin', tags: ['build', 'lead', 'speak'] },

  { id: 'R01', group: 'leadership', categories: ['leadership', 'sustainability'], title: 'UBT Sustainability Club — President', workId: 'sustainability-club', year: '2025—NOW', detail: 'Led PR before becoming club president on 27 February 2025. Coordinated sustainability events, volunteers, outreach and student engagement.', tags: ['lead', 'operate'] },
  { id: 'R02', group: 'leadership', title: 'UBT BAIS Advisory Board — Student Representative', workId: 'bais-advisory-board', year: '2025—NOW', tags: ['lead'] },
  { id: 'R03', group: 'leadership', title: 'PISJES Head Girl', workId: 'head-girl', tags: ['lead', 'speak'] },
  { id: 'R04', group: 'leadership', title: 'Pakistan Humari Pehchaan', workId: 'pakistan-humari-pehchaan', tags: ['lead', 'market'] },
  { id: 'R05', group: 'leadership', categories: ['leadership', 'sustainability'], title: 'UBT Administration Intern', workId: 'ui-greenmetric', year: '2025—NOW', tags: ['operate', 'analyze', 'research'] },
  { id: 'X05', group: 'leadership', title: 'Foni Internship', workId: 'foni', tags: ['market', 'analyze'] },
  { id: 'X06', group: 'leadership', title: 'Silent Kitchen Story Internship', workId: 'silent-kitchen-story', tags: ['market', 'design'] },

  { id: 'S01', group: 'sustainability', categories: ['sustainability', 'events'], title: 'RE:BOOT — International E-Waste Day', year: '2026', meta: '14 October 2026 · UBT Corniche Campus', detail: 'From 11:00 AM to 3:00 PM, the UBT Sustainability Club turned e-waste awareness into an interactive campus experience. At Repair or Replace?, students considered when a device could have a longer life. What’s Inside Your iPhone? showed the components and materials behind everyday electronics. A Tech Graveyard made old devices part of the conversation, while the RE Design Station invited recycled-paper crafts and giveaways. An e-waste collection point and student volunteers connected the activities to repair, reuse, recycling and responsible consumption. Before you throw it away: repair, reuse, recycle, RE:BOOT.', tags: ['lead', 'operate', 'design'], media: { src: '/assets/impact/reboot-community.jpg', alt: 'Maryam speaking with visitors at RE:BOOT', ratio: '3/2' }, images: [{ src: '/assets/impact/reboot-community.jpg', alt: 'Maryam speaking with visitors at RE:BOOT', ratio: '3/2' }, { src: '/assets/impact/reboot-tech-graveyard.jpg', alt: 'RE:BOOT awareness station', ratio: '3/2' }, { src: '/assets/impact/reboot-redesign.jpg', alt: 'Students taking part in a RE:BOOT redesign activity', ratio: '3/2' }, { src: '/assets/impact/reboot-campus.jpg', alt: 'Campus view of RE:BOOT event activities', ratio: '3/2' }] },
  { id: 'S02', group: 'sustainability', title: 'Think Sustainability', workId: 'think-sustainability', tags: ['lead', 'operate'] },
  { id: 'S03', group: 'sustainability', title: 'UBT Sustainability Literacy', workId: 'sustainability-literacy', tags: ['analyze', 'research'] },
  { id: 'S06', group: 'sustainability', categories: ['sustainability', 'events'], title: 'Recycling Day', year: '2025', meta: '29 September 2025 · UBT Corniche Campus', detail: 'Organized a campus Recycling Day with the Sustainability Club, combining a paper-waste pledge wall, student activities and a clear call to reduce, reuse and recycle. The post-event report records 50 student pledges and five new club members.', tags: ['lead', 'operate'], media: { src: '/assets/impact/recycling-day-display.jpg', alt: 'Recycling Day sustainability display', ratio: '4/3' }, images: [{ src: '/assets/impact/recycling-day-display.jpg', alt: 'Recycling Day display', ratio: '4/3' }, { src: '/assets/impact/recycling-day-refreshments.jpg', alt: 'Recycling Day gathering', ratio: '4/3' }, { src: '/assets/impact/recycling-day-pledges.jpg', alt: 'Digital student pledges for a greener UBT', ratio: '4/3' }], documents: [{ label: 'Recycling Day report', src: '/assets/documents/recycling-day-report.pdf', pages: 7 }, { label: 'Recycling Day brochure', src: '/assets/documents/recycling-day-brochure.pdf', pages: 5 }] },
  { id: 'S07', group: 'sustainability', categories: ['sustainability', 'events'], title: 'Sustainability Club Orientation', year: '2026', meta: 'Fall 2026 club kickoff', detail: 'Prepared and presented a club orientation introducing the team, its initiatives, volunteer opportunities and ways students could take part.', tags: ['lead', 'speak'], media: { src: '/assets/impact/club-orientation.jpg', alt: 'Maryam presenting the Sustainability Club orientation', ratio: '4/3' }, images: [{ src: '/assets/impact/orientation-booth.jpg', alt: 'Sustainability Club orientation booth', ratio: '4/3' }, { src: '/assets/impact/club-orientation.jpg', alt: 'Maryam speaking at club orientation', ratio: '4/3' }], documents: [{ label: 'Sustainability Club kickoff deck', src: '/assets/documents/sustainability-club-orientation.pdf', pages: 14 }] },

  { id: 'EV01', group: 'events', title: 'Food Bonanza', workId: 'food-gala', tags: ['lead', 'operate'] },
  { id: 'S05', group: 'events', title: 'Agentic AI — Engineering Day', workId: 'engineering-day-ai', tags: ['speak'] },
  { id: 'M01', group: 'events', title: 'UBT AI Club — Online Agentic AI Workshop', workId: 'agentic-ai', year: '2026', tags: ['speak'] },
  { id: 'M02', group: 'events', title: 'IBM AI Builders Conference with Bob', year: '2026', meta: '16 September 2026 · IBM SkillsBuild', detail: 'Joined a one-day learning event for students, educators and innovators. The student-track session explored AI as a social and technical challenge, including how people build trust in AI systems.', tags: ['learn', 'research'], media: { src: '/assets/technology/ibm-bob-session.jpg', alt: 'IBM AI session on earning trust in AI', ratio: '16/9' }, images: [{ src: '/assets/technology/ibm-bob-session.jpg', alt: 'IBM AI for the Rest of Us session', ratio: '16/9' }, { src: '/assets/technology/ibm-bob-certificate.jpg', alt: 'IBM AI Builders Conference certificate of participation', ratio: '16/9' }] },

  { id: 'X01', group: 'learning', title: 'Mawhiba MetaMinds M3', year: '2026', meta: 'Talent development program', detail: 'Selected for the MetaMinds M3 cohort. The Garage Challenge opportunity came through this program.', tags: ['learn'] },
  { id: 'X02', group: 'learning', title: 'McKinsey.org Forward', year: '2025', meta: 'Professional development program', detail: 'Completed McKinsey.org Forward in July 2025, learning practical approaches to problem solving, communication and adapting at work.', tags: ['learn'], media: { src: '/assets/certificates/mckinsey-forward.jpg', alt: 'McKinsey.org Forward completion badge for Maryam Imran', ratio: '4/3' } },
  { id: 'X03', group: 'learning', title: 'Monsha’at Entrepreneurship Program', meta: 'Entrepreneurship program', detail: 'Studied venture development through Monsha’at and applied that learning while developing Tiin and preparing its Demo Day pitch.', tags: ['learn', 'build'], related: [{ label: 'Tiin venture', key: 'P11' }] },
  { id: 'X04', group: 'learning', categories: ['learning', 'writing'], title: 'Fintech Saudi Summer Sessions 25', year: '2025', meta: '15 July – 2 September 2025', detail: 'Completed eight weeks of sessions with fintech leaders. My reflections connect predictive and generative AI, crowdfunding trust and compliance, embedded finance, insurance, and the discipline of designing around real customer needs. I wrote a longer article on how these lessons shape a Saudi fintech startup.', tags: ['learn', 'write'], media: { src: '/assets/certificates/fintech-saudi.jpg', alt: 'Fintech Saudi Summer Sessions 25 certificate', ratio: '4/3' }, images: [{ src: '/assets/learning/fintech-summer-sessions.jpg', alt: 'Fintech Saudi Summer Sessions speakers', ratio: '16/9' }, { src: '/assets/certificates/fintech-saudi.jpg', alt: 'Maryam’s Fintech Saudi participation certificate', ratio: '4/3' }], href: 'https://www.linkedin.com/pulse/what-8-weeks-fintech-taught-me-building-real-startup-saudi-imran-ssyne' },
  { id: 'X07', group: 'learning', categories: ['learning', 'sustainability'], title: 'Misk × Pristine — Sustainability & Innovation', year: '2025', meta: 'Six-week program', detail: 'Selected as one of 30 participants from more than 150 UBT applicants. The six-week program covered environmental science, the UN Sustainable Development Goals, behavior change and innovation. For the capstone, my team developed a water-saving faucet aerator concept and used 3D modeling and printing to prototype it.', tags: ['learn', 'build'], media: { src: '/assets/learning/misk-aerator-pitch.jpg', alt: 'Maryam presenting a water-saving faucet aerator concept', ratio: '16/9' }, images: [{ src: '/assets/learning/misk-aerator-pitch.jpg', alt: 'Pitching the faucet aerator concept', ratio: '16/9' }, { src: '/assets/learning/misk-behavior-design.jpg', alt: 'Behavior change learning session', ratio: '16/9' }, { src: '/assets/learning/misk-pristine-3d-print.jpg', alt: '3D printer used in the innovation program', ratio: '3/4' }, { src: '/assets/learning/misk-pristine-graduation.jpg', alt: 'Maryam at the Sustainability and Innovation graduation', ratio: '3/4' }, { src: '/assets/learning/misk-pristine-certificate.jpg', alt: 'Misk and Pristine course completion certificate', ratio: '16/9' }] },
  { id: 'X08', group: 'learning', title: 'Buildspace S5 — Archive', meta: 'Program participation archive', tags: ['learn', 'build'] },
  { id: 'L01', group: 'learning', title: 'Automation & Low-Code Practice', workId: 'automation-lowcode', year: '2025', tags: ['learn', 'build'] },

  { id: 'A01', group: 'awards', categories: ['awards', 'education'], title: 'Cambridge Outstanding Learner — Top in Saudi Arabia', year: '2023–2024', meta: 'AS and A Level Economics', detail: 'Received Cambridge Outstanding Learner recognition for Top in Saudi Arabia in AS Level Economics and again in A Level Economics.', tags: ['learn'], media: { src: '/assets/education/cambridge-blue-award.jpg', alt: 'Maryam receiving a Cambridge Outstanding Learner award in a blue scarf', ratio: '4/3' }, images: [{ src: '/assets/education/cambridge-blue-award.jpg', alt: 'Cambridge award portrait', ratio: '4/3' }, { src: '/assets/education/cambridge-award-stage.jpg', alt: 'Cambridge award presentation', ratio: '4/3' }, { src: '/assets/education/cambridge-award-group.jpg', alt: 'Cambridge award ceremony group', ratio: '4/3' }], documents: [{ label: 'AS Level Economics award', src: '/assets/certificates/cambridge-as-economics.pdf', pages: 1 }, { label: 'A Level Economics award', src: '/assets/certificates/cambridge-a-economics.pdf', pages: 1 }] },
  { id: 'A03', group: 'awards', title: 'Nestlé NxL — Next Level Season 3', workId: 'nestle-nxl', tags: ['compete'] },
  { id: 'A04', group: 'awards', title: 'L’Oréal Brandstorm', workId: 'loreal-brandstorm', tags: ['compete'] },

  { id: 'M04', group: 'writing', title: 'LinkedIn Content and Writing', meta: 'Professional writing', detail: 'Posts and reflections on projects, hackathons, AI, sustainability, learning and professional events.', tags: ['write'] },
  { id: 'M05', group: 'writing', title: 'Substack Writing', meta: 'Long-form writing', tags: ['write'] },
  { id: 'M06', group: 'writing', title: 'Motion Graphics and Creative Work', meta: 'Creative media', detail: 'Motion graphics experiments and tutorials, including AI-enabled animation and visual storytelling.', tags: ['design', 'write'] },

  { id: 'C01', group: 'certificates', title: 'IBM Introduction to AI — Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/ibm-intro-ai.pdf', detail: 'Introduced core AI ideas and where they are applied, building the technological literacy to assess tools with more care.' },
  { id: 'C02', group: 'certificates', title: 'IBM Developing Interpersonal Skills — Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/ibm-interpersonal-skills.pdf', detail: 'Practised empathy, active listening and communication across different working styles.' },
  { id: 'C03', group: 'certificates', title: 'Leadership — University of Illinois / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/illinois-leadership.pdf', detail: 'Studied leadership and social influence: how to guide a team, build trust and turn a shared goal into coordinated action.' },
  { id: 'C04', group: 'certificates', title: 'Introduction to Creative Thinking — Imperial College / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/imperial-creative-thinking.pdf', detail: 'Explored ways to generate, challenge and develop ideas before choosing a solution.' },
  { id: 'C05', group: 'certificates', title: 'Learning How to Learn — Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/learning-how-to-learn.pdf', detail: 'Learned practical study habits for retaining new ideas and approaching difficult subjects with less friction.' },
  { id: 'C07', group: 'certificates', title: 'The Science of Well-Being — Yale / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/yale-wellbeing.pdf', detail: 'Studied evidence-based habits for wellbeing and how personal routines affect resilience and sustainable learning.' },
  { id: 'C12', group: 'certificates', title: 'Mindshift — McMaster University / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/mcmaster-mindshift.pdf', detail: 'Explored curiosity, lifelong learning and how to move into unfamiliar fields with a flexible mindset.' },
  { id: 'C13', group: 'certificates', title: 'Communication in the 21st Century Workplace — UC Irvine / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/uci-communication.pdf', detail: 'Practised clear professional communication across teams and workplace situations.' },
  { id: 'C14', group: 'certificates', title: 'Effective Problem-Solving and Decision-Making — UC Irvine / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/uci-problem-solving.pdf', detail: 'Worked through structured problem definition, comparing options and making better decisions with available evidence.' },
  { id: 'C15', group: 'certificates', title: 'Positive Psychology: Resilience Skills — University of Pennsylvania / Coursera', meta: 'Course', tags: ['learn'], document: '/assets/certificates/upenn-resilience.pdf', detail: 'Learned techniques for flexibility and resilience when plans change or setbacks occur.' },
  { id: 'C16', group: 'certificates', title: 'The Experiment Digital — Youth Leadership & Community Service', year: '2023', meta: 'World Learning · Stevens Initiative', detail: 'Completed a virtual exchange focused on digital citizenship, leadership, community organizing, action planning, project management and digital storytelling.', tags: ['learn', 'lead'], media: { src: '/assets/certificates/experiment-digital.jpg', alt: 'The Experiment Digital completion certificate', ratio: '16/9' } },
];

export const indexEntries: IndexEntry[] = masterItems.map((item) => {
  const work = item.workId ? workById(item.workId) : undefined;
  const year = item.year ?? work?.year ?? '—';
  return {
    key: item.id,
    group: item.group,
    categories: item.categories ?? [item.group],
    title: item.title,
    titleAlt: work?.titleAlt,
    meta: item.meta ?? work?.role ?? 'Experience',
    year,
    yearSort: Number(year.match(/\d{4}/)?.[0]) || 0,
    tags: item.tags ?? work?.secondaryTags ?? [],
    shortDescription: item.detail ?? work?.shortDescription,
    featuredMedia: item.media ?? work?.featuredMedia,
    images: item.images,
    work,
    detail: item.detail,
    document: item.document,
    documents: item.documents,
    related: item.related,
    href: item.href,
  };
});

// Keep the source document's order inside each section. Undated records do
// not jump to the top or acquire a guessed year.
export const entriesInGroup = (group: IndexGroup): IndexEntry[] =>
  indexEntries.filter((entry) => entry.categories.includes(group));

export const groupCounts: Record<IndexGroup, number> = groupOrder.reduce(
  (counts, group) => {
    counts[group] = entriesInGroup(group).length;
    return counts;
  },
  {} as Record<IndexGroup, number>,
);

export const distinctEntryCount = indexEntries.length;
