/** Prefix public asset paths with Vite's base (needed for GitHub Pages). */
export function asset(path) {
  const clean = String(path).replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
