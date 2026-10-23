import { asset } from '../../lib/asset';
import { Link } from 'react-router-dom';
import { Portrait, PORTRAIT_ABOUT_SRC, PORTRAIT_SRC } from '../Portrait/Portrait';
import { MaskReveal, Reveal } from '../Motion/Reveal';
import { site } from '../../data/site';
import './About.css';

/* ============================================================
   ABOUT
   ------------------------------------------------------------
   Opens on a statement, not on a greeting. The second portrait
   is swapped in by dropping a file at PORTRAIT_ABOUT_SRC; until
   then the component falls back to the hero portrait so the
   layout is never broken by a missing asset.
   ============================================================ */

export function About() {
  return (
    <section className="section about" aria-labelledby="about-heading">
      <div className="shell">
        <div className="section-head">
          <div className="section-head__meta">
            <p className="label">
              <span className="label__index">01</span> About
            </p>
            <p className="label">
              {site.location}
            </p>
          </div>
        </div>

        <div className="about__grid">
          <div className="about__lead">
            <h2 id="about-heading" className="about__opening">
              <MaskReveal>
                <span>I like problems that need</span>
              </MaskReveal>
              <MaskReveal delay={0.08}>
                <span>someone to build the thing,</span>
              </MaskReveal>
              <MaskReveal delay={0.16}>
                <span>read the numbers, and get</span>
              </MaskReveal>
              <MaskReveal delay={0.24}>
                <span>people to actually show up.</span>
              </MaskReveal>
            </h2>
          </div>

          <Reveal delay={0.2} className="about__portrait-wrap">
            <Portrait
              src={PORTRAIT_ABOUT_SRC}
              fallbackSrc={PORTRAIT_SRC}
              ratio="4 / 5"
              objectPosition="center 26%"
              sizes="(max-width: 900px) 88vw, 38vw"
              alt={`${site.name} — portrait`}
              placeholderNote="About portrait → maryam-about.jpg"
            />
          </Reveal>

          <Reveal delay={0.1} className="about__body">
            <div className="prose about__prose">
              <p>
                I’m a {site.discipline} student at the {site.university} in {site.location}.
                I co-founded <strong>Tiin</strong>, a financial interpretation product for
                Saudi small businesses, and took it through Monsha’at’s Human Capital
                Program to Demo Day.
              </p>
              <p>
                I’m president of the <strong>UBT Sustainability Club</strong>, which means
                running campus events and then writing the reports that have to follow them —
                including a 30-question sustainability literacy benchmark the university can
                run each year as evidence for its PRME reporting. At IE University in Madrid
                I led a three-person team building a hospital robot that follows nurses and
                carries routine items; it placed first in the final class competition.
              </p>
              <p>
                The pattern underneath is narrower than the list looks. Each of those needed
                the same three things: finding out what people actually do rather than
                assuming, building something testable quickly, and staying for the
                unglamorous part — the data, the report, the follow-up nobody volunteers for.
              </p>
              <p className="about__closing">
                I’m early in all of this. That’s the part I’d keep.
              </p>
            </div>

            <div className="about__links">
              <Link to="/index" className="textlink">
                See everything
                <span className="textlink__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
              {site.resume.available && (
                <a
                  href={asset(site.resume.path)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="textlink"
                >
                  Resume
                  <span className="textlink__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              )}
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="textlink"
              >
                LinkedIn
                <span className="textlink__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                href={site.links.substack}
                target="_blank"
                rel="noreferrer noopener"
                className="textlink"
              >
                Substack
                <span className="textlink__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
