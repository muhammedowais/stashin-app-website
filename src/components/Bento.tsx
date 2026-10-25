import { GemGlyph, KeyGlyph, ShareGlyph, ShieldGlyph } from "@/components/icons";
import type { ReactNode } from "react";

const cards: {
  title: string;
  body: ReactNode;
  className: string;
  titleClass: string;
  bodyClass: string;
  iconClass: string;
  icon: ReactNode;
}[] = [
  {
    title: "1-Tap Native Share Sheet",
    body: "Save from Instagram, X, YouTube, or Chrome without leaving the app. Pick a folder and tags right in the bottom sheet.",
    className: "bg-sage",
    titleClass: "text-sage-ink",
    bodyClass: "text-sage-soft",
    iconClass: "bg-white/55 text-sage-ink",
    icon: <ShareGlyph className="h-6 w-6" />,
  },
  {
    title: "Smart Duplicate Guard",
    body: (
      <>
        Automatically canonicalizes URLs across x.com and twitter.com, youtu.be and youtube.com,
        strips <Code>utm_*</Code>, <Code>igsh</Code>, and <Code>fbclid</Code>, and warns before
        saving a duplicate.
      </>
    ),
    className: "bg-peach",
    titleClass: "text-peach-ink",
    bodyClass: "text-peach-soft",
    iconClass: "bg-white/55 text-peach-ink",
    icon: <ShieldGlyph className="h-6 w-6" />,
  },
  {
    title: "Biometric Private Lock",
    body: "Lock sensitive folders and items behind Android fingerprint or face unlock.",
    className: "bg-lavender",
    titleClass: "text-lavender-ink",
    bodyClass: "text-lavender-soft",
    iconClass: "bg-white/55 text-lavender-ink",
    icon: <KeyGlyph className="h-6 w-6" />,
  },
  {
    title: "Fair Hybrid Pricing",
    body: "Generous Free tier forever, or unlock Stashin Pro via Monthly, Yearly, or a one-time Founder's Lifetime Pass.",
    className: "bg-sand",
    titleClass: "text-sand-ink",
    bodyClass: "text-sand-ink",
    iconClass: "bg-white/55 text-sky-ink",
    icon: <GemGlyph className="h-6 w-6" />,
  },
];

function Code({ children }: { children: string }) {
  return (
    <code className="rounded-md bg-white/60 px-1 py-0.5 font-sans text-[0.92em] font-extrabold">
      {children}
    </code>
  );
}

export function Bento() {
  return (
    <section id="features" className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="mx-auto max-w-3xl text-center font-serif text-[2rem] leading-[1.15] font-semibold tracking-[-0.02em] sm:text-5xl">
        Designed like a calm editorial notebook, not a noisy feed
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`flex h-full flex-col rounded-[28px] p-6 ring-1 ring-black/5 ${card.className}`}
          >
            <div className={`mb-8 grid h-12 w-12 place-items-center rounded-2xl ${card.iconClass}`}>
              {card.icon}
            </div>
            <h3 className={`font-serif text-[1.55rem] leading-tight font-semibold tracking-tight ${card.titleClass}`}>
              {card.title}
            </h3>
            <p className={`mt-3 text-[15px] leading-relaxed ${card.bodyClass}`}>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
