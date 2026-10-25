export const MONTHLY_USD = 1.99;
export const YEARLY_USD = 14.99;
export const LIFETIME_USD = 29.99;

/** Percent saved versus twelve monthly payments, rounded to the nearest integer. */
export function yearlySavingsPercent(
  monthly = MONTHLY_USD,
  yearly = YEARLY_USD,
) {
  const fullYear = monthly * 12;
  return Math.round((1 - yearly / fullYear) * 100);
}

export const freeFeatures = [
  "Unlimited saved links, notes & images",
  "Native Share Sheet quick-save",
  "Smart Duplicate URL Detection",
  "Full-text search & Favorites",
  "Up to 5 custom folders (plus Unsorted)",
  "1 Pinned folder",
  "6 folder color presets & 24 folder icons",
  "Up to 3 tags per item",
  "Up to 3 photos per gallery batch import",
  "Local JSON & ZIP backup export",
  "Home screen widget",
] as const;

export const proFeatures = [
  "Unlimited folders & nested subfolders",
  "Unlimited pinned folders",
  "All 18 color palettes + custom hex color picker",
  "All 226 curated icons + custom emoji/monogram",
  "Unlimited tags per item",
  "Unlimited gallery batch import",
  "Bulk select, move, tag, and delete",
  "Advanced filters (platform, date range, multi-tag)",
  "Offline OCR text search inside images",
  "Biometric Private Vault & locked folders",
  "Private Google Drive cloud backup & 1-tap restore",
] as const;

export type PriceTier = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  detail: string;
  popular?: boolean;
};

export const proTiers: PriceTier[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$1.99",
    cadence: "/ month",
    detail: "Cancel anytime",
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "$14.99",
    cadence: "/ year",
    detail: "Save 37% · Includes 7-Day Free Trial",
    popular: true,
  },
  {
    id: "lifetime",
    name: "Lifetime Founder's Pass",
    price: "$29.99",
    cadence: "one-time",
    detail: "Pay once, own Stashin Pro forever",
  },
];
