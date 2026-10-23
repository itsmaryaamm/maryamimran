import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  distinctEntryCount,
  entriesInGroup,
  indexEntries,
  groupCounts,
  groupMeta,
  groupOrder,
  type IndexEntry,
  type IndexGroup,
} from '../../data/indexEntries';
import { Figure } from '../Media/Figure';
import { DocumentViewer } from '../Media/DocumentViewer';
import { WorkRecord } from '../ExpandableWork/WorkRecord';
import { MaskReveal } from '../Motion/Reveal';
import { useHasHover } from '../../hooks/useMediaQuery';
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion';
import './CompleteIndex.css';

/* ============================================================
   COMPLETE INDEX — the permanent archive
   ------------------------------------------------------------
   A reference system, not a résumé table.

   Two filters only, and both are things a visitor can already
   see: the type of record, and the year. An earlier version
   filtered on activity verbs (build / lead / analyze), which
   asked the visitor to guess what each one covered. Those keys
   still live in the data and still feed search — they just no
   longer need decoding to use the page.

   The contents list and the chip row drive the same `group`
   state, so the editorial table of contents at the top and the
   sticky toolbar further down can never disagree.
   ============================================================ */

type Era = '2026' | '2025' | '2024' | 'earlier';
const eras: Era[] = ['2026', '2025', '2024', 'earlier'];
const eraLabel = (e: Era) => (e === 'earlier' ? 'Before 2024' : e);

const inEra = (e: IndexEntry, era: Era) =>
  era === 'earlier' ? e.yearSort > 0 && e.yearSort < 2024 : e.yearSort === Number(era);

export function CompleteIndex() {
  const [group, setGroup] = useState<IndexGroup | null>(null);
  const [era, setEra] = useState<Era | null>(null);
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const hasHover = useHasHover();
  const reduced = usePrefersReducedMotion();
  const baseId = useId();
  const resultsRef = useRef<HTMLDivElement>(null);
  const typeChipsRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [previewTop, setPreviewTop] = useState(0);

  /* A link of the form /index#entry-P02 opens that record directly, so
     "open the full record" elsewhere on the site lands on the record
     itself rather than on a page the visitor then has to search. */
  useEffect(() => {
    const key = window.location.hash.replace('#entry-', '');
    if (!key || !indexEntries.some((e) => e.key === key)) return;
    setExpanded(key);
    window.setTimeout(() => {
      document
        .getElementById(`entry-${key}`)
        ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    }, 160);
    // Only on mount: later hash changes come from in-page interaction.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* On a phone the type chips scroll sideways, so the selected one can end
     up off-screen. Bring it back into the strip whenever it changes. */
  useEffect(() => {
    typeChipsRef.current
      ?.querySelector('.chip--on')
      ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
  }, [group, reduced]);

  const deferredQuery = useDeferredValue(query);

  const matches = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();

    return (entry: IndexEntry) => {
      if (era && !inEra(entry, era)) return false;
      if (!q) return true;

      // Search covers the activity keys and the group label too, so a
      // visitor typing "leadership" or "speaking" still finds the record.
      return [
        entry.title,
        entry.titleAlt,
        entry.meta,
        entry.year,
        groupMeta[entry.group].label,
        entry.shortDescription,
        entry.detail,
        ...entry.tags,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(q);
    };
  }, [era, deferredQuery]);

  const visibleEntries = useMemo(
    () => (group ? entriesInGroup(group) : indexEntries).filter(matches),
    [group, matches],
  );
  const total = visibleEntries.length;
  const filtered = group !== null || era !== null || query !== '';

  const clear = () => {
    setGroup(null);
    setEra(null);
    setQuery('');
  };

  /* Changing a filter changes how tall the page is, which on its own
     would slide the toolbar out from under the cursor. Every filter
     change therefore parks the toolbar at its pinned position: from the
     contents list that means scrolling down to it, from the chips it
     means staying exactly where it already was. */
  const pinControls = () => {
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  };

  const chooseGroup = (g: IndexGroup | null) => {
    setGroup(g);
    setExpanded(null);
    pinControls();
  };

  const chooseEra = (e: Era | null) => {
    setEra(e);
    setExpanded(null);
    pinControls();
  };

  const previewItem =
    visibleEntries.find((e) => e.key === hovered) ?? visibleEntries.find((e) => e.featuredMedia) ?? null;

  /* The preview used to sit pinned at the top of the column, which meant
     hovering the fortieth row put its photograph somewhere above the
     record you were reading. It now rides down to the row itself, and is
     held inside the list so it never runs past the last entry. */
  useEffect(() => {
    if (!hasHover) return;
    const body = bodyRef.current;
    const row = previewItem ? document.getElementById(`entry-${previewItem.key}`) : null;
    if (!body || !row) {
      setPreviewTop(0);
      return;
    }
    const offset = row.getBoundingClientRect().top - body.getBoundingClientRect().top;
    const panel = previewRef.current?.offsetHeight ?? 0;
    const limit = Math.max(0, body.offsetHeight - panel);
    setPreviewTop(Math.round(Math.min(Math.max(offset, 0), limit)));
  }, [previewItem, hasHover, expanded, visibleEntries]);

  return (
    <div className="cindex">
      {/* ============ TABLE OF CONTENTS ============ */}
      <nav className="toc" aria-label="Index contents">
        <p className="label toc__label">Contents</p>

        <ul className="toc__list">
          {groupOrder.map((g) => {
            const meta = groupMeta[g];
            const on = group === g;
            return (
              <li key={g}>
                <button
                  type="button"
                  className={`tocrow ${on ? 'tocrow--on' : ''}`}
                  aria-pressed={on}
                  onClick={() => chooseGroup(on ? null : g)}
                >
                  <span className="tocrow__title">
                    <MaskReveal>
                      <span>{meta.label}</span>
                    </MaskReveal>
                  </span>
                  <span className="tocrow__blurb">{meta.blurb}</span>
                  <span className="tocrow__count mono">
                    {String(groupCounts[g]).padStart(2, '0')}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ============ CONTROLS ============ */}
      <div className="cindex__controls" ref={resultsRef}>
        <div className="cfilter cfilter--type">
          <span className="label cfilter__legend" id={`${baseId}-type`}>
            Type
          </span>
          <div className="cfilter__chips" role="group" aria-labelledby={`${baseId}-type`} ref={typeChipsRef}>
            <Chip on={group === null} onClick={() => chooseGroup(null)} count={distinctEntryCount}>
              Everything
            </Chip>
            {groupOrder.map((g) => (
              <Chip
                key={g}
                on={group === g}
                onClick={() => chooseGroup(group === g ? null : g)}
                count={groupCounts[g]}
                title={groupMeta[g].label}
              >
                {groupMeta[g].short}
              </Chip>
            ))}
          </div>
        </div>

        <div className="cfilter cfilter--year">
          <span className="label cfilter__legend" id={`${baseId}-era`}>
            Year
          </span>
          <div className="cfilter__chips" role="group" aria-labelledby={`${baseId}-era`}>
            <Chip on={era === null} onClick={() => chooseEra(null)}>
              All years
            </Chip>
            {eras.map((e) => (
              <Chip key={e} on={era === e} onClick={() => chooseEra(era === e ? null : e)}>
                {eraLabel(e)}
              </Chip>
            ))}
          </div>
        </div>

        <div className="cfilter cfilter--search">
          <label className="label cfilter__legend" htmlFor={`${baseId}-search`}>
            Search
          </label>
          <div className="csearch">
            <input
              id={`${baseId}-search`}
              type="search"
              className="csearch__input"
              placeholder="Try “sustainability”, “robotics”, “Coursera”…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            {query !== '' && (
              <button type="button" className="csearch__clear label" onClick={() => setQuery('')}>
                Clear
              </button>
            )}
          </div>
        </div>

        {/* What is currently narrowing the list, and how to undo each part
            of it without hunting back through the chips. */}
        {filtered && (
          <div className="cactive">
            <span className="label cactive__label" role="status" aria-live="polite">
              <span className="label__index">{String(total).padStart(2, '0')}</span>
              {total === 1 ? 'record' : 'records'}
            </span>
            <span className="cactive__pills">
              {group && (
                <FilterPill onClear={() => setGroup(null)}>{groupMeta[group].label}</FilterPill>
              )}
              {era && <FilterPill onClear={() => setEra(null)}>{eraLabel(era)}</FilterPill>}
              {query !== '' && (
                <FilterPill onClear={() => setQuery('')}>“{query}”</FilterPill>
              )}
            </span>
            <button type="button" className="cactive__clear label" onClick={clear}>
              Clear all
            </button>
          </div>
        )}
      </div>

      {!filtered && (
        <p className="cindex__count label">
          <span className="label__index">{distinctEntryCount}</span>
          records in {groupOrder.length} groups
        </p>
      )}

      {/* ============ RESULTS ============ */}
      <div className={`cindex__body ${hasHover ? 'cindex__body--withpreview' : ''}`} ref={bodyRef}>
        {visibleEntries.length > 0 ? (
          <div className="cindex__groups" onMouseLeave={() => setHovered(null)}>
            <section className="cgroup" aria-labelledby={`${baseId}-results`}>
              <header className="cgroup__head">
                <h3 id={`${baseId}-results`} className="cgroup__title">
                  {group ? groupMeta[group].label : 'All experiences'}
                </h3>
                <span className="cgroup__count mono">
                  {String(visibleEntries.length).padStart(2, '0')}
                </span>
              </header>

              <ul className="cindex__rows">
                {visibleEntries.map((entry) => (
                  <Row
                    key={entry.key}
                    entry={entry}
                    open={expanded === entry.key}
                    hovered={hovered === entry.key}
                    hasHover={hasHover}
                    reduced={reduced}
                    panelId={`${baseId}-${entry.key}`}
                    onToggle={() => setExpanded(expanded === entry.key ? null : entry.key)}
                    onHover={() => hasHover && setHovered(entry.key)}
                    onRelated={(key) => {
                      clear();
                      setExpanded(key);
                      window.setTimeout(
                        () =>
                          document.getElementById(`entry-${key}`)?.scrollIntoView({
                            behavior: reduced ? 'auto' : 'smooth',
                            block: 'start',
                          }),
                        100,
                      );
                    }}
                  />
                ))}
              </ul>
            </section>
          </div>
        ) : (
          <div className="cindex__empty">
            <p className="cindex__empty-text">Nothing matches those filters.</p>
            <button type="button" className="textlink" onClick={clear}>
              Clear filters
            </button>
          </div>
        )}

        {hasHover && (
          <div className="cindex__preview" aria-hidden="true">
            <div
              className="cindex__preview-inner"
              ref={previewRef}
              style={{ transform: `translateY(${previewTop}px)` }}
            >
              <AnimatePresence mode="wait">
                {previewItem?.featuredMedia && (
                  <motion.div
                    key={previewItem.key}
                    initial={reduced ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? {} : { opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Figure media={previewItem.featuredMedia} label={previewItem.title} noScale />
                    <p className="cindex__preview-name mono">{previewItem.shortDescription}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   ROW — work-backed rows expand into the full record; writing
   rows link out; everything else expands to its own detail.
   ------------------------------------------------------------ */

interface RowProps {
  entry: IndexEntry;
  open: boolean;
  hovered: boolean;
  hasHover: boolean;
  reduced: boolean;
  panelId: string;
  onToggle: () => void;
  onHover: () => void;
  onRelated: (key: string) => void;
}

function Row({ entry, open, hovered, hasHover, reduced, panelId, onToggle, onHover, onRelated }: RowProps) {
  const rowRef = useRef<HTMLLIElement>(null);
  const expandable = Boolean(
    entry.work ||
      entry.detail ||
      entry.document ||
      entry.documents?.length ||
      entry.images?.length ||
      entry.related?.length,
  );

  /* Opening a row 40 records down should not leave its heading above the
     sticky toolbar. `block: 'nearest'` plus the row's scroll-margin keeps
     the heading in view without moving the page when it already is. */
  const toggle = () => {
    const wasOpen = open;
    onToggle();
    if (wasOpen) return;
    requestAnimationFrame(() => {
      rowRef.current?.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'nearest',
      });
    });
  };

  const inner = (
    <>
      <span className="crow__year mono">{entry.year}</span>
      <span className="crow__title">
        {entry.title}
        {entry.titleAlt && (
          <span className="crow__title-alt" lang="ar">
            {' '}
            | {entry.titleAlt}
          </span>
        )}
      </span>
      <span className="crow__meta">{entry.meta}</span>
      {expandable ? (
        <span className="crow__toggle" aria-hidden="true" />
      ) : entry.href ? (
        <span className="crow__link-arrow" aria-hidden="true">
          ↗
        </span>
      ) : null}
    </>
  );

  return (
    <li
      ref={rowRef}
      id={`entry-${entry.key}`}
      className={`crow ${open ? 'crow--open' : ''} ${hovered ? 'crow--hover' : ''}`}
      onMouseEnter={onHover}
    >
      <h4 className="crow__h">
        {expandable ? (
          <button
            type="button"
            className="crow__trigger"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={toggle}
            onFocus={() => hasHover && onHover()}
          >
            {inner}
          </button>
        ) : entry.href ? (
          <a
            className="crow__trigger"
            href={entry.href}
            target="_blank"
            rel="noreferrer noopener"
            onFocus={() => hasHover && onHover()}
          >
            {inner}
          </a>
        ) : (
          <span className="crow__trigger crow__trigger--static">{inner}</span>
        )}
      </h4>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="crow__panel"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={reduced ? {} : { height: 'auto', opacity: 1 }}
            exit={reduced ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {entry.work ? (
              <>
                {entry.detail && <p className="prose crow__source-note">{entry.detail}</p>}
                {entry.featuredMedia?.src !== entry.work.featuredMedia?.src && entry.featuredMedia && (
                  <Figure media={entry.featuredMedia} label={entry.title} className="crow__entry-photo" />
                )}
                <RelatedLinks links={entry.related} onRelated={onRelated} />
                <WorkRecord item={entry.work} />
              </>
            ) : (
              <div className="crow__detail">
                {entry.detail && (
                  <div className="prose">
                    <p>{entry.detail}</p>
                    {entry.body?.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                )}
                <BulletBlock label="What I did" lines={entry.did} />
                <BulletBlock label="What it covered" lines={entry.learned} />
                {entry.result && <p className="crow__result">{entry.result}</p>}
                {/* A certificate's preview image IS its first page, so showing
                    the figure as well as the document viewer would print it
                    twice. */}
                {entry.featuredMedia && !entry.images?.length && !entry.document && (
                  <Figure media={entry.featuredMedia} label={entry.title} className="crow__entry-photo" />
                )}
                {entry.images && entry.images.length === 4 ? (
                  <div className="crow__media-grid">
                    {entry.images.map((media) => (
                      <Figure key={media.src} media={media} label={entry.title} className="crow__entry-photo" />
                    ))}
                  </div>
                ) : (
                  entry.images?.map((media) => (
                    <Figure key={media.src} media={media} label={entry.title} className="crow__entry-photo" />
                  ))
                )}
                {entry.document && (
                  <DocumentViewer
                    document={{ src: entry.document, label: `${entry.title} certificate`, pages: 1 }}
                  />
                )}
                {entry.documents?.map((document) => (
                  <DocumentViewer key={document.src} document={document} />
                ))}
                <RelatedLinks links={entry.related} onRelated={onRelated} />
                {entry.href && (
                  <a className="textlink" href={entry.href} target="_blank" rel="noreferrer noopener">
                    {entry.hrefLabel ?? 'Read it'}
                    <span className="textlink__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            )}
            <button type="button" className="crow__collapse label" onClick={toggle}>
              Collapse <span aria-hidden="true">↑</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function BulletBlock({ label, lines }: { label: string; lines?: string[] }) {
  if (!lines?.length) return null;
  return (
    <div className="crow__learned">
      <span className="label">{label}</span>
      <ul className="crow__learned-list">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function RelatedLinks({ links, onRelated }: { links?: IndexEntry['related']; onRelated: (key: string) => void }) {
  if (!links?.length) return null;
  return (
    <div className="crow__related">
      <span className="label">Related work</span>
      {links.map(({ label, key }) => (
        <button type="button" key={key} className="textlink" onClick={() => onRelated(key)}>
          {label} ↗
        </button>
      ))}
    </div>
  );
}

function FilterPill({ children, onClear }: { children: React.ReactNode; onClear: () => void }) {
  return (
    <span className="fpill">
      <span className="fpill__text">{children}</span>
      <button type="button" className="fpill__x" onClick={onClear}>
        <span className="sr-only">Remove this filter</span>
        <span aria-hidden="true">×</span>
      </button>
    </span>
  );
}

function Chip({
  children,
  on,
  onClick,
  count,
  title,
}: {
  children: React.ReactNode;
  on: boolean;
  onClick: () => void;
  count?: number;
  title?: string;
}) {
  return (
    <button
      type="button"
      className={`chip ${on ? 'chip--on' : ''}`}
      aria-pressed={on}
      onClick={onClick}
      title={title}
    >
      {children}
      {count !== undefined && <span className="chip__count">{count}</span>}
    </button>
  );
}
