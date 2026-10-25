import type { LegalSection } from "./legal";
import { site } from "./site";

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    heading: "Agreement",
    blocks: [
      {
        type: "p",
        text: `These Terms of Service are an agreement between you and ${site.developer} (“we”, “us”), the developer of Stashin, for the Android app published as ${site.packageName} and the website ${site.url}. By installing Stashin, tapping agree where a store asks you to, or using the app or this website, you accept these terms. If you do not accept them, do not use Stashin.`,
      },
      {
        type: "p",
        text: `Effective date: ${site.updated}.`,
      },
    ],
  },
  {
    id: "the-product",
    heading: "The product",
    blocks: [
      {
        type: "p",
        text: "Stashin is a local-first Android application for saving links, notes, and images into folders on your phone. The free tier is usable without payment and without an account. Stashin Pro adds the larger organization, OCR, biometric lock, and optional Google Drive backup features described on the website and inside the app.",
      },
      {
        type: "p",
        text: "A browser extension is not part of the app you install today. The public roadmap starts with Google Chrome and later Microsoft Edge, Mozilla Firefox, and Safari / Brave. Roadmap notes are plans, not a promise that a given browser ships on a given date.",
      },
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility",
    blocks: [
      {
        type: "p",
        text: "You must be able to form a binding contract where you live, or use Stashin with a parent or guardian who can. Stashin is not directed at children under 13. You are responsible for complying with the Google Play terms that apply to your account, and with the laws that apply to the content you choose to save.",
      },
    ],
  },
  {
    id: "license",
    heading: "License",
    blocks: [
      {
        type: "p",
        text: "Stashin is licensed, not sold. We grant you a personal, limited, non-exclusive, non-transferable, revocable license to install and use the app on Android devices you own or control, for your own use, under these terms and the Google Play terms.",
      },
      {
        type: "p",
        text: "You may not copy the app except for a personal backup of the install file where the law allows it, rent it, sell it, sublicense it, or use it to offer a competing hosted service. You may not reverse engineer, decompile, or attempt to extract source code except where a statute forbids that limit. You may not remove copyright or trademark notices, or imply that we endorse you.",
      },
    ],
  },
  {
    id: "your-content",
    heading: "Your content and local-first responsibility",
    blocks: [
      {
        type: "callout",
        tone: "sand",
        title: "Your phone holds the library. We do not.",
        text: "Stashin is local-first. You are responsible for the links, notes, and images you save, and for keeping a copy if you need one. We cannot restore a stash from a developer server, because your content is not transmitted to one.",
      },
      {
        type: "p",
        text: "You keep all rights you already have in the content you save. Saving a webpage, post, video link, or image into Stashin does not transfer that work’s copyright to you or to us. You are responsible for deciding whether you may keep a copy under the law that applies to you and under the terms of the site the content came from.",
      },
      {
        type: "p",
        text: "We do not review, host, or moderate the contents of your stash. We do not claim ownership of it. Because it stays on your device unless you export it or back it up to your own Google Drive, we generally never see it.",
      },
    ],
  },
  {
    id: "backups",
    heading: "Backups",
    blocks: [
      {
        type: "p",
        text: "Local JSON and ZIP export is available so you can keep a copy in a place you choose. That export is created on the device. Optional Google Drive backup, for Stashin Pro, writes an archive only to the hidden appDataFolder on the Google account you connect, and only after you start backup or restore in Settings. Details are in the [[Privacy Policy|/privacy/]].",
      },
      {
        type: "p",
        text: "You are responsible for making backups that matter to you. If you uninstall Stashin, clear app storage, use Clear All Data, or lose the device without an export or a Drive backup you created, the local library is gone. We cannot recover it for you. Drive restore depends on Google and on the archive still existing in your account. Test a restore if the library is important.",
      },
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    blocks: [
      {
        type: "p",
        text: "Use Stashin only in a lawful way. You agree not to:",
      },
      {
        type: "ul",
        items: [
          "Break the law, or encourage others to, using the app.",
          "Infringe someone else’s intellectual property or privacy in a way the law does not allow.",
          "Probe, disrupt, or overload Google Play, Google Drive, or the app’s purchase flow.",
          "Circumvent Play Billing, share paid entitlements as a commercial resale scheme, or falsify purchase receipts.",
          "Misrepresent Stashin, the developer, or an affiliation with Google.",
          "Use the app to distribute malware. Stashin does not ask you to sideload unknown packages as a condition of the free tier.",
        ],
      },
    ],
  },
  {
    id: "pro",
    heading: "Stashin Pro and the Lifetime Pass",
    blocks: [
      {
        type: "p",
        text: "Stashin Free remains free. Stashin Pro is optional and is sold only through Google Play. Prices shown on this website are in US dollars. Google Play displays the price and any tax that apply in your country, and that store price is the one you pay.",
      },
      {
        type: "ul",
        items: [
          "Monthly: $1.99 / month. The plan renews each month until you cancel. You can cancel anytime in Google Play subscriptions. Cancellation takes effect at the end of the current period.",
          "Yearly: $14.99 / year. This is the most popular plan and saves 37% compared with twelve monthly payments. It includes a 7-day free trial for eligible Google Play accounts, as described below. The plan renews each year until you cancel.",
          "Lifetime Founder's Pass: $29.99 one-time. You pay once and own Stashin Pro for that Google Play account for the lifetime of the product, without a recurring charge. It is not a subscription and it does not renew.",
        ],
      },
      {
        type: "p",
        text: `The Play entitlement that unlocks Pro is named ${site.entitlement}. Features included in Pro can grow over time. We may add Pro features. We will not quietly move a feature you already use on the free tier behind a paywall without a clear note in the app or on this website. Price changes for new purchases are shown by Google Play before you confirm.`,
      },
      {
        type: "p",
        text: "“Lifetime” means the commercial life of Stashin Pro as a product we offer, not a promise that a device, a Google account, or the app will exist forever. If we ever discontinue the app, a Lifetime purchase does not become a cash refund by itself. Google Play’s rules, and the limitation of liability below, still apply. We will not charge a Lifetime holder a new fee to keep the Pro features they already unlocked while the app remains available.",
      },
    ],
  },
  {
    id: "trial",
    heading: "Free trial",
    blocks: [
      {
        type: "p",
        text: "The yearly plan includes a 7-day free trial when Google Play marks your account as eligible. You may need a payment method on file. Unless you cancel at least 24 hours before the trial ends, the trial converts to a paid yearly subscription and Google Play charges $14.99 for the year, then renews yearly until you cancel.",
      },
      {
        type: "p",
        text: "The monthly plan does not include that 7-day trial. The Lifetime Founder's Pass is not a trial. It is charged once, at purchase, at $29.99. Eligibility, one-trial-per-account rules, and the exact trial clock are determined by Google Play. Manage the trial in Google Play subscriptions. Deleting the app does not cancel the trial or the subscription.",
      },
    ],
  },
  {
    id: "billing",
    heading: "Billing, cancellation, and refunds",
    blocks: [
      {
        type: "p",
        text: "All Stashin Pro purchases are billed by Google Play, not by Stashin directly. We do not collect your card number. Google Play Billing is the merchant of record for these in-app products.",
      },
      {
        type: "p",
        text: "Cancel a monthly or yearly plan in the Google Play subscriptions center for the Google account that bought it. Cancellation stops the next renewal. It does not erase the period you already paid for, and it does not delete saves on the device. The Lifetime Pass has nothing to cancel because it does not renew.",
      },
      {
        type: "p",
        text: "Refunds are handled under Google Play’s refund policies. Request a refund from your Google Play order history. Google decides whether a refund is granted. If Google refunds a purchase, the stashin_pro entitlement may be revoked and Pro features may lock again. Local saves stay on the device either way, subject to the free-tier limits if Pro is no longer active.",
      },
      {
        type: "p",
        text: "We do not promise a refund outside the channel Google Play provides. If Play asks the developer to respond to a refund review, we will answer based on the purchase record Google shows us, which does not include the contents of your stash.",
      },
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    blocks: [
      {
        type: "p",
        text: "The Stashin name, the bookmark mark, the visual design of the app and this website, the copy we wrote, and the software itself are owned by the developer or used under license. They are protected by copyright, trademark, and other intellectual property laws. These terms do not grant you any right to use our branding, except the small license to run the app as offered.",
      },
      {
        type: "p",
        text: "Google, Google Play, Google Drive, YouTube, Android, and Chrome are trademarks of Google LLC. Instagram is a trademark of Meta. Other names, including X, Microsoft Edge, Mozilla Firefox, Safari, and Brave, belong to their owners. Stashin is not affiliated with, endorsed by, or sponsored by those companies. Saved links point at third-party sites. We are not responsible for those sites.",
      },
      {
        type: "p",
        text: "If you send us a suggestion, you grant us a free, perpetual right to use the idea in the product without any duty to pay you or to keep it confidential. Do not send material you want to keep secret.",
      },
    ],
  },
  {
    id: "third-parties",
    heading: "Third-party services",
    blocks: [
      {
        type: "p",
        text: "The app can hand you off to Google Play, Google Drive, RevenueCat (for anonymous entitlement checks), and to whatever URL you choose to open. Those services have their own terms. A failure of Play Billing, Drive, or a website you saved is not a failure we control. Optional Drive backup uses only the drive.appdata scope described in the Privacy Policy.",
      },
    ],
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    blocks: [
      {
        type: "p",
        text: "Stashin is provided “as is” and “as available.” To the maximum extent the law allows, we disclaim warranties of merchantability, fitness for a particular purpose, title, and non-infringement, and any warranty that the app will be uninterrupted, error-free, or that a backup will always restore perfectly.",
      },
      {
        type: "p",
        text: "Full-text search and offline OCR are best-effort features that run on your device. They can miss text, misread an image, or return an unexpected match. Duplicate detection can miss a link that does not canonicalize to the same URL, or warn you about one that does. You are responsible for checking saves that matter.",
      },
      {
        type: "p",
        text: "Some jurisdictions do not allow an “as is” disclaimer. In those places, the disclaimers apply only as far as the law allows, and you may have additional rights.",
      },
    ],
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by law, the developer will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost data, lost goodwill, or the cost of substitute services, whether or not we were advised of the possibility. This includes a lost stash caused by uninstalling, a failed export, a Drive outage, a device failure, or a bug.",
      },
      {
        type: "p",
        text: "To the maximum extent permitted by law, our total liability for any claim arising out of the app, the website, or these terms is limited to the greater of (a) the amount you paid us for Stashin Pro through Google Play in the twelve months before the claim or (b) twenty-nine US dollars (USD $29.99).",
      },
      {
        type: "p",
        text: "Nothing in these terms limits liability that cannot be limited under the law that applies to you, including liability for fraud or for death or personal injury caused by negligence where such a limit is forbidden. If you are a consumer, you may have mandatory rights in your country of residence that these terms cannot waive.",
      },
    ],
  },
  {
    id: "indemnity",
    heading: "Your responsibility for claims",
    blocks: [
      {
        type: "p",
        text: "If a third party brings a claim against us because of the content you saved, the way you used Stashin, or your breach of these terms, you will indemnify us for the damages and reasonable costs that result, to the extent the law allows. This does not apply where the claim is caused by our own breach of these terms or by our willful misconduct.",
      },
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    blocks: [
      {
        type: "p",
        text: "You may stop using Stashin at any time by uninstalling it and, if you had a subscription, canceling it in Google Play. We may stop offering the app, or refuse a Play update, if you materially break these terms or if we are required to. Ending the license does not delete files already on your device until you remove them, and it does not by itself refund a Play purchase. Sections that should survive by their nature — intellectual property, disclaimers, limitation of liability, and the law that governs these terms — survive.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes",
    blocks: [
      {
        type: "p",
        text: `We may update these terms by posting a new version on ${site.url}/terms/ and changing the effective date. The current date is ${site.updated}. If a change is material, we will also surface the new date in the app or the store listing when we reasonably can. If you keep using Stashin after the new date, the updated terms apply. If you disagree, uninstall and cancel any subscription.`,
      },
    ],
  },
  {
    id: "law",
    heading: "Governing law",
    blocks: [
      {
        type: "p",
        text: "These terms are governed by the laws that apply where the developer resides, without regard to conflict-of-law rules, except where the mandatory consumer-protection laws of your country of residence say otherwise. Courts in the developer’s place of residence have jurisdiction, and you may also bring an individual claim in the courts of your country of residence where those courts cannot lawfully be waived.",
      },
      {
        type: "p",
        text: "These terms are the whole agreement between you and us about Stashin and replace earlier oral statements about the same subject. If one clause is unenforceable, the rest stays in effect. A failure to enforce a clause once is not a waiver. You may not assign these terms. We may assign them if the product moves to a new steward, and we will keep the same privacy commitments or post an updated policy.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    blocks: [
      {
        type: "p",
        text: `Questions about these terms: [[${site.supportEmail}|mailto:${site.supportEmail}]]. Privacy requests: [[${site.privacyEmail}|mailto:${site.privacyEmail}]].`,
      },
      {
        type: "p",
        text: `Developer: ${site.developer}. Package: ${site.packageName}. Website: ${site.url}.`,
      },
    ],
  },
];
