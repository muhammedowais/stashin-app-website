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
  description:
    "Stashin is the quiet, private place for everything you save on Android. One tap from Instagram, X, YouTube, or Chrome into pastel folders. On-device SQLite, zero tracking, no account.",
} as const;

export const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#privacy-promise", label: "Privacy Promise" },
  { href: "/#pricing", label: "Stashin Pro" },
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy/", label: "Privacy Policy" },
] as const;

export function mailto(email: string, subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${query}`;
}
