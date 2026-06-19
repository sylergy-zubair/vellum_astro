/* Curated Unsplash photography. License-clear (Unsplash License).
   Each photo is a stable slug with deterministic CDN params.
   All photos are duotone-tinted into the Chancery green palette in CSS. */

type PhotoSlot = {
  id: string;            // Unsplash photo ID
  alt: string;           // Descriptive alt text
  /* Optional: subject hint, not displayed. */
  subject: string;
};

/* Stable Unsplash IDs. If any ever 404, swap the ID — the panel will
   fall back to --paper-2 via the layered background-image CSS. */
export const photos: Record<string, PhotoSlot> = {
  /* UK terraced housing exterior. North-London-style brick row. */
  heroBg: {
    id: "photo-1568605114967-8130f3a36994",
    alt: "UK terraced housing exterior at street level",
    subject: "UK terraced housing",
  },
  /* Period office interior, wood and paperwork. */
  featureUnified: {
    id: "photo-1497366216548-37526070297c",
    alt: "Period office interior with wooden desk and paperwork",
    subject: "Period agency office",
  },
  /* Modern bright workspace, laptop on a light desk. */
  featureCloud: {
    id: "photo-1497366811353-6870744d04b2",
    alt: "Modern bright workspace with a laptop on a light desk",
    subject: "Modern workspace",
  },
  /* Rooftops from above, dusk light. */
  stripRooftops: {
    id: "photo-1480714378408-67cf0d13bc1b",
    alt: "UK rooftops viewed from above at dusk",
    subject: "UK rooftops at dusk",
  },
};

/* Unsplash CDN URL builder. ?w caps width, q is quality, fm=webp is format,
   auto=format lets the CDN serve AVIF to supporting browsers. */
export function unsplashUrl(id: string, width: number, quality = 75): string {
  return `https://images.unsplash.com/${id}?w=${width}&q=${quality}&auto=format&fit=crop`;
}
