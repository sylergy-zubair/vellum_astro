/* Plausible loader — privacy-first, no cookies, no fingerprinting.
   Loads only if PLAUSIBLE_DOMAIN is set. */
export function plausibleScript(domain: string | undefined): string | null {
  if (!domain) return null;
  return `https://plausible.io/js/script.js`;
}
export const plausibleAttrs = (domain: string | undefined) =>
  domain ? { "data-domain": domain, defer: true, src: `https://plausible.io/js/script.js` } : null;
