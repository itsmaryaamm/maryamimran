import { useState } from 'react';
import type { DocumentItem } from '../../data/types';
import { asset } from '../../lib/asset';
import './DocumentViewer.css';

export function DocumentViewer({ document }: { document: DocumentItem }) {
  const [page, setPage] = useState(1);
  const image = `${document.src.replace(/\.pdf$/i, '')}/page-${String(page).padStart(3, '0')}.webp`;

  return (
    <section className="docview" aria-label={document.label}>
      <div className="docview__heading">
        <h4 className="label">{document.label}</h4>
        <a className="textlink textlink--quiet" href={asset(document.src)} target="_blank" rel="noreferrer noopener">Open PDF ↗</a>
      </div>
      <div className="docview__frame">
        <img src={asset(image)} alt={`${document.label}, page ${page} of ${document.pages}`} loading="lazy" decoding="async" />
      </div>
      {document.pages > 1 && (
        <div className="docview__controls" aria-label={`${document.label} pages`}>
          <button type="button" onClick={() => setPage((n) => Math.max(1, n - 1))} disabled={page === 1}>← Previous</button>
          <span className="mono">{page} / {document.pages}</span>
          <button type="button" onClick={() => setPage((n) => Math.min(document.pages, n + 1))} disabled={page === document.pages}>Next →</button>
        </div>
      )}
    </section>
  );
}
