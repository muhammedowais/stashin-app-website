const browsers = [
  { name: "Google Chrome", step: "01", first: true },
  { name: "Microsoft Edge", step: "02", first: false },
  { name: "Mozilla Firefox", step: "03", first: false },
  { name: "Safari / Brave", step: "04", first: false },
];

export function Roadmap() {
  return (
    <section id="extension" className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-20">
      <div className="rounded-[32px] bg-sand px-6 py-10 sm:px-12 sm:py-12">
        <p className="text-xs font-extrabold tracking-[0.18em] text-sand-ink/70 uppercase">
          Browser extension roadmap
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-[2rem] leading-tight font-semibold tracking-[-0.02em] text-sand-ink sm:text-[2.7rem]">
          Stashin Browser Extension is coming next.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sand-ink">
          Starting with Google Chrome, followed by Microsoft Edge, Mozilla Firefox, and Safari / Brave.
          The same calm folders — saved from the desktop browser, still private on your phone.
        </p>
        <ol className="mt-8 flex flex-wrap gap-2.5">
          {browsers.map((browser) => (
            <li key={browser.name}>
              <span
                className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold ${
                  browser.first ? "bg-ink text-cream" : "bg-cream/80 text-sand-ink ring-1 ring-sand-ink/10"
                }`}
              >
                <span className={browser.first ? "text-cream/60" : "text-terracotta"}>{browser.step}</span>
                {browser.name}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
