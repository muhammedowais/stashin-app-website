import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { privacySections } from "@/lib/privacy";
import { site } from "@/lib/site";

const description =
  "Privacy Policy for Stashin (com.mowaisumer.stashin). No accounts, no analytics, on-device SQLite, and optional Google Drive appDataFolder backup under Limited Use.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "Privacy Policy · Stashin",
    description,
    url: `${site.url}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      kicker="Legal"
      title="Privacy Policy"
      lede="How Stashin treats what you save: it stays on your phone, trackers stay out, and Google Drive is optional, narrow, and yours."
      sections={privacySections}
    />
  );
}
