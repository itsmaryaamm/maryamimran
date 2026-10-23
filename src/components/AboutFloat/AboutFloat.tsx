import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AboutFloat.css';

/* ============================================================
   FLOATING ABOUT
   ------------------------------------------------------------
   One permanent way back to the person, on every page except
   the one it points at. It stays out of the way until the hero
   is behind you, then rides along in the corner.

   It is a real link with real text — not an icon a screen
   reader has to guess at — and it sits under the menu panel so
   an open menu covers it.
   ============================================================ */

export function AboutFloat() {
  const { pathname } = useLocation();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  if (pathname === '/about') return null;

  return (
    <Link to="/about" className={`aboutfloat ${shown ? 'aboutfloat--in' : ''}`} tabIndex={shown ? 0 : -1}>
      <span className="aboutfloat__label">
        About
        <br />
        me
      </span>
      <span className="aboutfloat__arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
