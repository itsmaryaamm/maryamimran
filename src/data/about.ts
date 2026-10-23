/* ============================================================
   ABOUT — the person behind the projects
   ------------------------------------------------------------
   Copy here is Maryam's own, kept verbatim. The photographs are
   hers too: `file` records the original she sent so the mapping
   from her camera roll to the path on disk stays unambiguous.

   Until a file exists at `src`, Figure renders its labelled
   placeholder rather than a broken image — drop the photograph
   in and the montage fills itself.
   ============================================================ */

import type { MediaItem } from './types';

export interface MontageItem {
  media: MediaItem;
  caption: string;
  /** The original filename Maryam sent, for traceability. */
  file: string;
  /** Grid placement on desktop, as a CSS grid-column value. */
  column: string;
  /** Vertical offset in rem, so the composition staggers. */
  drop?: number;
  /** The punchline. Set in the serif italic, once. */
  punchline?: boolean;
}

/* STAND-IN, and now a file of its own. The intended photograph is
   "WhatsApp Image 2025-11-01 at 14.36.06_c967b9b8.jpg", which has not
   reached the repository. Until it does this holds the environmental
   portrait the hero used to carry — copied, not shared, so changing the
   header no longer changes this page. */
export const introPortrait: MediaItem = {
  src: '/assets/about/maryam-intro.jpg',
  alt: 'Maryam Imran at the University of Business & Technology in Jeddah',
  ratio: '16/9',
  focus: '48% 28%',
};

export const montage: MontageItem[] = [
  {
    file: 'me talking.jpeg',
    media: {
      src: '/assets/about/speaking-business-days.jpg',
      alt: 'Maryam seated with a microphone at Business Days 2025, mid-sentence and gesturing',
      ratio: '3/4',
    },
    caption: 'Give me a microphone and apparently I have a lot to say.',
    column: '1 / span 6',
  },
  {
    file: 'WhatsApp Image 2025-05-14 at 16.33.38_d04a5680.jpg',
    media: {
      src: '/assets/about/exhibition-conversation.jpg',
      alt: 'Maryam laughing mid-conversation with three other people on an exhibition floor',
      ratio: '3/4',
    },
    caption: 'One conversation away from another rabbit hole.',
    column: '8 / span 5',
    drop: 7,
  },
  {
    file: 'WhatsApp Image 2026-10-23 at 4.59.29 PM.jpeg',
    media: {
      src: '/assets/about/speaking-mic.jpg',
      alt: 'Maryam speaking into a microphone with one arm raised, in front of a room of students at UBT',
      ratio: '3/4',
    },
    caption: 'Probably asking everyone to participate in something.',
    column: '2 / span 5',
    drop: 3,
  },

  /* MISSING. "WhatsApp Image 2025-12-15 at 19.14.14_34983278.jpg" — Maryam
     working at a table — has not reached the repository. Its caption was
     "The quieter side. Usually with 37 tabs open." Drop the file at
     source-images/about-working-quiet.jpg, run `npm run images`, and
     restore this entry at column '8 / span 4', drop 10, ratio '1/1'. */

  {
    file: 'WhatsApp Image 2025-11-13 at 16.56.37_d50c27b5.jpg',
    media: {
      src: '/assets/about/project-display.jpg',
      alt: 'Maryam standing beside a project display at a campus exhibition',
      ratio: '16/9',
    },
    caption: 'I like seeing things go from “what if” to “it actually works.”',
    column: '8 / span 5',
    drop: 10,
  },
  {
    file: 'After 8 hours of ‘networking’.png',
    media: {
      src: '/assets/about/networking-battery.jpg',
      alt: 'Maryam collapsed sideways on a blue couch at an exhibition, one hand over her face',
      ratio: '1/1',
    },
    caption: 'Eight hours of networking. The social battery has left the chat.',
    column: '1 / span 7',
    drop: 2,
    punchline: true,
  },
];

export interface Observation {
  heading: string;
  body: string;
}

export const observations: Observation[] = [
  {
    heading: 'I have a chronic case of “but what if?”',
    body: 'One question leads to another, and suddenly I’m researching something I didn’t even know existed an hour ago. I genuinely enjoy falling down rabbit holes, even when they lead absolutely nowhere.',
  },
  {
    heading: 'I’m a people person. With a battery percentage.',
    body: 'I love meeting people, hearing their stories, and having conversations that make me think differently. But even I have a limit. The eight-hours-of-networking photo above is evidence.',
  },
  {
    heading: 'I take my work seriously. Myself? Considerably less.',
    body: 'I care about doing things well, probably a little too much sometimes. But I think life becomes unnecessarily exhausting when everything has to be serious. I like people who can be ambitious and still laugh at themselves.',
  },
  {
    heading: 'I’m interested in almost everything. It’s becoming a logistical problem.',
    body: 'Technology, business, psychology, robotics, design, human behavior… I keep discovering things I want to learn. I’ve stopped trying to force all my interests into one neat category.',
  },
  {
    heading: 'I have a complicated relationship with planning.',
    body: 'I love a good plan. I also love spontaneous opportunities that completely ruin that plan. Somehow, some of my favorite experiences have come from things I never saw coming.',
  },
];
