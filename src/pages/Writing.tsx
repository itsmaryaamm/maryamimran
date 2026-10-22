import { PageHeader } from '../components/PageHeader/PageHeader';
import { Writing as WritingSection } from '../components/Writing/Writing';
import { Contact } from '../components/Contact/Contact';
import { writingSorted } from '../data/writing';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Writing() {
  usePageMeta({
    title: 'Writing — Maryam Imran',
    description:
      'Writing by Maryam Imran on ambition, building things early, entrepreneurship, student leadership and learning publicly.',
    path: '/writing',
  });

  return (
    <>
      <PageHeader
        index="—"
        kicker="Writing"
        title="Writing."
        blurb="Notes on building, learning and the questions I’m still working through."
        count={writingSorted.length}
      />

      <WritingSection showQuote sectionIndex="—" heading="Writing notes" />
      <Contact />
    </>
  );
}
