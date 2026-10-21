/**
 * Prefixes a path from /public with the deployment's base URL.
 *
 * Vite rewrites absolute paths it can see — in index.html and in CSS url() —
 * but paths written as plain strings in the data files are invisible to it.
 * On a root deployment BASE_URL is "/" and this is a no-op; under a GitHub
 * Pages project site it becomes "/<repo>/" and every image would otherwise
 * 404.
 */
export function asset(path: string): string {
  if (!path) return path;
  // Already a full URL (http:, data:, blob:) — leave it alone.
  if (/^[a-z]+:/i.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return path;
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
