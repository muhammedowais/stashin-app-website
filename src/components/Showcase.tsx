import { StoreButtons } from "@/components/StoreButtons";

const sidebar = ["All", "Notes", "Links", "Tasks", "Archive"];
const rows = [
  ["Note", "Ideas for my next app", "Today, 10:24 AM"],
  ["Link", "Design inspiration", "Yesterday"],
  ["Task", "Workout plan", "Tue, 8:00 AM"],
  ["Note", "Personal finance", "Mon, 6:12 PM"],
  ["Link", "Travel bucket list", "Sun, 3:40 PM"],
];

export function Showcase() {
  return (
    <section id="privacy" className="bg-[#EFF4F0]">
      <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div>
          <p className="text-[11px] font-extrabold tracking-[0.2em] text-[#5d7464] uppercase">Your life, organized</p>
          <h2 className="mt-3 font-serif text-[2.15rem] leading-[1.15] font-semibold tracking-[-0.02em] sm:text-5xl">
            More than a note app.
            <br />
            It&apos;s your second brain.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-body sm:text-lg">
            From quick notes to important links, Stashin keeps everything safe, organized and always within reach.
            No clutter. No distractions. Just what matters.
          </p>
          <StoreButtons className="mt-7" />
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="rounded-[28px] border border-white/80 bg-white p-3 shadow-[0_24px_60px_-36px_rgba(30,27,24,0.4)]">
            <div className="grid grid-cols-[132px_1fr] overflow-hidden rounded-2xl border border-[#f0ebe3]">
              <aside className="bg-[#fbf8f4] px-3 py-4">
                <p className="px-2 font-serif text-sm font-bold">Stashin</p>
                <ul className="mt-3 space-y-1 text-[12px] font-extrabold text-[#5c564e]">
                  {sidebar.map((item, index) => (
                    <li key={item} className={`rounded-lg px-2 py-1.5 ${index === 0 ? "bg-white text-ink shadow-sm" : ""}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
              <div className="px-3 py-3">
                <p className="text-[12px] font-extrabold">All Items</p>
                <ul className="mt-2 divide-y divide-[#f3eee6]">
                  {rows.map(([kind, title, when]) => (
                    <li key={title} className="flex items-center justify-between gap-2 py-2">
                      <span>
                        <span className="mr-2 rounded-full bg-[#f4efe6] px-1.5 py-0.5 text-[9px] font-extrabold text-muted">{kind}</span>
                        <span className="text-[12px] font-extrabold">{title}</span>
                      </span>
                      <span className="shrink-0 text-[10px] font-bold text-muted">{when}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute -right-1 -bottom-6 w-[168px] rounded-[28px] border border-[#ece7df] bg-white p-1.5 shadow-[0_20px_40px_-24px_rgba(30,27,24,0.55)] sm:right-2">
            <div className="rounded-[22px] bg-[#fbf8f4] px-2.5 pt-2 pb-2">
              <div className="flex justify-between text-[8px] font-extrabold"><span>9:41</span><span>LTE</span></div>
              <p className="mt-2 font-serif text-[13px] leading-tight font-semibold">Ideas for my next app</p>
              <div className="mt-2 h-14 rounded-lg bg-gradient-to-br from-[#f3d7c4] via-[#d7e4f4] to-[#c9ddcf]" />
              <div className="mt-2 grid grid-cols-6 gap-1 rounded-lg bg-[#ece8e1] p-1.5">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span key={index} className="h-2 rounded-sm bg-white" />
                ))}
              </div>
            </div>
          </div>
          <svg viewBox="0 0 48 36" className="absolute -top-3 right-10 h-8 w-10 text-[#c5b8a4]" fill="none" aria-hidden="true">
            <path d="M8 28 18 8M24 30 28 10M38 26 34 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
