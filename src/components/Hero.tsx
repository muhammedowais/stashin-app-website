import { CheckGlyph, LockGlyph } from "@/components/icons";
import { PhoneMockup } from "@/components/PhoneMockup";
import { StoreButtons } from "@/components/StoreButtons";

const trusts = [
  { label: "Offline SQLite Vault", className: "bg-sage text-sage-ink" },
  { label: "Smart Duplicate Detection", className: "bg-peach text-peach-ink" },
  { label: "Optional Private Drive Backup", className: "bg-lavender text-lavender-ink" },
];

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,1.22fr)_minmax(280px,0.78fr)] lg:gap-10 lg:pt-16 lg:pb-24">
      <div>
        <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-[12.5px] font-extrabold text-body sm:text-[13px]">
          <LockGlyph className="h-3.5 w-3.5 shrink-0" />
          <span>100% On-Device · Zero Tracking · No Account Required</span>
        </p>
        <h1 className="mt-6 font-serif text-[2.55rem] leading-[1.08] font-semibold tracking-[-0.03em] text-ink sm:text-[3.15rem] lg:text-[3.45rem] lg:leading-[1.05]">
          A quiet, private place for{" "}
          <br className="hidden lg:block" />
          <em className="font-semibold text-terracotta italic">everything</em> you save.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
          Save links, X threads, Instagram reels, YouTube videos, Chrome pages, notes,
          and gallery screenshots in one tap from your Android share sheet — neatly
          organized in calm pastel folders on your phone.
        </p>
        <StoreButtons className="mt-8" />
        <ul className="mt-6 flex flex-wrap gap-2">
          {trusts.map((item) => (
            <li
              key={item.label}
              className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-extrabold ${item.className}`}
            >
              <CheckGlyph className="h-3.5 w-3.5" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <PhoneMockup />
    </section>
  );
}
