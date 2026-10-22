import { Reveal, MaskReveal } from '../Motion/Reveal';
import './Intro.css';

/* ============================================================
   INTRO — SECTION 02
   A held breath after the hero. Three lines, a lot of air.
   Not an About page.
   ============================================================ */

export function Intro() {
  return (
    <section className="section intro" aria-labelledby="intro-heading">
      <div className="shell intro__inner">
        <p className="label intro__label">
          <span className="label__index">01</span> Intro
        </p>

        <h2 id="intro-heading" className="intro__headline">
          <MaskReveal delay={0}>
            <span>I work across business,</span>
          </MaskReveal>
          <MaskReveal delay={0.08}>
            <span>technology and <em className="intro__em">impact</em>.</span>
          </MaskReveal>
        </h2>

        <Reveal delay={0.15} className="intro__body">
          <p className="lede">
            I study Business Analytics &amp; Information Systems at UBT in Jeddah. I
            co-founded Tiin to help Saudi small businesses understand their finances,
            built a hospital-assistant robot at IE University, and work on sustainability
            reporting at UBT. I’m drawn to problems that need both analysis and execution.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
