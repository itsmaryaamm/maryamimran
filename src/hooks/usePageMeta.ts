import { useEffect } from 'react';
import { site } from '../data/site';

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Keeps <title>, the description, canonical URL and the Open Graph
 * tags in step with the current route. The static tags in index.html
 * remain the crawl-time defaults.
 */
export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    /* site.url is the eventual custom domain. Until DNS points there the site
       may be served from somewhere else (a GitHub Pages project path, a
       preview deploy), and a canonical naming a host that doesn't resolve is
       worse than none — so describe where the page actually is. */
    const onCustomDomain =
      typeof window !== 'undefined' && window.location.origin === site.url;
    const origin =
      onCustomDomain || typeof window === 'undefined'
        ? site.url
        : `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, '')}`;
    const url = `${origin}${path}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [title, description, path]);
}
