import type { LegalSection } from "./legal";
import { site } from "./site";

export const privacySections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    blocks: [
      {
        type: "p",
        text: `This Privacy Policy describes Stashin, the Android application published as package ${site.packageName}, and the website ${site.url}. Stashin is developed by ${site.developer} (“we”, “us”). Stashin is a local-first place to save links, notes, and images on your phone.`,
      },
      {
        type: "p",
        text: `This policy is written so it can be read beside the Google Play Data safety form and a Google OAuth verification review for the scope ${site.driveScope}. It covers the app and this website. The website is a static marketing and legal site. It does not host your stash and it does not set analytics cookies.`,
      },
      {
        type: "p",
        text: `Effective date: ${site.updated}.`,
      },
    ],
  },
  {
    id: "short-version",
    heading: "The short version",
    blocks: [
      {
        type: "callout",
        tone: "sage",
        title: "No accounts. No trackers. No developer server for your stash.",
        text: "Stashin requires no user accounts. It includes zero third-party analytics SDKs, zero ad networks, and zero telemetry or crash-tracking servers. Your saves stay in on-device storage unless you export them or explicitly turn on Google Drive backup.",
      },
      {
        type: "ul",
        items: [
          "No Stashin account, email, or password is required to use the app.",
          "We do not operate an analytics, advertising, or crash-reporting backend.",
          "Saved links, notes, and images are stored on your device.",
          "Google Drive backup is optional, Pro-only, and starts only when you ask for it.",
          "We cannot read a backup, because it never reaches a server we control.",
        ],
      },
    ],
  },
  {
    id: "what-we-do-not-collect",
    heading: "Information we do not collect",
    blocks: [
      {
        type: "p",
        text: "Stashin is built so the developer does not receive a copy of what you save. We do not collect, and the app is not instrumented to send us:",
      },
      {
        type: "ul",
        items: [
          "Account identifiers, names, email addresses, or phone numbers for a Stashin profile. There are no user accounts.",
          "The contents of your stash: links, titles, notes, folders, tags, screenshots, or search queries.",
          "Precise or coarse location.",
          "Contacts, SMS, call logs, or microphone audio.",
          "Advertising identifiers used for ads. There are zero ad networks.",
          "Analytics events. There are zero third-party analytics SDKs.",
          "Crash dumps or performance traces sent to a telemetry or crash-tracking server.",
          "A developer-side copy of your Google Drive files.",
        ],
      },
    ],
  },
  {
    id: "on-device",
    heading: "On-device storage",
    blocks: [
      {
        type: "p",
        text: "Stashin stores your library in local on-device storage. A SQLite database holds saved links, notes, titles, folder structure, tags, favorites, pin state, and any offline OCR text you generate. Images you import from the gallery, the share sheet, or a screenshot flow are stored as local media files in the app’s private storage.",
      },
      {
        type: "p",
        text: "That database and those files remain on the device. They are not transmitted to Muhammed Owais, to a Stashin server, or to an analytics vendor as part of normal use. Android’s own backup of app storage, if you have enabled it in system settings, is controlled by your device and your Google account, not by a Stashin server.",
      },
      {
        type: "p",
        text: "You can make your own copy at any time. Stashin can export a local JSON file and a ZIP archive to a location you choose on the device. The export is created locally. We do not receive the file.",
      },
    ],
  },
  {
    id: "google-drive",
    heading: "Google Drive backup and Google user data",
    blocks: [
      {
        type: "callout",
        tone: "peach",
        title: "Google Drive Backup & Google User Data Disclosure",
        text: `Stashin requests ${site.driveScope} solely when you explicitly initiate backup or restore in Settings. Data is stored only in the private hidden appDataFolder on your own Google Drive, encrypted in transit via HTTPS/TLS, and never accessed by or transmitted to any developer server.`,
      },
      {
        type: "p",
        text: "Google Drive backup is an optional Stashin Pro feature. It is off until you open Settings and choose to back up or restore. Connecting Google is not required to save links, use folders, or search on the device.",
      },
      {
        type: "subhead",
        text: "The scope we request",
      },
      {
        type: "p",
        text: `When you start a backup or restore, Stashin requests this OAuth scope and no broader Google Drive scope: ${site.driveScope}. The scope lets an app view and manage only the configuration data that the app itself creates in the user’s Google Drive. It does not grant Stashin permission to read your documents, photos, Gmail, or the rest of your Drive.`,
      },
      {
        type: "subhead",
        text: "Where the backup lives",
      },
      {
        type: "p",
        text: "The backup archive is written only to the hidden appDataFolder on your own Google account. Google does not show that folder in the normal Drive file list. It is private to your Google account and to Stashin’s client. The archive can include the stash you chose to back up: links, notes, folders, tags, and the media included in that backup.",
      },
      {
        type: "subhead",
        text: "Who can access it",
      },
      {
        type: "p",
        text: "Only your own Google account can access that appDataFolder through Google. The backup is never accessed by or transmitted to any developer server. Muhammed Owais does not receive, store, index, or review the contents. There is no Stashin cloud that holds a second copy.",
      },
      {
        type: "subhead",
        text: "Encryption in transit",
      },
      {
        type: "p",
        text: "Traffic between the app and Google is encrypted in transit via HTTPS/TLS. Stashin uses Google’s official APIs for this scope. We do not proxy the upload through our own infrastructure, because we do not operate one for user content.",
      },
      {
        type: "subhead",
        text: "When it runs",
      },
      {
        type: "p",
        text: "Backup and restore run when you explicitly initiate them in Settings. Stashin does not silently start a first-time upload. Restore replaces or merges into the local stash only after you ask for a restore. Read the on-screen confirmation in Settings before you continue.",
      },
      {
        type: "subhead",
        text: "How to disconnect or delete the Drive copy",
      },
      {
        type: "p",
        text: "You can delete the Google Drive backup from Stashin Settings, or remove Stashin’s access from your Google Account (Data & privacy → Third-party apps & services) and delete the app’s hidden Drive data from Google Drive settings. Uninstalling Stashin removes local data, but it does not by itself delete the copy in your appDataFolder. Delete that copy separately if you want it gone.",
      },
    ],
  },
  {
    id: "limited-use",
    heading: "Google API Services User Data Policy and Limited Use",
    blocks: [
      {
        type: "p",
        text: "Stashin’s use and transfer of information received from Google APIs adheres to the [[Google API Services User Data Policy|https://developers.google.com/terms/api-services-user-data-policy]], including the Limited Use requirements.",
      },
      {
        type: "ul",
        items: [
          "Stashin uses Google user data only to provide the backup and restore feature you explicitly initiated in Settings.",
          "Stashin does not use Google user data to serve advertisements, and it does not sell Google user data.",
          "Stashin does not allow humans to read Google user data unless you give affirmative agreement, it is necessary for security, it is required to comply with applicable law, or the use is otherwise permitted by the Limited Use rules. In ordinary operation no person reads this data, because it is never transmitted to any developer server.",
          "Stashin does not transfer Google user data to third parties, except to Google as required to store the backup in your own Drive, or if required for security or by law. RevenueCat and Google Play are not given the contents of a Drive backup.",
          "Stashin does not use Google user data to determine creditworthiness or for lending.",
          "Stashin does not use Google user data, including backup contents, to develop, improve, or train generalized or non-personalized machine-learning or artificial-intelligence models.",
        ],
      },
      {
        type: "p",
        text: "The app’s OAuth consent screen should show the same limited purpose: private backup and restore of your Stashin library into your own Drive appDataFolder.",
      },
    ],
  },
  {
    id: "biometrics",
    heading: "Biometric authentication",
    blocks: [
      {
        type: "p",
        text: "Stashin Pro can lock sensitive folders and the private vault behind the device’s fingerprint or face unlock. The app uses expo-local-authentication, which invokes Android BiometricPrompt.",
      },
      {
        type: "p",
        text: "Authentication runs strictly on-device via the Android operating system. Biometric templates are never read or stored by Stashin. The app does not receive your fingerprint image, face geometry, or any biometric identifier. Android returns only a success or failure result. Templates remain in the secure hardware and OS-managed storage that Android already uses for device unlock.",
      },
      {
        type: "p",
        text: "If biometrics are unavailable, Android may offer the device credential (PIN, pattern, or password) through the same system prompt. Stashin does not collect that credential either. You can leave the private lock off. The rest of the app does not require it.",
      },
    ],
  },
  {
    id: "purchases",
    heading: "In-app purchases and Stashin Pro",
    blocks: [
      {
        type: "p",
        text: `Stashin Free does not require payment. Stashin Pro is sold through Google Play Billing at $1.99 per month, $14.99 per year with a 7-day free trial, or a one-time Founder's Lifetime Pass at $29.99. The product entitlement is named ${site.entitlement}.`,
      },
      {
        type: "p",
        text: `Purchases are handled via Google Play Billing. Stashin uses RevenueCat with anonymous app user IDs solely for verifying ${site.entitlement} entitlements. That anonymous ID is generated for the install. It is not your name, email address, or the contents of your stash. It is not a Stashin account.`,
      },
      {
        type: "p",
        text: "Google Play processes payment. Stashin does not receive your full payment card number. Google may process purchase tokens, country, price, and subscription state under Google’s own terms. RevenueCat receives the anonymous app user ID, product identifiers, and entitlement status so the app can tell whether Pro is active. RevenueCat is not used as an analytics SDK for the content you save, and it is not an ad network.",
      },
      {
        type: "p",
        text: "Their policies sit outside this document: [[Google Play Terms of Service|https://play.google.com/about/play-terms/]] and [[RevenueCat’s privacy policy|https://www.revenuecat.com/privacy]]. You can manage or cancel a subscription in Google Play. Deleting Stashin does not cancel a Play subscription.",
      },
    ],
  },
  {
    id: "permissions",
    heading: "Android permissions",
    blocks: [
      {
        type: "p",
        text: "Stashin requests only what a feature needs:",
      },
      {
        type: "ul",
        items: [
          "Internet — to open links you tap, to reach Google Play Billing, and, only if you start it, to reach Google Drive.",
          "Biometric — only if you turn on the private lock. The prompt is Android’s, via expo-local-authentication and BiometricPrompt.",
          "Photos — the system photo picker so you can import images you select. Stashin does not need ongoing access to your entire camera roll.",
          "Share sheet — Android lets other apps hand a link or image to Stashin. That transfer stays on the device.",
        ],
      },
      {
        type: "p",
        text: "Stashin does not request precise location, contacts, SMS, phone state, or microphone access.",
      },
    ],
  },
  {
    id: "sharing",
    heading: "How information is shared",
    blocks: [
      {
        type: "p",
        text: "We do not sell personal information. We do not share the contents of your stash with advertisers or data brokers. There is no Stashin account database to share.",
      },
      {
        type: "ul",
        items: [
          "Google Drive — only the backup you initiate, stored in your own appDataFolder, under the drive.appdata scope.",
          "Google Play — purchase and entitlement records for Stashin Pro, under Google’s policies.",
          "RevenueCat — anonymous app user IDs and entitlement status for stashin_pro, not your saved content.",
          "No one else — we do not operate analytics, ads, or crash-reporting processors for the app.",
        ],
      },
      {
        type: "p",
        text: "We may disclose information if the law requires it. Because saved content is not transmitted to a developer server, we would not have your stash to hand over. Purchase records, if any, are held by Google Play and, for entitlement status, by RevenueCat.",
      },
    ],
  },
  {
    id: "data-safety",
    heading: "Play Data safety summary",
    blocks: [
      {
        type: "p",
        text: "This table is the practical mapping we intend the Google Play Data safety form to reflect. “Collected” here means transmitted off the device to the developer. Stashin does not do that for stash content.",
      },
      {
        type: "ul",
        items: [
          "Saved links, notes, folders, tags, favorites — stored in on-device SQLite. Not collected by Stashin. Shared only if you include them in a backup to your own Google Drive appDataFolder.",
          "Images and screenshots you import — stored as local media files. Not collected by Stashin. Shared only if you include them in that same backup.",
          "Offline OCR text — stored in on-device SQLite when you use the Pro search feature. Not collected by Stashin.",
          "Biometric templates — stay inside Android. Never read or stored by Stashin. Not shared.",
          "Purchase data — handled by Google Play Billing. Anonymous app user IDs go to RevenueCat solely to verify stashin_pro. Stashin does not receive your card number.",
          "Diagnostics, crash logs, advertising ID — not collected. Zero telemetry and crash-tracking servers. Zero ad networks. Zero third-party analytics SDKs.",
        ],
      },
      {
        type: "p",
        text: "Data is encrypted in transit via HTTPS/TLS when the app talks to Google Play, RevenueCat, or Google Drive. You can delete local data yourself. See “Deletion and your controls” below.",
      },
    ],
  },
  {
    id: "retention",
    heading: "Data retention",
    blocks: [
      {
        type: "p",
        text: "Local data stays on the device until you delete an item, use Clear All Data, clear the app’s storage in Android settings, or uninstall Stashin. We do not keep a retention clock on a server, because we do not hold that data.",
      },
      {
        type: "p",
        text: "A Drive backup remains in your appDataFolder until you delete it. A Google Play purchase record is retained by Google under Google’s policies. RevenueCat retains the anonymous entitlement record under its policy so a reinstall can restore Pro. You may request deletion of that anonymous RevenueCat record by emailing us. Include any purchase reference Google Play gives you. We will pass the request to RevenueCat and confirm when it is done.",
      },
    ],
  },
  {
    id: "deletion",
    heading: "Deletion and your controls",
    blocks: [
      {
        type: "p",
        text: "You are in control of the stash. You can:",
      },
      {
        type: "ul",
        items: [
          "Delete individual saves, folders, or tags inside the app.",
          "Export a local JSON or ZIP copy before you wipe anything.",
          "Use Clear All Data in Settings to erase the local SQLite database and local media files without uninstalling.",
          "Uninstall Stashin. Android removes the app’s local storage, including the SQLite database and local media files.",
          "Delete the Google Drive backup from Stashin, or from Google Drive settings / your Google Account’s third-party access, so the hidden appDataFolder copy is removed.",
          "Cancel Stashin Pro in Google Play subscriptions. Cancellation stops renewal. It does not delete local saves.",
          "Request deletion of the anonymous RevenueCat entitlement record by email.",
        ],
      },
      {
        type: "p",
        text: "Because there is no Stashin account and no developer copy of your library, uninstalling and deleting the Drive backup is the complete deletion path for saved content.",
      },
    ],
  },
  {
    id: "children",
    heading: "Children",
    blocks: [
      {
        type: "p",
        text: "Stashin is not directed at children under 13, and we do not knowingly collect personal information from children. The app has no account signup that a child could complete with us. If you believe a child has sent personal information to us in an email, contact us and we will delete that correspondence.",
      },
    ],
  },
  {
    id: "security",
    heading: "Security",
    blocks: [
      {
        type: "p",
        text: "Your device lock screen is the first line of defense for a local-first app. Optional biometric folder locks add a second prompt, still enforced by Android. Drive backup and Play Billing use HTTPS/TLS. No method of storage or transmission is perfectly secure. Keep your device updated, and export a backup you control if the library matters.",
      },
    ],
  },
  {
    id: "international",
    heading: "International users",
    blocks: [
      {
        type: "p",
        text: "Stashin does not transfer your saved content to a developer server in any country. If you use Google Drive backup, Google Play, or RevenueCat, those companies process data under their own terms and may store it in the countries where they operate. Your local SQLite database stays on the phone.",
      },
      {
        type: "p",
        text: "If the laws of your country give you access, correction, deletion, or portability rights, you can exercise them directly: the data is on your device, export is built in, and deletion is described above. For the anonymous purchase record, email us.",
      },
    ],
  },
  {
    id: "website",
    heading: "This website",
    blocks: [
      {
        type: "p",
        text: `${site.url} is a static site. It does not require an account, does not embed third-party analytics, and does not use advertising cookies. Pages you request are served as ordinary files by the host. If you email ${site.privacyEmail} or ${site.supportEmail}, we receive whatever you put in that message and use it only to answer you. Do not send the contents of your stash unless you want us to see that specific email.`,
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    blocks: [
      {
        type: "p",
        text: `If we change how Stashin handles information, we will update this page and the effective date. The current version is dated ${site.updated}. Continued use of the app after the updated date means you have the new policy available inside the product’s store listing and at ${site.url}/privacy/.`,
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    blocks: [
      {
        type: "p",
        text: `Privacy questions and deletion requests for the anonymous entitlement record: [[${site.privacyEmail}|mailto:${site.privacyEmail}]]. Other product questions: [[${site.supportEmail}|mailto:${site.supportEmail}]].`,
      },
      {
        type: "p",
        text: `Developer: ${site.developer}. App: Stashin. Package: ${site.packageName}. Website: ${site.url}.`,
      },
    ],
  },
];
