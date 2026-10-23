import type { MediaItem } from './types';
import { workById } from './work';

/* ============================================================
   SELECTED WORK
   ------------------------------------------------------------
   The homepage used to hand a visitor three category doors and
   nothing to look at. This is the curated middle: five pieces
   of work, chosen rather than listed, each pointing at its full
   record in the index.

   Nothing is authored here that is not already in work.ts — the
   headline and line are drawn from each record's own result and
   description, so there is still one source of truth.
   ============================================================ */

export interface SelectedItem {
  /** The record in work.ts this is a view of. */
  workId: string;
  /** The index entry to open when someone follows it through. */
  entryKey: string;
  /** Role and context, set small above the title. */
  kicker: string;
  /** The figure or placing, set large. Omitted where there isn't one. */
  headline?: string;
  /** One sentence. What it was and what happened. */
  line: string;
  media: MediaItem;
}

export const selected: SelectedItem[] = [
  {
    workId: 'tiin',
    entryKey: 'P11',
    kicker: 'Co-Founder & CEO · Monsha’at Human Capital Program',
    line: 'Customer discovery with Saudi SME owners moved Tiin from analytics dashboards to financial interpretation — a readable read on business health rather than a dashboard to decipher. I presented the venture at Demo Day.',
    media: {
      src: '/assets/business/tiin-product.jpg',
      alt: 'Maryam presenting a Tiin product flow on stage',
      ratio: '3/2',
    },
  },
  {
    workId: 'vita',
    entryKey: 'P02',
    kicker: 'Team Lead · IE University, Madrid',
    headline: '1st of 3 teams',
    line: 'A hospital robot that follows a nurse and carries the routine items, built in two weeks. I originated the concept, led the three-person team and ran the final demonstration.',
    media: {
      src: '/assets/technology/vita-prototype.jpg',
      alt: 'Maryam and a teammate holding the VITA prototype on stage at IE University’s Breakthrough Robotics closing',
      ratio: '3/2',
    },
  },
  {
    workId: 'think-sustainability',
    entryKey: 'S02',
    kicker: 'President · UBT Sustainability Club',
    headline: '4.9 / 5',
    line: 'Eight interdisciplinary booths and a QR participation trail that required students to cross four of them. 222 participation cards, 443+ booth interactions, and students from all four UBT colleges.',
    media: {
      src: '/assets/impact/think-sustainability-booth.jpg',
      alt: 'Four UBT Sustainability Club volunteers behind the Think Sustainability booth, with reusable bottles and plants on the table',
      ratio: '3/2',
    },
  },
  {
    workId: 'flaire',
    entryKey: 'P01',
    kicker: 'Technical Lead · The Garage Challenge, Riyadh',
    headline: '7th overall',
    line: 'A permission layer for purchases made by AI agents. In roughly 48 hours I built the demo and website, designed the identity and made the deck — approve under the limit, escalate over it, kill switch on top.',
    media: {
      src: '/assets/technology/flaire-pitch.jpg',
      alt: 'Maryam presenting Flaire with a teammate at The Garage Challenge',
      ratio: '3/2',
    },
  },
  {
    workId: 'sustainability-literacy',
    entryKey: 'S03',
    kicker: 'Assessment design · UBT',
    headline: '30 questions',
    line: 'A sustainability literacy benchmark modelled on the UN-endorsed Sulitest and localised to Vision 2030 — built so UBT can run it each year as evidence for its PRME reporting.',
    media: {
      src: '/assets/impact/literacy-poster.jpg',
      alt: 'The UBT Sustainability Literacy Test invitation poster',
      ratio: '3/4',
    },
  },
];

export const selectedWithWork = selected.map((item) => ({
  ...item,
  work: workById(item.workId),
}));
