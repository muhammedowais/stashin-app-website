import { LockGlyph } from "@/components/icons";
import { PhoneMockup } from "@/components/PhoneMockup";
import { StoreButtons } from "@/components/StoreButtons";

const pills = [
  { label: "Private by design", className: "bg-[#e7f6ec] text-[#1f6b45]" },
  { label: "Works offline", className: "bg-[#fde8df] text-[#a24b32]" },
  { label: "No ads", className: "bg-[#eee8fb] text-[#5c4a9a]" },
];

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.9fr)] lg:pt-16 lg:pb-20">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-[#e7f5ec] px-3.5 py-1.5 text-[13px] font-extrabold text-[#2f6b4a]">
          <LockGlyph className="h-3.5 w-3.5" />
          100% Private • No Ads • Works Offline
        </p>
        <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.08] font-semibold tracking-[-0.03em] sm:text-5xl lg:text-[3.55rem] lg:leading-[1.05]">
          A quiet, private place for
          <br />
          <em className="text-[#e07a5f] italic">everything</em> you save.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
          Save notes, links, ideas, and more in one simple app. Stashin helps you stay
          organized, focused, and in control — without distractions or ads. Your data
          stays private, always.
        </p>
        <StoreButtons className="mt-7" />
        <ul className="mt-5 flex flex-wrap gap-2">
          {pills.map((pill) => (
            <li key={pill.label} className={`inline-flex min-h-9 items-center rounded-full px-3 py-1.5 text-[13px] font-extrabold ${pill.className}`}>
              ✓ {pill.label}
            </li>
          ))}
        </ul>
      </div>
      <PhoneMockup />
    </section>
  );
}
