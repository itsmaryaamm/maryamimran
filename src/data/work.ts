import type { WorkItem } from './types';

/* ============================================================
   WORK — THE SINGLE SOURCE OF TRUTH
   ------------------------------------------------------------
   Every project, role, competition and talk is authored exactly
   once here. The Work Hub, the three category pages, Speaking,
   Recognition and the Index all read from this array.

   To add something: append an object and give it an `order`.
   To hide something: set showInIndex to false.
   To publish a metric: set verified: true (unverified metrics
   stay in the data but are never rendered).

   Images: put files under /public/assets/<category>/ and point
   `src` at them. Until the file exists, a neutral placeholder
   with the project name renders in its place — no stock imagery.
   ============================================================ */

export const work: WorkItem[] = [
  /* ==========================================================
     BUSINESS
     ========================================================== */
  {
    id: 'tiin',
    title: 'Tiin',
    titleAlt: 'تِين',
    organization: 'Monsha’at Human Capital Program',
    year: '2025–26',
    yearSort: 2025,
    date: 'Sep 2025 — Sep 2026',
    role: 'Co-Founder & CEO',
    primaryCategory: 'business',
    secondaryTags: ['build', 'research', 'analyze', 'lead', 'speak'],
    shortDescription:
      'Co-founded and led Tiin through Monsha’at’s Human Capital Program, from customer discovery and prototypes to presenting the venture at Demo Day.',
    fullDescription: [
      'Tiin started from a straightforward observation: a lot of small businesses in Saudi Arabia have their numbers, but not their answers. The data sits in a point-of-sale system or an accounting tool, and the owner still cannot say whether this month was actually good.',
      'The work has been mostly customer discovery and iteration — talking to owners, watching where the confusion actually lives, and rebuilding the product around what turned out to matter. That moved the idea from analytics dashboards toward financial interpretation: not more charts, but a clear read on business health, cash flow, margins, receivables and expenses, with recommendations an owner can act on this week.',
      'I co-founded and led Tiin through Monsha’at’s Human Capital Program, with guidance from Saudi founders, investors and ecosystem mentors. I shaped the pitch and presented the venture at Demo Day.',
    ],
    contribution: [
      'Ran customer discovery with Saudi SME owners and rebuilt the product thesis around what they actually asked for',
      'Designed the business health model — cash flow, profitability and margins, receivables, expense structure',
      'Built and vibe-coded working prototypes to test the interpretation layer before committing to a stack',
      'Explored WhatsApp as the delivery channel and Zoho and accounting systems as data sources',
      'Developed the reporting concept: a readable financial report rather than a dashboard to be deciphered',
      'Built the Demo Day pitch narrative and presented Tiin to the cohort, mentors and invited guests',
    ],
    phases: [
      { label: 'POS Analytics', note: 'Reading what the till already knows' },
      { label: 'Business Software', note: 'Where owners asked for help' },
      { label: 'Finance', note: 'The real question underneath' },
      { label: 'AI Financial Advisory', note: 'Current direction' },
    ],
    images: [
      { src: '/assets/business/tiin-award.jpg', alt: 'Maryam holding an award at the Monsha’at University Startups event', caption: 'University Startups recognition', ratio: '3/2' },
      { src: '/assets/business/tiin-product.jpg', alt: 'Maryam presenting a Tiin product flow on stage', caption: 'Product flow presentation', ratio: '3/2' },
      { src: '/assets/business/tiin-deck.jpg', alt: 'Maryam explaining Tiin’s business model during a presentation', caption: 'Tiin pitch', ratio: '3/2' },
      { src: '/assets/business/tiin-booth.jpg', alt: 'Maryam speaking with a visitor at the Tiin booth', caption: 'Tiin booth', ratio: '3/2' },
      { src: '/assets/speaking/demo-day-stage.jpg', alt: 'Maryam presenting Tiin at Demo Day', caption: 'Demo Day presentation', ratio: '3/2' },
    ],
    featuredMedia: { src: '/assets/business/tiin-award.jpg', alt: 'Maryam holding an award at the Monsha’at University Startups event', ratio: '4/3' },
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: false,
    order: 1,
    scale: 'lead',
  },
  {
    id: 'equi-finance',
    title: 'EquiFinance',
    organization: 'UBT Sparkathon',
    year: '2024',
    yearSort: 2024,
    role: 'Business Model & Pitch Team',
    primaryCategory: 'business',
    secondaryTags: ['build', 'research', 'compete'],
    shortDescription:
      'Developed and pitched an SME funding platform at UBT Sparkathon, reaching the top 14 teams.',
    fullDescription: [
      'At UBT Sparkathon, our team designed an equity crowdfunding platform to connect small and medium businesses with investors. We focused on access to funding, trust and sustainability.',
    ],
    contribution: [
      'Conducted user research into SME funding challenges and designed the platform’s proposed features',
      'Developed the business model, financial plan and pitch deck',
      'Presented the concept at Sparkathon',
    ],
    result: 'TOP 14 TEAMS',
    images: [{ src: '/assets/business/equifinance-pitch.png', alt: 'Equi-Finance Sparkathon pitch presentation with the team members', caption: 'Sparkathon presentation', ratio: '16/9' }],
    featuredMedia: { src: '/assets/business/equifinance-pitch.png', alt: 'Equi-Finance Sparkathon pitch presentation', ratio: '16/9' },
    externalLinks: [{ label: 'Watch the Sparkathon presentation', href: 'https://www.linkedin.com/posts/maryam-imran-274056252_equifinance-ubtsparkathon-innovation-activity-7265325120347332609-abhu' }],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 2,
  },
  {
    id: 'food-gala',
    title: 'Food Bonanza',
    year: '2023–24',
    yearSort: 2023,
    date: 'Nov 2023 — Jan 2024',
    role: 'Venture Head',
    primaryCategory: 'business',
    secondaryTags: ['operate', 'lead', 'market', 'analyze'],
    shortDescription:
      'Secured a school loan and led 70+ students to plan and run Food Bonanza, generating SAR 30,000 in revenue.',
    fullDescription: [
      'I secured a school loan to fund Food Bonanza at PISJES, then led its planning and execution with a team of more than 70 students. The event combined community engagement with real budgeting, sourcing, marketing and operations.',
    ],
    contribution: [
      'Led 70+ students and coordinated with parents, vendors and school stakeholders',
      'Managed the budget, vendor sourcing, logistics, marketing and on-site operations',
      'Oversaw financial planning and resource allocation, exceeding the event’s financial target',
    ],
    metrics: [
      { value: 'SAR 30,000', label: 'Revenue', verified: true },
      { value: '70+', label: 'Students led', verified: true },
    ],
    images: [
      { src: '/assets/business/food-bonanza-cover.jpg', alt: 'Cover of the Food Bonanza business plan', caption: 'Business plan', ratio: '16/9' },
    ],
    featuredMedia: { src: '/assets/business/food-bonanza-cover.jpg', alt: 'Food Bonanza business plan', ratio: '16/9' },
    documents: [{ label: 'Food Bonanza business plan', src: '/assets/documents/food-bonanza-plan.pdf' }],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 3,
    scale: 'lead',
  },
  {
    id: 'pakistan-humari-pehchaan',
    title: 'Pakistan Humari Pehchaan',
    year: '2023–24',
    yearSort: 2023,
    date: 'Oct 2023 — Jun 2024',
    role: 'Marketing Lead',
    primaryCategory: 'business',
    secondaryTags: ['market', 'analyze', 'lead'],
    shortDescription:
      'Digital marketing led from the data — doubling inbound inquiries and bringing in 50+ clients.',
    fullDescription: [
      'Marketing where the strategy followed the numbers rather than the other way round: reading how people actually arrived and behaved, then rebuilding the campaigns around it.',
    ],
    contribution: [
      'Analysed user data to optimise the digital marketing strategy, doubling inbound inquiries',
      'Grew engagement and inquiries from potential partners',
      'Attracted 50+ clients through digital elevator pitches and social media campaigns',
    ],
    metrics: [
      { value: '2×', label: 'Inbound inquiries', verified: true },
      { value: '50+', label: 'Clients attracted', verified: true },
    ],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 4,
  },
  {
    id: 'foni',
    title: 'Foni',
    organization: 'Global nonprofit',
    year: '2024',
    yearSort: 2024,
    date: 'Jul 2024 — Nov 2024',
    role: 'Social Media Intern',
    primaryCategory: 'business',
    secondaryTags: ['market', 'analyze', 'design'],
    shortDescription:
      'Content for an international nonprofit, with the week’s engagement data deciding what came next.',
    fullDescription: [
      'A content role run as a feedback loop: publish, read the engagement data at the end of the week, and let it change the following week rather than defending the original plan.',
    ],
    contribution: [
      'Created insight-driven content that increased reach and interaction on social media',
      'Collaborated with international teams to align communications with the nonprofit’s mission',
      'Analysed engagement data weekly and iterated the content strategy on it',
    ],
    externalLinks: [{ label: 'View Foni on Instagram', href: 'https://www.instagram.com/foniglobal.official/' }],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 5,
  },
  {
    id: 'moonshot-pirates',
    title: 'Moonshot Pirates: Sustenance',
    organization: 'Shape the Future Challenge',
    year: '2024–25',
    yearSort: 2024,
    date: 'Nov 2024 — Jan 2025',
    role: 'Team Member & Project Coordinator',
    primaryCategory: 'business',
    secondaryTags: ['compete', 'build', 'research'],
    shortDescription:
      'A food sustainability concept built with Solar Foods’ Solein protein — top 7 of 78 teams.',
    fullDescription: [
      'For the global Shape the Future Challenge, our team of three worked with Solar Foods to design a sustainable eating concept using Solein, a protein made from air, water and renewable energy. We developed the business model, prototype ideas and final pitch.',
    ],
    contribution: [
      'Organized team meetings, delegated tasks and helped resolve project challenges',
      'Designed the business model, prototype concepts and pitch presentation with the team',
      'Applied mentorship from global CEOs on ideation, innovation frameworks and pitching',
      'Presented our solution to an international panel of judges',
    ],
    metrics: [{ value: 'Top 7 / 78', label: 'Teams', verified: true }],
    externalLinks: [
      { label: 'Watch the final presentation', href: 'https://youtu.be/5KyHnjN5_RQ?t=1635' },
    ],
    images: [{ src: '/assets/business/moonshot-team.png', alt: 'Maryam and her Moonshot Pirates teammates in their online final presentation', caption: 'Sustenance team presentation', ratio: '16/9' }],
    featuredMedia: { src: '/assets/business/moonshot-team.png', alt: 'Moonshot Pirates Sustenance presentation', ratio: '16/9' },
    videos: [{ title: 'Final presentation', kind: 'youtube', src: 'https://www.youtube-nocookie.com/embed/5KyHnjN5_RQ?start=1635' }],
    documents: [{ label: 'Top 7 certificate', src: '/assets/certificates/moonshot-certificate.pdf' }],
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: true,
    order: 6,
  },
  {
    id: 'nestle-nxl',
    title: 'Nestlé NxL — Next Level',
    organization: 'Season 3',
    year: '2025',
    yearSort: 2025,
    role: 'Program Participant',
    primaryCategory: 'business',
    secondaryTags: ['compete', 'market', 'research'],
    shortDescription: 'Completed Nestlé Next Level (NxL) Season 3.',
    documents: [{ label: 'Nestlé NxL certificate', src: '/assets/certificates/nestle-nxl-certificate.pdf' }],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 8,
  },
  {
    id: 'loreal-brandstorm',
    title: 'L’Oréal Brandstorm',
    organization: 'L’Oréal',
    year: '2026',
    yearSort: 2026,
    role: 'Brandstorm Team Member',
    primaryCategory: 'business',
    secondaryTags: ['compete', 'market', 'research'],
    shortDescription:
      'Co-developed Replica Artefacts, a collectible fragrance concept for L’Oréal Brandstorm 2026.',
    fullDescription: [
      'Our L’Oréal Brandstorm concept, Replica Artefacts, imagined fragrance as a collectible luxury platform for Maison Margiela. It combined an AI-guided scent passport with artist-designed bottles and a refill model.',
    ],
    contribution: ['Researched the fragrance market and the consumer discovery problem', 'Helped develop the AI scent-discovery, collectible bottle and refill concept', 'Built the business model and commercial case for the presentation'],
    images: [
      { src: '/assets/business/loreal-concept.png', alt: 'Replica Artefacts concept, scent passport and refillable bottle presentation slide', caption: 'Concept', ratio: '16/9' },
      { src: '/assets/business/loreal-market.png', alt: 'L’Oréal Brandstorm fragrance market research slide', caption: 'Market research', ratio: '16/9' },
      { src: '/assets/business/loreal-business-model.png', alt: 'L’Oréal Brandstorm business model and KPIs slide', caption: 'Business model', ratio: '16/9' },
    ],
    featuredMedia: { src: '/assets/business/loreal-concept.png', alt: 'Replica Artefacts fragrance concept', ratio: '16/9' },
    videos: [{ title: 'Brandstorm submission video', kind: 'file', src: '/assets/videos/loreal-brandstorm.mp4', poster: '/assets/business/loreal-concept.png' }],
    documents: [{ label: 'L’Oréal Brandstorm certificate', src: '/assets/certificates/loreal-brandstorm-certificate.pdf' }],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 9,
  },
  {
    id: 'silent-kitchen-story',
    title: 'Silent Kitchen Story',
    year: '2023',
    yearSort: 2023,
    date: 'Jul — Aug 2023',
    role: 'Social Media Intern',
    primaryCategory: 'business',
    secondaryTags: ['market', 'design', 'build'],
    shortDescription: 'Social content for a food business — Instagram following grew from 3,000 to 6,000 during the internship.',
    fullDescription: [
      'At Silent Kitchen Story, I made carousels and reels around the brand’s visual identity and what its audience responded to. The work combined content design with search-aware captions and weekly iteration.',
    ],
    contribution: [
      'Designed carousel posts and reels aligned with the brand identity and audience behaviour',
      'Used search-aware content and audience insights to grow the account from 3,000 to 6,000 followers',
    ],
    metrics: [
      { value: '3K → 6K', label: 'Instagram followers', verified: true },
      { value: '50%', label: 'Engagement increase', verified: true },
    ],
    featuredMedia: { src: '/assets/business/silent-kitchen.jpg', alt: 'Silent Kitchen Story brand work', ratio: '4/3' },
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 10,
    scale: 'quiet',
  },

  /* ==========================================================
     TECHNOLOGY
     ========================================================== */
  {
    id: 'meta-damian',
    title: 'Damian — Your Digital Ally',
    organization: 'The Knowledge Society · Meta AI Challenge',
    year: '2024',
    yearSort: 2024,
    role: 'Research & Product Design',
    primaryCategory: 'technology',
    secondaryTags: ['research', 'design', 'build', 'speak'],
    shortDescription: 'Researched online behaviour and designed an AI chatbot concept for more supportive Instagram interactions.',
    fullDescription: ['At TKS, I worked on Damian, a proposed Instagram chatbot designed to respond supportively to negative emotions and discourage toxic interactions. The project combined behaviour research, user experience design and a prototype pitch.'],
    contribution: ['Researched user behaviour and the need for supportive interactions', 'Designed chatbot conversation flows and positive reinforcement responses', 'Created and pitched the prototype to Meta’s Oversight Board'],
    result: 'TOP 5 PROJECT',
    featuredMedia: { src: '/assets/technology/meta-damian-cover.jpg', alt: 'Damian Your Digital Ally presentation cover', ratio: '16/9' },
    documents: [{ label: 'Damian project presentation', src: '/assets/documents/meta-damian.pdf' }],
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: false,
    order: 10,
  },
  {
    id: 'we-think',
    title: 'WE-Think — Climate Education',
    organization: 'The Knowledge Society · WEF Challenge',
    year: '2024',
    yearSort: 2024,
    role: 'Research & Strategy',
    primaryCategory: 'technology',
    secondaryTags: ['research', 'design', 'speak', 'compete'],
    shortDescription: 'Designed a scalable climate education approach for underserved South African schools.',
    fullDescription: ['Our TKS challenge addressed gaps in climate change education for underserved schools in South Africa. We proposed a model that combines digital access and community-led teaching, then developed the strategy and pitch.'],
    contribution: ['Researched gaps in existing climate education', 'Designed a scalable education model combining digital resources and community teaching', 'Built the recommendation deck and presented it to World Economic Forum leadership'],
    result: 'TOP 5 PROJECT',
    featuredMedia: { src: '/assets/technology/we-think-cover.jpg', alt: 'WE-Think World Economic Forum challenge presentation cover', ratio: '16/9' },
    documents: [{ label: 'WE-Think recommendation deck', src: '/assets/documents/we-think.pdf' }],
    externalLinks: [{ label: 'TKS on the WEF website', href: 'https://initiatives.weforum.org/strategic-intelligence-academy/tks' }],
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: false,
    order: 11,
  },
  {
    id: 'pharmacy-3d',
    title: 'Personalized Pharmacy — 3D Printing',
    organization: 'Hackathon',
    year: '2024',
    yearSort: 2024,
    role: 'Research & Prototype Team',
    primaryCategory: 'technology',
    secondaryTags: ['research', 'build', 'compete', 'speak'],
    shortDescription: 'Proposed 3D printed personalized medications and won Best Presenter and Best Overall.',
    fullDescription: ['The hackathon challenged us to address the lack of personalization in pharmacy. We proposed 3D printing as a path to customized medication and presented a research-led prototype and business case.'],
    contribution: ['Researched and validated the proposed 3D pharmaceutical printing approach', 'Created a prototype concept and explained its scientific and business rationale', 'Presented the proposal to the judges'],
    result: 'BEST PRESENTER · BEST OVERALL',
    videos: [{ title: 'Watch the project presentation', kind: 'youtube', src: 'https://www.youtube-nocookie.com/embed/FHWtAbh_qmA' }],
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: true,
    order: 12,
  },
  {
    id: 'vita',
    title: 'VITA',
    organization: 'IE University Breakthrough Robotics Program, Madrid',
    year: '2026',
    yearSort: 2026,
    role: 'Robotics Project',
    primaryCategory: 'technology',
    secondaryTags: ['build', 'research', 'compete', 'design'],
    shortDescription:
      'Visual Infrared Transport Assistant — a hospital robot that follows nurses and carries routine items.',
    fullDescription: [
      'VITA came out of the Breakthrough Robotics Program at IE University in Madrid. The premise: nurses spend a meaningful part of a shift walking things from one place to another. A robot that quietly follows and carries the light, routine items gives some of that time back.',
      'The team developed a nurse-following robotics concept and physical prototype during the two-week program. The proposed following system used infrared-beacon and camera-based tracking.',
      'I originated the idea, led the three-person team, worked on the chassis and project integration, and developed the story and presentation for the final demonstration.',
    ],
    contribution: [
      'Originated the VITA concept and defined the problem and proposed solution',
      'Led the three-person team and coordinated the project components',
      'Worked on the robot chassis and connected the physical design to the overall concept',
      'Developed the project narrative and led the final presentation',
    ],
    result: '1ST PLACE',
    images: [
      { src: '/assets/technology/vita-prototype.jpg', alt: 'Maryam and a teammate holding their robotics prototype at IE University', caption: 'Robotics prototype, IE University', ratio: '3/2' },
      { src: '/assets/technology/vita-components.jpg', alt: 'Circuit board being assembled in the IE University robotics lab', caption: 'Hardware work', ratio: '3/2' },
      { src: '/assets/technology/vita-lab.jpg', alt: 'Maryam and classmates working with electronics in the IE University robotics lab', caption: 'Robotics lab, Madrid', ratio: '3/2' },
      { src: '/assets/technology/vita-team.jpg', alt: 'Maryam receiving an IE University summer school certificate', caption: 'IE University summer school', ratio: '3/2' },
    ],
    featuredMedia: { src: '/assets/technology/vita-prototype.jpg', alt: 'Maryam and a teammate holding their robotics prototype at IE University', ratio: '4/3' },
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: true,
    order: 1,
    scale: 'lead',
  },
  {
    id: 'flaire',
    title: 'Flaire',
    organization: 'The Garage Challenge',
    year: '2026',
    yearSort: 2026,
    date: '1–3 October 2026',
    role: 'Technical Lead',
    primaryCategory: 'technology',
    secondaryTags: ['build', 'design', 'compete'],
    shortDescription:
      'As Flaire’s Technical Lead, built the website, demo, visual identity and pitch deck; the team placed 7th at The Garage Challenge.',
    fullDescription: [
      'At The Garage Challenge in Riyadh, our 10-person team worked on Flaire: a proposed permission layer for purchases initiated by AI agents. The starting use case was Saudi small businesses that could let an agent handle routine buying while keeping control over budgets and approved vendors.',
      'I was the team’s Technical Lead. In roughly 48 hours, I built the demo and website, designed the logo and made the pitch deck. The demo walked through three decisions: a purchase within the limit could be approved automatically, one above the limit needed a person, and a kill switch could pause spending.',
      'We presented a three-minute pitch and placed 7th overall. This was a hackathon MVP, not a launched payment product. The idea of issuing a separate card through a licensed banking or card partner, without Flaire holding customer funds, was part of the proposed model; it was not a live integration.',
    ],
    contribution: [
      'Served as Technical Lead on a 10-person team',
      'Built the demo and website showing spending limits, approval decisions and a kill switch',
      'Designed the Flaire logo and created the pitch deck',
      'Helped shape the agentic-payment use case and its control rules for the judges’ pitch',
    ],
    result: '7TH PLACE OVERALL',
    images: [
      { src: '/assets/technology/flaire-pitch.jpg', alt: 'Maryam presenting with a teammate at The Garage Challenge', caption: 'The Garage Challenge pitch', ratio: '3/2' },
      { src: '/assets/technology/flaire-seventh-place.jpg', alt: 'The Garage Challenge seventh-place team on stage', caption: 'Seventh place', ratio: '3/2' },
      { src: '/assets/technology/flaire-certificate.jpg', alt: 'Seventh-place certificate from The Garage Challenge', caption: 'Seventh-place certificate', ratio: '3/2' },
    ],
    featuredMedia: { src: '/assets/technology/flaire-garage-poster.jpg', alt: 'Maryam holding Flaire’s AI business concept poster at The Garage Challenge', ratio: '3/4' },
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: true,
    order: 2,
    scale: 'lead',
  },
  {
    id: 'tks',
    title: 'The Knowledge Society',
    organization: 'TKS',
    year: '2023–24',
    yearSort: 2023,
    date: 'Aug 2023 — Jun 2024',
    role: 'Innovator',
    primaryCategory: 'technology',
    secondaryTags: ['learn', 'research', 'build', 'speak', 'compete'],
    shortDescription:
      'At TKS, researched emerging technology and built projects spanning Meta AI, World Economic Forum education, Food Connect and a project website.',
    fullDescription: [
      'TKS is structured around going deep on emerging technologies and then having to explain them. The work was research, challenges and hackathons, and presenting the result to people who would ask the obvious hard question.',
      'The rooms were the point as much as the projects: pitching to Meta’s Oversight Board and at the World Economic Forum is a fast way to find out whether an idea survives contact with people who do this professionally.',
    ],
    contribution: [
      'Led winning hackathon projects',
      'Pitched to Meta’s Oversight Board and at the World Economic Forum',
      'Developed an air-to-water moonshot project addressing water scarcity in underserved regions',
      'Researched emerging technologies and presented findings',
      'Worked on Food Connect and built a project website',
    ],
    featuredMedia: { src: '/assets/technology/tks.jpg', alt: 'TKS presentation work', ratio: '4/3' },
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: false,
    order: 2,
    scale: 'lead',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    year: '2026',
    yearSort: 2026,
    role: 'Online Workshop Presenter',
    primaryCategory: 'technology',
    secondaryTags: ['speak', 'build', 'research'],
    shortDescription:
      'Designed and delivered an online Agentic AI workshop for UBT AI Club, explaining agent reasoning, tools and workflows.',
    fullDescription: [
      'Most of the interest in agents is in what they can do. The more useful question is when they are worth it. An agent that reasons, picks tools and loops is genuinely better for open-ended work with an unknown number of steps. For a task with a fixed shape, it is a slower and less reliable script.',
      'I delivered this online session for the UBT AI Club. A separate, in-person Agentic AI presentation followed on Engineering Day.',
    ],
    contribution: [
      'Built and delivered the session on agent reasoning, tools and workflows',
      'Worked through concrete cases where agents help and where they add cost without value',
    ],
    images: [{ src: '/assets/technology/agentic-ai-cover.jpg', alt: 'Cover of Maryam’s online Agentic AI workshop deck', caption: 'Workshop deck', ratio: '16/9' }],
    featuredMedia: { src: '/assets/technology/agentic-ai-cover.jpg', alt: 'Agentic AI workshop presentation', ratio: '16/9' },
    videos: [{ title: 'Watch the online workshop', kind: 'youtube', src: 'https://www.youtube-nocookie.com/embed/PxLcnFiowxE' }],
    documents: [{ label: 'Online Agentic AI workshop slides', src: '/assets/documents/agentic-ai-online-workshop.pdf' }],
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: false,
    order: 3,
  },
  {
    id: 'air-to-water',
    title: 'Air-to-Water',
    organization: 'The Knowledge Society',
    year: '2024',
    yearSort: 2024,
    role: 'Moonshot Project',
    primaryCategory: 'technology',
    secondaryTags: ['research', 'build'],
    shortDescription:
      'Led an air-to-water moonshot concept at TKS, from the sustainable-energy business model to an Africa deployment strategy and mentor presentation.',
    fullDescription: [
      'Developed a concept for converting moisture in the air into drinking water for regions facing water scarcity. The project ran through The Knowledge Society from April to May 2024.',
      'I led ideation, built a business model based on sustainable energy use, developed a market entry approach for Africa, and prepared prototype concepts. The project was selected as a top TKS submission and presented to global mentors.',
    ],
    contribution: [
      'Led ideation and created the sustainable-energy business model',
      'Developed an Africa market entry strategy and prototype concepts',
      'Presented the project to TKS directors and global mentors',
    ],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 4,
  },
  {
    id: 'engineering-day-ai',
    title: 'Agentic AI — Engineering Day',
    organization: 'UBT',
    year: '2026',
    yearSort: 2026,
    role: 'In-Person Workshop Presenter',
    primaryCategory: 'technology',
    secondaryTags: ['speak', 'research'],
    shortDescription: 'Prepared and delivered an in-person Agentic AI session for the Engineering Day audience at UBT.',
    contribution: ['Prepared and delivered the in-person Agentic AI presentation'],
    featuredMedia: { src: '/assets/technology/ai-prototyping-cover.jpg', alt: 'AI fundamentals, agentic systems and rapid app prototyping workshop slides', ratio: '16/9' },
    documents: [{ label: 'AI systems and rapid prototyping workshop slides', src: '/assets/documents/ai-prototyping-workshop.pdf' }],
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: false,
    order: 5,
  },
  {
    id: 'automation-lowcode',
    title: 'Automation & Low-Code',
    year: '2025',
    yearSort: 2025,
    role: 'Practice',
    primaryCategory: 'technology',
    secondaryTags: ['build', 'analyze', 'learn'],
    shortDescription:
      'Practised AI automation and low-code workflow building in 2025, connecting forms, data and actions across tools.',
    fullDescription: [
      'In 2025, I practised building low-code workflows that take an input, move information between tools, and trigger a useful next step.',
    ],
    contribution: [
      'Built and tested AI automation and low-code workflows',
    ],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 6,
  },

  /* ==========================================================
     IMPACT
     ========================================================== */
  {
    id: 'sustainability-club',
    title: 'UBT Sustainability Club',
    organization: 'University of Business & Technology',
    year: '2025—NOW',
    yearSort: 2025,
    date: 'Jan 2025 — Present',
    role: 'President (formerly PR Lead)',
    primaryCategory: 'impact',
    secondaryTags: ['lead', 'operate', 'market'],
    shortDescription:
      'Led the club’s PR before becoming President, coordinating outreach, volunteers and sustainability events across UBT.',
    fullDescription: [
      'Became President on 27 February 2025, having come up through the PR side. The role spans event planning, volunteer coordination, outreach and communications across the university.',
      'Most of the visible progress has been outreach. Relaunching the club’s LinkedIn and running it properly moved it from dormant to a real channel — the club now has somewhere to speak from.',
    ],
    contribution: [
      'Led strategic planning and outreach, boosting the club’s presence and engagement across campus',
      'Relaunched and managed the club’s LinkedIn, growing the following to 100+',
      'Generated 5,000+ impressions in one month from a standing start',
      'Previously led PR outreach, bringing new members and visitors to club activities and supporting sponsor proposals',
    ],
    metrics: [
      { value: '5,000+', label: 'LinkedIn impressions in one month', verified: true },
      { value: '100+', label: 'Followers grown', verified: true },
    ],
    images: [
      { src: '/assets/impact/club-team.jpg', alt: 'Maryam presenting the UBT Sustainability Club orientation', caption: 'Club orientation', ratio: '3/2' },
      { src: '/assets/impact/club-orientation.jpg', alt: 'Maryam presenting the Sustainability Club orientation', caption: 'Orientation presentation', ratio: '3/2' },
    ],
    featuredMedia: { src: '/assets/impact/club-team.jpg', alt: 'Maryam presenting the UBT Sustainability Club orientation', ratio: '4/3' },
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 1,
    scale: 'lead',
  },
  {
    id: 'ui-greenmetric',
    title: 'Sustainability Reporting',
    organization: 'University of Business & Technology',
    year: '2025—NOW',
    yearSort: 2025,
    date: 'Sep 2025 — Present',
    role: 'Admin Intern',
    primaryCategory: 'impact',
    secondaryTags: ['analyze', 'research', 'operate'],
    shortDescription:
      'UI GreenMetric, THE Impact Rankings and PRME SIP — collecting the evidence a university’s claims have to stand on.',
    fullDescription: [
      'Three separate frameworks, one underlying problem: none of them take your word for anything. UI GreenMetric, the Times Higher Education Impact Rankings and the PRME Sharing Information on Progress report each want documentation behind every claim — energy, carbon, waste, water, transport, and the education and research side.',
      'The work is unglamorous and genuinely analytical: finding where the institutional data lives, getting it into a consistent shape, and assembling submissions where every figure has evidence attached to it. It is the part of sustainability that looks like data work, because it is.',
    ],
    contribution: [
      'Support sustainability data collection for UI GreenMetric, THE Impact Rankings and PRME SIP documentation',
      'Work the infrastructure, energy, carbon, waste, water and transport data',
      'Document sustainability education and research activity',
      'Assist in administrative coordination for campus events, sustainability reporting and student engagement initiatives',
    ],
    images: [
      { src: '/assets/impact/greenmetric-data.jpg', alt: 'Sustainability reporting documentation', caption: 'Reporting', ratio: '4/3' },
      { src: '/assets/impact/campus.jpg', alt: 'UBT campus', caption: 'Campus', ratio: '3/2' },
    ],
    featuredMedia: { src: '/assets/impact/greenmetric-data.jpg', alt: 'Sustainability reporting documentation', ratio: '4/3' },
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 3,
    scale: 'lead',
  },
  {
    id: 'think-sustainability',
    title: 'Think Sustainability',
    organization: 'UBT',
    year: '2026',
    yearSort: 2026,
    role: 'Lead & Coordination',
    primaryCategory: 'impact',
    secondaryTags: ['lead', 'build', 'design', 'operate'],
    shortDescription:
      'As UBT Sustainability Club President, led and delivered Think Sustainability, with themed booths and a digital participation trail.',
    fullDescription: [
      'A sustainability event that people walk through rather than sit in. Multiple booths, each a different experience and a different discipline’s angle on the same set of problems, tied together by a digital stamp trail that gave people a reason to do all of it rather than one.',
      'Most of the work was planning and coordination: floor plan, booth briefs, teams, university and external collaborators, and the run of the day itself.',
    ],
    contribution: [
      'Planned and coordinated the event end to end',
      'Designed the booth programme across interdisciplinary sustainability themes',
      'Built the digital stamp and participation mechanic to drive engagement across the full trail',
      'Coordinated student teams and university and external collaborators',
    ],
    images: [
      { src: '/assets/impact/think-sustainability-1.jpg', alt: 'Think Sustainability event', caption: 'The event', ratio: '3/2' },
      { src: '/assets/impact/think-sustainability-booths.jpg', alt: 'Think Sustainability booths', caption: 'Booths', ratio: '3/2' },
      { src: '/assets/impact/think-sustainability-plan.jpg', alt: 'Event floor plan and planning material', caption: 'Planning', ratio: '4/3' },
      { src: '/assets/impact/think-sustainability-team.jpg', alt: 'Think Sustainability team', caption: 'Team', ratio: '4/3' },
    ],
    featuredMedia: { src: '/assets/impact/think-sustainability-1.jpg', alt: 'Think Sustainability event', ratio: '4/3' },
    documents: [{ label: 'UBT letter of appreciation', src: '/assets/certificates/think-sustainability-certificate.pdf' }],
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 4,
    scale: 'lead',
  },
  {
    id: 'head-girl',
    title: 'Head Girl',
    organization: 'Pakistan International School Jeddah — English Section',
    year: '2023–24',
    yearSort: 2023,
    date: 'Sep 2023 — May 2024',
    role: 'Student Leadership',
    primaryCategory: 'impact',
    secondaryTags: ['lead', 'speak', 'operate'],
    shortDescription:
      'School-wide student representation — a team of 10+, workshops reaching 1,000+ students, engagement up 40%.',
    fullDescription: [
      'The first version of a lot of what came later: representing students, speaking in front of the whole school, coordinating teams and events, and learning that most leadership is logistics with a deadline.',
      'The part that mattered most was the workshop programme — building something that reached the whole school rather than the usual few, and having the engagement numbers to show whether it landed.',
    ],
    contribution: [
      'Led a team of 10+ student representatives, connecting students and administration',
      'Planned and operationalised personal development workshops benefiting 1,000+ students',
      'Improved student engagement metrics by 40%',
      'Served as the primary liaison for student concerns, working with faculty to improve student policies',
    ],
    metrics: [
      { value: '1,000+', label: 'Students reached', verified: true },
      { value: '40%', label: 'Engagement improvement', verified: true },
      { value: '10+', label: 'Representatives led', verified: true },
    ],
    showInIndex: true,
    showInSpeaking: true,
    showInRecognition: false,
    order: 5,
  },
  {
    id: 'sustainability-literacy',
    title: 'Sustainability Literacy',
    organization: 'UBT',
    year: '2025',
    yearSort: 2025,
    role: 'Assessment & Analysis',
    primaryCategory: 'impact',
    secondaryTags: ['analyze', 'research', 'build'],
    shortDescription:
      'As part of the UBT Sustainability Club, designed and analysed a sustainability literacy assessment for students.',
    fullDescription: [
      'A sustainability literacy assessment run across an event: SDGs, climate, ESG, circular economy, responsible consumption, biodiversity, ethical leadership and Vision 2030. The point was to get a baseline instead of guessing what people already know.',
    ],
    contribution: [
      'Built the assessment across the SDG, climate, ESG and circular economy themes',
      'Ran it at the event and analysed the responses',
    ],
    metrics: [{ value: '~70', label: 'Event responses', verified: false }],
    images: [
      { src: '/assets/impact/literacy-survey.jpg', alt: 'Sustainability literacy assessment material', caption: 'Assessment', ratio: '4/3' },
    ],
    featuredMedia: { src: '/assets/impact/literacy-survey.jpg', alt: 'Sustainability literacy assessment material', ratio: '4/3' },
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 6,
  },
  {
    id: 'bais-advisory-board',
    title: 'BAIS Advisory Board',
    organization: 'UBT',
    year: '2025—NOW',
    yearSort: 2025,
    role: 'Student Representative',
    primaryCategory: 'impact',
    secondaryTags: ['lead', 'research'],
    shortDescription:
      'Sitting on the programme advisory board as the student voice on the BAIS curriculum.',
    contribution: ['Represent students in programme and curriculum discussions'],
    images: [{ src: '/assets/impact/bais-student-talk.jpg', alt: 'Maryam speaking to UBT students about her BAIS experience', caption: 'Speaking with BAIS students', ratio: '4/3' }],
    featuredMedia: { src: '/assets/impact/bais-student-talk.jpg', alt: 'Maryam speaking to UBT students about BAIS', ratio: '4/3' },
    showInIndex: true,
    showInSpeaking: false,
    showInRecognition: false,
    order: 7,
  },
];

/* ============================================================
   DERIVED VIEWS — never re-declare work anywhere else.
   ============================================================ */

const byOrder = (a: WorkItem, b: WorkItem) => a.order - b.order;

export const workById = (id: string): WorkItem | undefined =>
  work.find((w) => w.id === id);

export const workByCategory = (category: WorkItem['primaryCategory']): WorkItem[] =>
  work.filter((w) => w.primaryCategory === category && w.id !== 'tks').sort(byOrder);

export const indexWork: WorkItem[] = work
  .filter((w) => w.showInIndex)
  .sort((a, b) => b.yearSort - a.yearSort || a.order - b.order);

export const speakingWork: WorkItem[] = work
  .filter((w) => w.showInSpeaking)
  .sort((a, b) => b.yearSort - a.yearSort || a.order - b.order);

export const categoryMeta = {
  business: {
    index: '01',
    title: 'Business',
    disciplines: ['Startups', 'Analytics', 'Entrepreneurship', 'Marketing', 'Strategy'],
    blurb:
      'Building things, selling things, and reading the numbers that tell you whether either worked.',
    path: '/business',
  },
  technology: {
    index: '02',
    title: 'Technology',
    disciplines: ['AI', 'Robotics', 'Emerging Technology', 'Prototyping'],
    blurb:
      'Hardware that has to physically work, and software that has to be worth the complexity.',
    path: '/technology',
  },
  impact: {
    index: '03',
    title: 'Impact',
    disciplines: ['Sustainability', 'Leadership', 'Community', 'Institutional Work'],
    blurb:
      'Sustainability treated as an evidence problem, and leadership treated as an operating one.',
    path: '/impact',
  },
} as const;
