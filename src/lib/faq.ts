export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "account",
    question: "Does Stashin need an account?",
    answer:
      "No. Stashin never asks you to sign up, and there is no Stashin login. Your stash lives in a SQLite database on your phone. Google is involved only if you choose Drive backup, and Google Play is involved only if you buy Stashin Pro.",
  },
  {
    id: "tracking",
    question: "Do you track what I save?",
    answer:
      "No. Stashin ships with zero third-party analytics SDKs, zero ad networks, and zero telemetry or crash-reporting servers. The developer cannot see your links, notes, screenshots, or searches.",
  },
  {
    id: "storage",
    question: "Where is my data stored?",
    answer:
      "On the device. Titles, notes, URLs, folders, tags, favorites, and offline OCR text sit in a local SQLite database. Images you import are stored as local media files. Nothing is uploaded unless you export a file yourself or explicitly start a Google Drive backup.",
  },
  {
    id: "duplicates",
    question: "How does Smart Duplicate Detection work?",
    answer:
      "Before a link is saved, Stashin canonicalizes it. x.com and twitter.com are treated as the same post, and youtu.be and youtube.com are treated as the same video. Tracking parameters such as utm_*, igsh, and fbclid are stripped. If that canonical URL is already in your stash, Stashin warns you before saving a duplicate.",
  },
  {
    id: "pro",
    question: "What does Stashin Pro unlock?",
    answer:
      "Pro removes the free-tier caps: unlimited folders, nested subfolders, pinned folders, all 18 palettes plus a custom hex picker, all 226 icons, unlimited tags and gallery imports, bulk actions, advanced filters, offline OCR search, biometric locked folders, and private Google Drive backup with one-tap restore.",
  },
  {
    id: "trial",
    question: "How does the 7-day free trial work?",
    answer:
      "The yearly plan is $14.99 / year and includes a 7-day free trial for eligible Google Play accounts. Unless you cancel at least 24 hours before the trial ends, Google Play bills $14.99 and renews the year. The $1.99 monthly plan can be canceled anytime and does not include that trial. The $29.99 Lifetime Founder's Pass is charged once.",
  },
  {
    id: "drive",
    question: "What can the Google Drive backup see?",
    answer:
      "Only the scope https://www.googleapis.com/auth/drive.appdata, and only after you tap backup or restore in Settings. The archive is stored in the hidden appDataFolder on your own Google account, encrypted in transit with HTTPS/TLS. It is never sent to a Stashin server, and only your Google account can access it.",
  },
  {
    id: "biometrics",
    question: "Does the private lock store my fingerprint or face?",
    answer:
      "No. The lock uses expo-local-authentication, which calls Android BiometricPrompt. Authentication runs strictly on-device through Android. Stashin only receives success or failure. Biometric templates are never read or stored by the app.",
  },
  {
    id: "delete",
    question: "How do I delete my data?",
    answer:
      "Uninstalling Stashin removes the local database and media. Clear All Data in Settings wipes the stash without uninstalling. Export a local JSON or ZIP first if you want a copy. A Google Drive backup is separate: delete it from Stashin or from your Google Account’s third-party app access. We have no server copy to erase, because we never receive one.",
  },
  {
    id: "extension",
    question: "Is the browser extension available?",
    answer:
      "Not yet. The Stashin Browser Extension is coming next, starting with Google Chrome, followed by Microsoft Edge, Mozilla Firefox, and Safari / Brave.",
  },
  {
    id: "refunds",
    question: "How do refunds work?",
    answer:
      "Stashin Pro is billed by Google Play, not by Stashin directly. Refund requests follow Google Play’s refund policies from your order history. If a refund is granted, the stashin_pro entitlement may be revoked. Deleting the app does not cancel a subscription.",
  },
];
