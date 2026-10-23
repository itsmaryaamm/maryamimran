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
  /** Extra paragraphs after `detail`, for records with no work item behind them. */
  body?: string[];
  /** What Maryam did, as bullets — the index equivalent of `contribution`. */
  did?: string[];
  /** Syllabus-level bullets: what the course or program actually taught. */
  learned?: string[];
  /** A single outcome line, set large. */
  result?: string;
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
  body?: string[];
  did?: string[];
  learned?: string[];
  result?: string;
  tags?: Tag[];
  media?: MediaItem;
  images?: MediaItem[];
  document?: string;
  documents?: DocumentItem[];
  related?: { label: string; key: string }[];
  href?: string;
}

/** `short` is the compact form used on the filter chips; `label` is the
    editorial form used in the contents list and result headings. */
export const groupMeta: Record<IndexGroup, { label: string; short: string; blurb: string }> = {
  education: { label: 'Education', short: 'Education', blurb: 'Schools, university and summer study' },
  projects: { label: 'Projects & startups', short: 'Projects', blurb: 'Products, prototypes and competitions' },
  leadership: { label: 'Leadership & roles', short: 'Leadership', blurb: 'Teams, representation and internships' },
  sustainability: { label: 'Sustainability', short: 'Sustainability', blurb: 'Campus initiatives and reporting' },
  events: { label: 'Events', short: 'Events', blurb: 'Events run, hosted and spoken at' },
  learning: { label: 'Learning', short: 'Learning', blurb: 'Programs and practice beyond formal education' },
  awards: { label: 'Awards', short: 'Awards', blurb: 'Academic recognition and competitions' },
  writing: { label: 'Writing & creative', short: 'Writing', blurb: 'Posts, long-form writing and visual work' },
  certificates: { label: 'Certificates & courses', short: 'Certificates', blurb: 'Short courses and credentials' },
};

export const groupOrder: IndexGroup[] = [
  'education', 'projects', 'leadership', 'sustainability', 'events',
  'learning', 'awards', 'writing', 'certificates',
];

// Each experience has one record; categories can overlap in the filters.
const masterItems: MasterItem[] = [
  { id: 'E01', group: 'education', title: 'IE University — Breakthrough Robotics Program', year: '2026', meta: 'Madrid, Spain · July 2026', detail: 'Completed the two-week Breakthrough Robotics program in Madrid. I led the three-person VITA team, which placed first among three teams in the final class competition.', tags: ['learn', 'build', 'lead'], media: { src: '/assets/technology/ie-program-certificate.jpg', alt: 'Maryam holding her IE University summer school certificate at the closing ceremony', ratio: '4/3' }, documents: [{ label: 'IE University Breakthrough Robotics certificate', src: '/assets/certificates/ie-breakthrough-robotics.pdf', pages: 1 }], related: [{ label: 'VITA robotics project', key: 'P02' }] },
  { id: 'E02', group: 'education', title: 'The Knowledge Society (TKS)', workId: 'tks', tags: ['learn', 'research'], related: [{ label: 'WE-Think', key: 'P06' }, { label: 'Damian', key: 'P05' }, { label: 'Air-to-Water', key: 'P08' }, { label: 'Pharmacy 3D Printing', key: 'P09' }] },
  { id: 'E03', group: 'education', title: 'University of Business and Technology (UBT)', year: '2024—NOW', meta: 'Business Analytics & Information Systems', detail: 'Started in BBA Marketing in August 2024 and transferred to Business Analytics and Information Systems in June 2025.', body: ['The switch was deliberate rather than a correction. Marketing explains what people do; analytics explains why, and gives you something to check your answer against. BAIS sits across both — statistics and information systems on one side, business decisions on the other.', 'Most of the work on this site runs alongside the degree rather than inside it: the Sustainability Club presidency, a seat on the BAIS Advisory Board, and the administration internship that produced UBT’s GreenMetric submission.'], did: ['Transferred from BBA Marketing into Business Analytics and Information Systems', 'Led the UBT Sustainability Club as its president', 'Held one of two student seats on the BAIS Advisory Board', 'Worked on the university’s sustainability reporting as an administration intern'], tags: ['learn', 'lead'], related: [{ label: 'Sustainability Club presidency', key: 'R01' }, { label: 'BAIS Advisory Board', key: 'R02' }], media: { src: '/assets/impact/ubt-speaking.jpg', alt: 'Maryam speaking to students at the University of Business and Technology', ratio: '4/3' } },
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
  { id: 'P10', group: 'projects', title: 'Food Connect App — TKS', meta: 'The Knowledge Society · app project', detail: 'An app project built during The Knowledge Society programme.', tags: ['build'], related: [{ label: 'The Knowledge Society', key: 'E02' }] },
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
  { id: 'S06', group: 'sustainability', categories: ['sustainability', 'events'], title: 'Recycling Day', year: '2025', meta: '29 September 2025 · UBT Corniche Campus', detail: 'Most students agree with recycling in the abstract and still do not know which bin a coffee cup goes in. The theme — “Trash is Only Waste if You Waste It” — ran across four stations built to make the answer physical rather than theoretical.', body: ['An awareness booth at the campus entrance carried QR codes to the club’s accounts, the membership form and a digital brochure. A recycling station laid out real items from student life — coffee cups, plastic bottles, paper — and had people sort them, which is where the misconceptions surfaced. An origami station turned waste printer paper collected from faculty offices into something worth making. A digital pledge wall asked each student for one specific habit they would change, displayed it publicly, and rewarded it with a cupcake.', 'The whole day cost 500 SAR, almost all of it cupcakes; everything else was collected rather than bought. The recap reel passed 2,000 views and 190 likes in its first 24 hours. Afterwards I wrote the post-event report mapping the day to SDG 12, SDG 13 and the PRME principles.'], did: ['Set the theme and designed four stations around one idea: make recycling physical', 'Collected waste printer paper from faculty offices and turned it into the origami station’s material', 'Built the digital pledge wall so commitments were visible rather than private', 'Ran the campaign before and after the day across Instagram, TikTok and LinkedIn', 'Coordinated 16 volunteers across the booths and the documentation', 'Wrote the post-event report submitted to the university'], result: '50 student pledges, 5 new club members and 150+ students through the stations — on a 500 SAR budget.', tags: ['lead', 'operate', 'design'], media: { src: '/assets/impact/recycling-day-display.jpg', alt: 'Recycling Day sustainability display', ratio: '4/3' }, images: [{ src: '/assets/impact/recycling-day-display.jpg', alt: 'Recycling Day display', ratio: '4/3' }, { src: '/assets/impact/recycling-day-refreshments.jpg', alt: 'Recycling Day gathering', ratio: '4/3' }, { src: '/assets/impact/recycling-day-pledges.jpg', alt: 'Digital student pledges for a greener UBT', ratio: '4/3' }], documents: [{ label: 'Recycling Day report', src: '/assets/documents/recycling-day-report.pdf', pages: 7 }, { label: 'Recycling Day brochure', src: '/assets/documents/recycling-day-brochure.pdf', pages: 5 }] },
  { id: 'S07', group: 'sustainability', categories: ['sustainability', 'events'], title: 'Sustainability Club Orientation', year: '2026', meta: 'Fall 2026 club kickoff', detail: 'A 30-minute orientation to turn a club with a name into a club with a structure. I split the Sustainability Club into four teams — Newsletter, Social Media, Events and Campaigns — and gave each one two or three leaders, a written remit, and a first deliverable with a date on it.', body: ['The four teams are designed to hand work to each other: Events and Campaigns make something happen on campus, Newsletter and Social Media turn it into a story, so every activity becomes publishable by default. Nine team leaders took the room through what their team owns, then the semester plan — RE:BOOT on 14 October, the first club newsletter, a workshop on 11 November, and industry visits in progress.', 'Twenty of the thirty minutes are presenting and ten belong to the room: introductions from each leader, volunteer sign-up for RE:BOOT, and an open collection of ideas for what the club should build next. Contribution across the semester is recognised with certificates and credit hours.'], did: ['Designed the four-team structure and wrote each team’s remit', 'Set a dated first deliverable for every team instead of a general direction', 'Built and presented the 14-slide orientation deck', 'Ran volunteer sign-up for RE:BOOT and an open idea collection from members'], tags: ['lead', 'speak', 'operate'], media: { src: '/assets/impact/club-orientation.jpg', alt: 'Maryam presenting the Sustainability Club orientation', ratio: '4/3' }, images: [{ src: '/assets/impact/orientation-booth.jpg', alt: 'Sustainability Club orientation booth', ratio: '4/3' }, { src: '/assets/impact/club-orientation.jpg', alt: 'Maryam speaking at club orientation', ratio: '4/3' }], documents: [{ label: 'Sustainability Club kickoff deck', src: '/assets/documents/sustainability-club-orientation.pdf', pages: 14 }] },

  { id: 'EV01', group: 'events', title: 'Food Bonanza', workId: 'food-gala', tags: ['lead', 'operate'] },
  { id: 'S05', group: 'events', title: 'Agentic AI — Engineering Day', workId: 'engineering-day-ai', tags: ['speak'] },
  { id: 'M01', group: 'events', title: 'UBT AI Club — Online Agentic AI Workshop', workId: 'agentic-ai', year: '2026', tags: ['speak'] },
  { id: 'M02', group: 'events', title: 'IBM AI Builders Conference with Bob', year: '2026', meta: '16 September 2026 · IBM SkillsBuild', detail: 'Joined a one-day learning event for students, educators and innovators. The student-track session explored AI as a social and technical challenge, including how people build trust in AI systems.', tags: ['learn', 'research'], media: { src: '/assets/technology/ibm-bob-session.jpg', alt: 'IBM AI session on earning trust in AI', ratio: '16/9' }, images: [{ src: '/assets/technology/ibm-bob-session.jpg', alt: 'IBM AI for the Rest of Us session', ratio: '16/9' }, { src: '/assets/technology/ibm-bob-certificate.jpg', alt: 'IBM AI Builders Conference certificate of participation', ratio: '16/9' }] },

  { id: 'X01', group: 'learning', title: 'Mawhiba MetaMinds M3', year: '2026', meta: 'Talent development program', detail: 'Selected for the MetaMinds M3 cohort. The Garage Challenge opportunity came through this program.', tags: ['learn'] },
  { id: 'X02', group: 'learning', title: 'McKinsey.org Forward', year: '2025', meta: 'Professional development program', detail: 'McKinsey.org’s free professional development program, completed in July 2025. It teaches the habits consultants are drilled in, stripped of the consulting.', learned: ['Structured problem solving: breaking an open-ended problem into parts you can actually work on', 'Communicating a recommendation clearly, in writing and out loud, to someone who has not seen your reasoning', 'Adaptability and resilience treated as working practices rather than personality traits', 'Building trust and working relationships inside a team'], tags: ['learn'], media: { src: '/assets/certificates/mckinsey-forward.jpg', alt: 'McKinsey.org Forward completion badge for Maryam Imran', ratio: '4/3' } },
  { id: 'X03', group: 'learning', title: 'Monsha’at Entrepreneurship Program', meta: 'Entrepreneurship program', detail: 'Studied venture development through Monsha’at and applied that learning while developing Tiin and preparing its Demo Day pitch.', tags: ['learn', 'build'], related: [{ label: 'Tiin venture', key: 'P11' }] },
  { id: 'X04', group: 'learning', categories: ['learning', 'writing'], title: 'Fintech Saudi Summer Sessions 25', year: '2025', meta: '15 July – 2 September 2025', detail: 'Completed eight weeks of sessions with fintech leaders. My reflections connect predictive and generative AI, crowdfunding trust and compliance, embedded finance, insurance, and the discipline of designing around real customer needs. I wrote a longer article on how these lessons shape a Saudi fintech startup.', tags: ['learn', 'write'], media: { src: '/assets/certificates/fintech-saudi.jpg', alt: 'Fintech Saudi Summer Sessions 25 certificate', ratio: '4/3' }, images: [{ src: '/assets/learning/fintech-summer-sessions.jpg', alt: 'Fintech Saudi Summer Sessions speakers', ratio: '16/9' }, { src: '/assets/certificates/fintech-saudi.jpg', alt: 'Maryam’s Fintech Saudi participation certificate', ratio: '4/3' }], href: 'https://www.linkedin.com/pulse/what-8-weeks-fintech-taught-me-building-real-startup-saudi-imran-ssyne' },
  { id: 'X07', group: 'learning', categories: ['learning', 'sustainability'], title: 'Misk × Pristine — Sustainability & Innovation', year: '2025', meta: 'Six-week program', detail: 'Selected as one of 30 participants from more than 150 UBT applicants. The six-week program covered environmental science, the UN Sustainable Development Goals, behavior change and innovation. For the capstone, my team developed a water-saving faucet aerator concept and used 3D modeling and printing to prototype it.', tags: ['learn', 'build'], media: { src: '/assets/learning/misk-aerator-pitch.jpg', alt: 'Maryam presenting a water-saving faucet aerator concept', ratio: '16/9' }, images: [{ src: '/assets/learning/misk-aerator-pitch.jpg', alt: 'Pitching the faucet aerator concept', ratio: '16/9' }, { src: '/assets/learning/misk-behavior-design.jpg', alt: 'Behavior change learning session', ratio: '16/9' }, { src: '/assets/learning/misk-pristine-3d-print.jpg', alt: '3D printer used in the innovation program', ratio: '3/4' }, { src: '/assets/learning/misk-pristine-graduation.jpg', alt: 'Maryam at the Sustainability and Innovation graduation', ratio: '3/4' }, { src: '/assets/learning/misk-pristine-certificate.jpg', alt: 'Misk and Pristine course completion certificate', ratio: '16/9' }] },
  { id: 'X08', group: 'learning', title: 'Buildspace S5', meta: 'Online building program', detail: 'Took part in Buildspace Season 5, an online program where people work on their own project alongside everyone else doing the same thing, on a shared clock.', tags: ['learn', 'build'] },
  { id: 'L01', group: 'learning', title: 'Automation & Low-Code Practice', workId: 'automation-lowcode', year: '2025', tags: ['learn', 'build'] },

  { id: 'A01', group: 'awards', categories: ['awards', 'education'], title: 'Cambridge Outstanding Learner — Top in Saudi Arabia', year: '2023–2024', meta: 'AS and A Level Economics', detail: 'Received Cambridge Outstanding Learner recognition for Top in Saudi Arabia in AS Level Economics and again in A Level Economics.', tags: ['learn'], media: { src: '/assets/education/cambridge-blue-award.jpg', alt: 'Maryam receiving a Cambridge Outstanding Learner award in a blue scarf', ratio: '4/3' }, images: [{ src: '/assets/education/cambridge-blue-award.jpg', alt: 'Cambridge award portrait', ratio: '4/3' }, { src: '/assets/education/cambridge-award-stage.jpg', alt: 'Cambridge award presentation', ratio: '4/3' }, { src: '/assets/education/cambridge-award-group.jpg', alt: 'Cambridge award ceremony group', ratio: '4/3' }], documents: [{ label: 'AS Level Economics award', src: '/assets/certificates/cambridge-as-economics.pdf', pages: 1 }, { label: 'A Level Economics award', src: '/assets/certificates/cambridge-a-economics.pdf', pages: 1 }] },
  { id: 'A03', group: 'awards', title: 'Nestlé NxL — Next Level Season 3', workId: 'nestle-nxl', tags: ['compete'] },
  { id: 'A04', group: 'awards', title: 'L’Oréal Brandstorm', workId: 'loreal-brandstorm', tags: ['compete'] },

  { id: 'M04', group: 'writing', title: 'LinkedIn Articles and Posts', year: '2024—NOW', meta: 'Professional writing', detail: 'Posts and longer articles on projects, hackathons, AI, sustainability, student leadership and the events I end up in the middle of. It is where the working-out gets published rather than filed.', body: ['The longest piece so far is on the Fintech Saudi Summer Sessions: eight weeks of talks compressed into what they actually imply for someone building a fintech startup in Saudi Arabia.'], href: 'https://www.linkedin.com/in/maryamimranksa/recent-activity/articles/', tags: ['write'], related: [{ label: 'Fintech Saudi Summer Sessions', key: 'X04' }] },
  { id: 'M05', group: 'writing', title: 'Substack Newsletter', year: '2024—NOW', meta: 'Monthly long-form', detail: 'A monthly newsletter, running since 2024, about what I am actually building and what it is actually like — university, Tiin, leadership, the months that did not go to plan.', body: ['It is deliberately unpolished in a way the rest of this site is not. The archive is public and runs month by month rather than being curated after the fact.'], href: 'https://maryamimran.substack.com/', tags: ['write'] },
  { id: 'M06', group: 'writing', title: 'Motion Graphics and Creative Work', meta: 'Creative media', detail: 'Motion graphics experiments and tutorials, including AI-assisted animation and visual storytelling. The same instinct as the writing: make the thing legible to someone who was not there.', tags: ['design', 'write'] },

  /* Course titles, issuers and completion dates below are transcribed from
     the certificates themselves, which are the files the viewer opens. The
     syllabus bullets describe the published course, not a claimed result. */
  {
    id: 'C01', group: 'certificates', title: 'Introduction to Artificial Intelligence (AI)', year: '2026',
    meta: 'IBM · Coursera', tags: ['learn'], document: '/assets/certificates/ibm-intro-ai.pdf',
    media: { src: '/assets/certificates/ibm-intro-ai/page-001.webp', alt: 'IBM course certificate for Introduction to Artificial Intelligence', ratio: '4/3' },
    detail: 'IBM’s foundation course on what artificial intelligence is, where it is already deployed, and what it changes about the work people do. Completed 12 August 2026.',
    learned: [
      'What counts as AI, and how machine learning, deep learning and neural networks sit inside it',
      'Where AI is already in use across industries, and the kinds of problems it suits',
      'How AI reshapes roles and careers rather than simply removing them',
      'Bias, ethics and the limits of what a model’s confidence actually tells you',
    ],
    related: [{ label: 'Agentic AI workshops', key: 'M01' }],
  },
  {
    id: 'C02', group: 'certificates', title: 'Developing Interpersonal Skills', year: '2026',
    meta: 'IBM · Coursera', tags: ['learn'], document: '/assets/certificates/ibm-interpersonal-skills.pdf',
    media: { src: '/assets/certificates/ibm-interpersonal-skills/page-001.webp', alt: 'IBM course certificate for Developing Interpersonal Skills', ratio: '4/3' },
    detail: 'IBM’s course on the behaviours behind effective communication at work — making an impression, listening properly, and staying calm in a difficult conversation. Completed 12 August 2026.',
    learned: [
      'Building rapport and making a considered first impression in professional settings',
      'Active listening, and hearing what is actually being asked',
      'Giving and taking feedback without the conversation stalling',
      'Working through conflict while keeping the working relationship intact',
    ],
  },
  {
    id: 'C03', group: 'certificates', title: 'Leadership', year: '2026',
    meta: 'University of Illinois Urbana-Champaign · Coursera', tags: ['learn', 'lead'], document: '/assets/certificates/illinois-leadership.pdf',
    media: { src: '/assets/certificates/illinois-leadership/page-001.webp', alt: 'University of Illinois course certificate for Leadership', ratio: '4/3' },
    detail: 'A Gies College of Business course on leadership as a practice rather than a title. Completed 13 August 2026, while leading the UBT Sustainability Club.',
    learned: [
      'What leadership is as a practice, and the competencies effective leaders rely on',
      'How organisational and team structure shapes what a leader can actually do',
      'Decision-making processes, and how a team’s structure changes them',
      'Emotional intelligence, and motivating yourself alongside the people around you',
    ],
    related: [{ label: 'Sustainability Club presidency', key: 'R01' }],
  },
  {
    id: 'C04', group: 'certificates', title: 'Introduction to Creative Thinking: Tools for Success', year: '2026',
    meta: 'Imperial College London · Coursera', tags: ['learn', 'design'], document: '/assets/certificates/imperial-creative-thinking.pdf',
    media: { src: '/assets/certificates/imperial-creative-thinking/page-001.webp', alt: 'Imperial College London course certificate for Introduction to Creative Thinking', ratio: '4/3' },
    detail: 'Run by Imperial’s Dyson School of Design Engineering, this course treats creativity as a set of tools that can be taught. Completed 31 July 2026.',
    learned: [
      'Creativity as a method rather than a trait you either have or do not',
      'Techniques for generating ideas in volume before narrowing them',
      'How to develop and stress-test an idea once it exists',
      'Applying those tools to design and engineering problems',
    ],
  },
  {
    id: 'C05', group: 'certificates', title: 'Learning How to Learn', year: '2026',
    meta: 'Deep Teaching Solutions · Coursera', tags: ['learn'], document: '/assets/certificates/learning-how-to-learn.pdf',
    media: { src: '/assets/certificates/learning-how-to-learn/page-001.webp', alt: 'Course certificate for Learning How to Learn', ratio: '4/3' },
    detail: 'Barbara Oakley and Terrence Sejnowski’s course on the mental tools behind mastering difficult subjects. Completed 19 August 2026.',
    learned: [
      'Focused and diffuse modes of thinking, and why hard problems need both',
      'Chunking: building a skill into units the brain can recall as one piece',
      'Why procrastination happens, and the practice that reduces it',
      'Memory and recall techniques, and preparing for an exam without cramming',
    ],
  },
  {
    id: 'C07', group: 'certificates', title: 'The Science of Well-Being', year: '2026',
    meta: 'Yale University · Coursera', tags: ['learn'], document: '/assets/certificates/yale-wellbeing.pdf',
    media: { src: '/assets/certificates/yale-wellbeing/page-001.webp', alt: 'Yale University course certificate for The Science of Well-Being', ratio: '4/3' },
    detail: 'Dr. Laurie Santos’s 16-hour Yale course on what the research actually says about wellbeing, as against what people assume. Completed 14 August 2026.',
    learned: [
      'Why intuitions about what will make us happy are so often wrong',
      'What the evidence supports instead: social connection, sleep, exercise, time affluence',
      'How the mind adapts to good circumstances, and what that does to motivation',
      'Turning the findings into weekly practice rather than a one-off resolution',
    ],
  },
  {
    id: 'C12', group: 'certificates', title: 'Mindshift', year: '2026',
    meta: 'McMaster University · Coursera', tags: ['learn'], document: '/assets/certificates/mcmaster-mindshift.pdf',
    media: { src: '/assets/certificates/mcmaster-mindshift/page-001.webp', alt: 'McMaster University course certificate for Mindshift', ratio: '4/3' },
    detail: 'The follow-on to Learning How to Learn, about changing direction on purpose and learning a second thing well. Completed 30 July 2026.',
    learned: [
      'How people change field or career by deliberately learning something unfamiliar',
      'Treating a second skill, and the discomfort of being a beginner, as an asset',
      'Finding mentors, and the value of being the least experienced person in the room',
      'Keeping learning going once formal study stops',
    ],
  },
  {
    id: 'C13', group: 'certificates', title: 'Communication in the 21st Century Workplace', year: '2026',
    meta: 'UC Irvine · Coursera', tags: ['learn'], document: '/assets/certificates/uci-communication.pdf',
    media: { src: '/assets/certificates/uci-communication/page-001.webp', alt: 'UC Irvine course certificate for Communication in the 21st Century Workplace', ratio: '4/3' },
    detail: 'A UC Irvine Division of Continuing Education course on communicating across generations, cultures and distance. Completed 14 August 2026.',
    learned: [
      'Adapting communication style across generations, cultures and working preferences',
      'Choosing the channel that fits the message instead of defaulting to one',
      'Writing and speaking clearly when most of the exchange is remote and written',
      'Working through misunderstanding before it becomes conflict',
    ],
  },
  {
    id: 'C14', group: 'certificates', title: 'Effective Problem-Solving and Decision-Making', year: '2026',
    meta: 'UC Irvine · Coursera', tags: ['learn', 'analyze'], document: '/assets/certificates/uci-problem-solving.pdf',
    media: { src: '/assets/certificates/uci-problem-solving/page-001.webp', alt: 'UC Irvine course certificate for Effective Problem-Solving and Decision-Making', ratio: '4/3' },
    detail: 'A UC Irvine course on defining a problem properly before solving it, and deciding well with what you actually have. Completed 12 August 2026.',
    learned: [
      'Defining a problem precisely before reaching for a solution',
      'Generating and comparing options rather than defending the first one',
      'Decision techniques, and the biases that quietly distort them',
      'Deciding under incomplete information, and reviewing the decision afterwards',
    ],
  },
  {
    id: 'C15', group: 'certificates', title: 'Positive Psychology: Resilience Skills', year: '2026',
    meta: 'University of Pennsylvania · Coursera', tags: ['learn'], document: '/assets/certificates/upenn-resilience.pdf',
    media: { src: '/assets/certificates/upenn-resilience/page-001.webp', alt: 'University of Pennsylvania course certificate for Positive Psychology: Resilience Skills', ratio: '4/3' },
    detail: 'Karen Reivich’s course at Penn’s Positive Psychology Center, on resilience as something trainable. Completed 13 August 2026.',
    learned: [
      'Resilience as a set of learnable skills rather than a fixed trait',
      'How thinking patterns drive the response to a setback',
      'Practices for recovering faster: reframing, realistic optimism, checking the evidence',
      'Building resilience into a team, not only in yourself',
    ],
  },
  {
    id: 'C16', group: 'certificates', title: 'The Experiment Digital — Youth Leadership & Community Service', year: '2023',
    meta: 'World Learning · Stevens Initiative', tags: ['learn', 'lead'],
    media: { src: '/assets/certificates/experiment-digital.jpg', alt: 'The Experiment Digital completion certificate', ratio: '16/9' },
    detail: 'A virtual exchange program run by World Learning and the Stevens Initiative, connecting young people across countries around community service.',
    learned: [
      'Digital citizenship and leading a group that only ever meets online',
      'Community organising, and turning a concern into an action plan',
      'Project management for a volunteer team',
      'Digital storytelling as a way to make a cause legible to people outside it',
    ],
  },
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
    body: item.body,
    did: item.did,
    learned: item.learned,
    result: item.result,
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
