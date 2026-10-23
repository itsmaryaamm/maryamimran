import { AboutPage } from '../components/AboutPage/AboutPage';
import { Contact } from '../components/Contact/Contact';
import { usePageMeta } from '../hooks/usePageMeta';

/* ============================================================
   ABOUT
   ------------------------------------------------------------
   The person, not the record. Education, recognition and the
   programme list used to sit here; they were a second copy of
   what the index already holds, and this page is deliberately
   not a second résumé.
   ============================================================ */

export default function About() {
  usePageMeta({
    title: 'About — Maryam Imran',
    description:
      'A little more about Maryam Imran — the curiosity, the contradictions and the eight-hours-of-networking photograph that the rest of the portfolio leaves out.',
    path: '/about',
  });

  return (
    <>
      <AboutPage />
      <Contact />
    </>
  );
}
