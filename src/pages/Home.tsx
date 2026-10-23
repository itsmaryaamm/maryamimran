import { Hero } from '../components/Hero/Hero';
import { Intro } from '../components/Intro/Intro';
import { Selected } from '../components/Selected/Selected';
import { WorkHub } from '../components/WorkHub/WorkHub';
import { Contact } from '../components/Contact/Contact';
import { usePageMeta } from '../hooks/usePageMeta';
import { site } from '../data/site';

/* ============================================================
   HOME
   ------------------------------------------------------------
   Four movements:

     hero -> intro -> selected work -> business / technology / impact -> contact

   Writing, Programs, Recognition and the full archive all still
   exist — they live on /writing, /about and /index rather than
   competing for attention here. Nothing was deleted to get this
   shorter; it was relocated.
   ============================================================ */

export default function Home() {
  usePageMeta({ title: site.title, description: site.description, path: '/' });

  return (
    <>
      <Hero />
      <Intro />
      <Selected />
      <WorkHub />
      <Contact />
    </>
  );
}
