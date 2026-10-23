import { Link } from 'react-router-dom';
import { introPortrait, montage, observations } from '../../data/about';
import { Figure } from '../Media/Figure';
import { MaskReveal, Reveal } from '../Motion/Reveal';
import './AboutPage.css';

/* ============================================================
   ABOUT — the person behind the projects
   ------------------------------------------------------------
   Everything else on this site is evidence. This page is the
   person: five movements, read top to bottom, with the montage
   doing the work a list of facts can't.

   The education, recognition and programme blocks that used to
   live here have come off. They were a second copy of records
   the index already holds in full, and this page is explicitly
   not a second résumé.
   ============================================================ */

export function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutMontage />
      <AboutNotes />
      <AboutDeeper />
      <AboutGoodbye />
    </>
  );
}

/* ---------- 01 — A little more about me ---------- */

function AboutIntro() {
  return (
    <section className="section section--tall abintro" aria-labelledby="abintro-heading">
      <div className="shell">
        <div className="section-head">
          <div className="section-head__meta">
            <p className="label">
              <span className="label__index">01</span> About
            </p>
            <p className="label">The person behind the projects</p>
          </div>
        </div>

        <h1 id="abintro-heading" className="abintro__headline">
          <MaskReveal>
            <span>A little more</span>
          </MaskReveal>
          <MaskReveal delay={0.08}>
            <span>about me.</span>
          </MaskReveal>
        </h1>

        <Reveal delay={0.14}>
          <p className="abintro__sub">The stuff that doesn’t make it onto LinkedIn.</p>
        </Reveal>

        <div className="abintro__grid">
          <Reveal delay={0.1} className="abintro__media">
            <Figure media={introPortrait} label="Maryam Imran" priority sizes="(max-width: 860px) 92vw, 44vw" />
          </Reveal>

          <Reveal delay={0.18} className="abintro__body">
            <div className="prose abintro__prose">
              <p className="abintro__hello">Hey, I’m Maryam!</p>
              <p>
                I’m 20, Pakistani, raised in Jeddah, and currently studying Business Analytics
                &amp; Information Systems at UBT.
              </p>
              <p>
                I’m interested in an unreasonable number of things, I ask a lot of questions, and
                I have a habit of turning casual ideas into actual projects.
              </p>
              <p>
                Most of this website is about what I’ve done. This page is a little more about who
                I am.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 — A few versions of me ---------- */

function AboutMontage() {
  return (
    <section className="section section--tall abmontage" aria-labelledby="abmontage-heading">
      <div className="shell">
        <div className="section-head">
          <div className="section-head__meta">
            <p className="label">
              <span className="label__index">02</span> Photographs
            </p>
            <p className="label">Six of them, loosely arranged</p>
          </div>
        </div>

        <h2 id="abmontage-heading" className="abmontage__headline">
          <MaskReveal>
            <span>A few versions of me.</span>
          </MaskReveal>
        </h2>

        <ul className="abmontage__grid">
          {montage.map((item, i) => (
            <li
              key={item.media.src}
              className={`abshot ${item.punchline ? 'abshot--punchline' : ''}`}
              style={{
                ['--col' as string]: item.column,
                ['--drop' as string]: `${item.drop ?? 0}rem`,
              }}
            >
              <Reveal delay={Math.min(i * 0.05, 0.2)} y={26}>
                {/* The placeholder names the original file, so an empty slot
                    says which photograph belongs in it. */}
                <Figure
                  media={item.media}
                  label={item.file}
                  className="abshot__figure"
                  sizes="(max-width: 700px) 86vw, (max-width: 1100px) 46vw, 38vw"
                />
                <p className="abshot__caption">{item.caption}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 03 — A few things you should know ---------- */

function AboutNotes() {
  return (
    <section className="section section--tall abnotes" aria-labelledby="abnotes-heading">
      <div className="shell">
        <div className="section-head">
          <div className="section-head__meta">
            <p className="label">
              <span className="label__index">03</span> Notes
            </p>
            <p className="label">Five small discoveries</p>
          </div>
        </div>

        <h2 id="abnotes-heading" className="abnotes__headline">
          <MaskReveal>
            <span>A few things you</span>
          </MaskReveal>
          <MaskReveal delay={0.08}>
            <span>should know about me.</span>
          </MaskReveal>
        </h2>

        <ol className="abnotes__list">
          {observations.map((o, i) => (
            <li key={o.heading} className="abnote">
              <Reveal delay={Math.min(i * 0.04, 0.16)}>
                <span className="abnote__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="abnote__heading">{o.heading}</h3>
                <p className="prose abnote__body">{o.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- 04 — A little deeper ---------- */

function AboutDeeper() {
  return (
    <section className="section section--tall abdeeper ground-stone" aria-labelledby="abdeeper-heading">
      <div className="shell">
        <div className="section-head">
          <div className="section-head__meta">
            <p className="label">
              <span className="label__index">04</span> A little deeper
            </p>
          </div>
        </div>

        <div className="abdeeper__column">
          <h2 id="abdeeper-heading" className="abdeeper__lead">
            <MaskReveal>
              <span>I’ve never been very good</span>
            </MaskReveal>
            <MaskReveal delay={0.08}>
              <span>at choosing one lane.</span>
            </MaskReveal>
          </h2>

          <Reveal delay={0.1}>
            <div className="prose abdeeper__prose">
              <p>
                For a long time, I thought I needed a clear answer whenever someone asked what I
                wanted to do with my life. One career, one direction, one neat sentence that made
                everything make sense.
              </p>
              <p>
                But the more I explore, the less convinced I am that people need to fit so neatly
                into categories.
              </p>
              <p>
                I love technology, but I’m equally fascinated by the people using it. I enjoy
                breaking problems down logically, but I also love imagining things that don’t exist
                yet. I like structure, but some of my favorite experiences have happened when I had
                absolutely no plan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="abdeeper__turn">
              Maybe those things don’t need to fit into one box.
              <br />
              Maybe the interesting part is discovering what happens when they overlap.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="abdeeper__lead abdeeper__lead--second">
              I’m learning that not everything needs to become something.
            </h3>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="prose abdeeper__prose">
              <p>
                I’ve always cared about doing things well. Sometimes that has meant putting more
                pressure on myself than a situation probably deserved.
              </p>
              <p>
                I’m learning that there’s value in being a beginner. In trying something without
                knowing whether I’ll be good at it. In asking questions, making mistakes, and
                changing my mind.
              </p>
              <p>And perhaps most importantly, in doing things simply because I enjoy them.</p>
              <p>
                Not every interest needs to become a project. Not every experience needs to become
                an achievement. Not every hour needs to be productive.
              </p>
              <p>
                I still have ambitious goals, and I doubt that’s going to change. But I don’t want
                to become so focused on building a future that I forget to enjoy the life happening
                in between.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 — A simple goodbye ---------- */

function AboutGoodbye() {
  return (
    <section className="section section--tall abbye" aria-labelledby="abbye-heading">
      <div className="shell abbye__inner">
        <h2 id="abbye-heading" className="abbye__headline">
          <MaskReveal>
            <span>Anyway, that’s me.</span>
          </MaskReveal>
        </h2>

        <Reveal delay={0.1}>
          <p className="abbye__line">Or at least the version of me writing this today.</p>
          <p className="abbye__line abbye__line--quiet">
            Thanks for stopping by. I hope something here made you curious.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <Link to="/#work" className="abbye__link">
            Back to what I’ve been building
            <span className="abbye__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
