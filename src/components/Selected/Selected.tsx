import { Link } from 'react-router-dom';
import { selectedWithWork } from '../../data/selected';
import { publishedRecognition } from '../../data/recognition';
import { Figure } from '../Media/Figure';
import { MaskReveal, Reveal } from '../Motion/Reveal';
import './Selected.css';

/* ============================================================
   SELECTED — SECTION 02
   ------------------------------------------------------------
   Five pieces of work, chosen rather than listed. This is the
   part of the homepage that earns the archive behind it: a
   visitor who reads nothing else should still leave knowing
   what was built, what it was for, and what happened.

   Every row links through to the same record in the index,
   opened, so "read more" lands on the full thing rather than
   on a category page the visitor then has to search.
   ============================================================ */

/* Four verified signals. No entry appears here that is not already
   marked verified in recognition.ts. */
const signalIds = ['cgpa', 'ie-robotics-first', 'flaire-garage-challenge', 'outstanding-cambridge-learner'];

export function Selected() {
  const signals = signalIds
    .map((id) => publishedRecognition.find((r) => r.id === id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <section className="section section--tall selected" aria-labelledby="selected-heading">
      <div className="shell">
        <div className="section-head">
          <div className="section-head__meta">
            <p className="label">
              <span className="label__index">02</span> Selected
            </p>
            <p className="label">Five of them, in full</p>
          </div>
          <h2 id="selected-heading" className="selected__heading">
            <MaskReveal>
              <span>What I’ve actually built.</span>
            </MaskReveal>
          </h2>
        </div>

        {signals.length > 0 && (
          <Reveal className="signals">
            <ul className="signals__list">
              {signals.map((s) => (
                <li key={s.id} className="signal">
                  {s.value && <span className="signal__value">{s.value}</span>}
                  <span className="signal__title">{s.title}</span>
                  <span className="signal__meta">
                    {[s.organization, s.year].filter(Boolean).join(' · ')}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <ol className="selected__list">
          {selectedWithWork.map((item, i) => (
            <li key={item.workId} className="selitem">
              <Reveal delay={0.05} className="selitem__media">
                <Figure media={item.media} label={item.work?.title ?? ''} />
              </Reveal>

              <Reveal delay={0.12} className="selitem__body">
                <p className="label selitem__index">
                  <span className="label__index">{String(i + 1).padStart(2, '0')}</span>
                  {item.work?.year}
                </p>

                <h3 className="selitem__title">
                  {item.work?.title}
                  {item.work?.titleAlt && (
                    <span className="selitem__title-alt" lang="ar">
                      {' '}
                      {item.work.titleAlt}
                    </span>
                  )}
                </h3>

                <p className="selitem__kicker">{item.kicker}</p>

                {item.headline && <p className="selitem__headline">{item.headline}</p>}

                <p className="prose selitem__line">{item.line}</p>

                <Link className="textlink" to={`/index#entry-${item.entryKey}`}>
                  Open the full record
                  <span className="textlink__arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
