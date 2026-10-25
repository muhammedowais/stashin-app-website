import type { Metadata, Viewport } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const title = "Stashin — A quiet, private place for everything you save";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s · Stashin",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.developer, url: site.url }],
  keywords: [
    "Stashin",
    "Android",
    "save links",
    "read later",
    "privacy",
    "on-device",
    "SQLite",
    "bookmark manager",
    site.packageName,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  category: "productivity",
};

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android",
  url: site.url,
  downloadUrl: site.playStoreUrl,
  installUrl: site.playStoreUrl,
  description: site.description,
  softwareVersion: site.version,
  author: {
    "@type": "Person",
    name: site.developer,
  },
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Stashin Free" },
    { "@type": "Offer", price: "1.99", priceCurrency: "USD", name: "Stashin Pro Monthly" },
    { "@type": "Offer", price: "14.99", priceCurrency: "USD", name: "Stashin Pro Yearly" },
    { "@type": "Offer", price: "29.99", priceCurrency: "USD", name: "Stashin Pro Lifetime Founder's Pass" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${playfair.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
