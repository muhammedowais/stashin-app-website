import type { Metadata } from "next";
import { DownloadGlyph, PlayGlyph } from "@/components/icons";
import { site } from "@/lib/site";

const description =
  "Install Stashin v1.0 for Android. Download on Google Play, or read how the direct APK for com.mowaisumer.stashin is published.";

export const metadata: Metadata = {
  title: "Download Stashin",
  description,
  alternates: { canonical: "/download/" },
  openGraph: {
    title: "Download Stashin · v1.0",
    description,
    url: `${site.url}/download/`,
  },
};

export default function DownloadPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[960px] px-5 pt-12 pb-24 sm:px-8">
      <p className="text-xs font-extrabold tracking-[0.18em] text-muted uppercase">Install · v{site.version}</p>
      <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight font-semibold tracking-[-0.02em] sm:text-6xl">
        Get Stashin on your phone.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
        The official build is the Android package <span className="font-extrabold text-ink">{site.packageName}</span>,
        version {site.version}. Google Play is the supported way to install it, so updates, the free
        tier, and Stashin Pro billing stay attached to your Play account.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="rounded-[28px] bg-ink p-7 text-cream">
          <p className="text-xs font-extrabold tracking-[0.16em] text-cream/60 uppercase">Recommended</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Google Play</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-cream/80">
            Install the free app. Upgrade to Pro inside the app if you want it: $1.99 / month,
            $14.99 / year with a 7-day free trial, or the $29.99 Lifetime Founder&apos;s Pass.
          </p>
          <a href={site.playStoreUrl} className="btn btn-secondary mt-6">
            <PlayGlyph className="h-4 w-4" />
            Download on Google Play
          </a>
        </article>

        <article id="apk" className="scroll-mt-28 rounded-[28px] border border-line bg-card p-7">
          <p className="text-xs font-extrabold tracking-[0.16em] text-muted uppercase">Direct APK · v{site.version}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Sideload</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-body">
            A standalone APK is the same package name, <span className="font-extrabold text-ink">{site.packageName}</span>,
            version {site.version}. This website does not host a binary. When you sideload, confirm
            that package name before you open the file, and allow installs only from a source you trust.
            Play remains the official v{site.version} build, including subscription management.
          </p>
          <a href={site.playStoreUrl} className="btn btn-primary mt-6">
            <DownloadGlyph className="h-4 w-4" />
            Get the official v{site.version} build
          </a>
        </article>
      </div>
    </main>
  );
}
