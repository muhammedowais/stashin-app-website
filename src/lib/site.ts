export const site = {
  name: "Stashin",
  domain: "stashin.app",
  url: "https://stashin.app",
  packageName: "com.mowaisumer.stashin",
  developer: "Muhammed Owais",
  version: "1.0",
  supportEmail: "support@stashin.app",
  privacyEmail: "privacy@stashin.app",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.mowaisumer.stashin",
  driveScope: "https://www.googleapis.com/auth/drive.appdata",
  entitlement: "stashin_pro",
  updated: "October 25, 2026",
  updatedIso: "2026-10-25",
  appStoreUrl: "https://apps.apple.com/search?term=Stashin",
  socials: {
    x: "https://x.com/stashinapp",
    youtube: "https://www.youtube.com/@stashinapp",
    instagram: "https://www.instagram.com/stashinapp",
  },
  description:
    "Save notes, links, ideas, and more in one simple app. Stashin stays private, works offline, and never shows ads.",
} as const;

export const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#plans", label: "Plans" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function mailto(email: string, subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${query}`;
}
