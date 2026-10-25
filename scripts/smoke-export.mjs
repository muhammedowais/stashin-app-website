import { existsSync, readFileSync } from "node:fs";

const checks = [
  {
    file: "out/index.html",
    needles: [
      "A quiet, private place for",
      "everything",
      "100% Private",
      "Google Play",
      "App Store",
      "Tap, Note, Share",
      "Smart Duplicate Guard",
      "Biometric Private Lock",
      "Fairly Useful Archiving",
      "Simple plans. More freedom.",
      "$1.99",
      "$14.99",
      "$29.99",
      "Save 37%",
      "Most Popular",
      "Your privacy matters.",
      "Keep what matters.",
      "https://stashin.app",
      "summary_large_image",
    ],
  },
  {
    file: "out/privacy/index.html",
    needles: [
      "Privacy Policy",
      "com.mowaisumer.stashin",
      "drive.appdata",
      "appDataFolder",
      "Limited Use",
      "expo-local-authentication",
      "BiometricPrompt",
      "RevenueCat",
      "stashin_pro",
      "Clear All Data",
      "https://stashin.app/privacy/",
    ],
  },
  {
    file: "out/terms/index.html",
    needles: [
      "Terms of Service",
      "$1.99",
      "$14.99",
      "$29.99",
      "7-day free trial",
      "Limitation of liability",
      "Intellectual property",
      "local-first",
      "https://stashin.app/terms/",
    ],
  },
  {
    file: "out/download/index.html",
    needles: ["Direct APK", "com.mowaisumer.stashin", "Google Play"],
  },
  {
    file: "out/sitemap.xml",
    needles: ["https://stashin.app/", "https://stashin.app/privacy/", "https://stashin.app/terms/"],
  },
  {
    file: "out/robots.txt",
    needles: ["Sitemap: https://stashin.app/sitemap.xml"],
  },
];

let failed = false;

for (const check of checks) {
  if (!existsSync(check.file)) {
    console.error(`Missing ${check.file}. Run npm run build first.`);
    failed = true;
    continue;
  }
  const html = readFileSync(check.file, "utf8");
  for (const needle of check.needles) {
    if (!html.includes(needle)) {
      console.error(`${check.file} is missing: ${needle}`);
      failed = true;
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log(`Smoke check passed for ${checks.length} exported files.`);
