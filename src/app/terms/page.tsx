import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { site } from "@/lib/site";
import { termsSections } from "@/lib/terms";

const description =
  "Terms of Service for Stashin. Local-first use, Stashin Pro at $1.99/month, $14.99/year with a 7-day trial, and a $29.99 Lifetime Founder's Pass via Google Play.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: "Terms of Service · Stashin",
    description,
    url: `${site.url}/terms/`,
  },
};

export default function TermsPage() {
  return (
    <LegalDocument
      kicker="Legal"
      title="Terms of Service"
      lede="The agreement for using Stashin on Android: a local-first notebook, an optional Pro upgrade billed by Google Play, and a clear limit on what we can recover if you do not keep a backup."
      sections={termsSections}
    />
  );
}
