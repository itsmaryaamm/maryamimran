import type { Category, Tag } from './types';

/* ============================================================
   DISPLAY LABELS
   ------------------------------------------------------------
   The data uses short verb keys (`build`, `lead`, `analyze`)
   because they are convenient to author and filter on. They are
   not words a visitor should have to decode, so nothing renders
   a raw key — every surface passes it through here first.
   ============================================================ */

export const tagLabel: Record<Tag, string> = {
  build: 'Building',
  lead: 'Leading',
  analyze: 'Analysis',
  research: 'Research',
  speak: 'Speaking',
  write: 'Writing',
  learn: 'Learning',
  compete: 'Competition',
  market: 'Marketing',
  design: 'Design',
  operate: 'Operations',
};

export const categoryLabel: Record<Category, string> = {
  business: 'Business',
  technology: 'Technology',
  impact: 'Impact',
};
