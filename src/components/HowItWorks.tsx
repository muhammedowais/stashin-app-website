const steps = [
  {
    n: "01",
    title: "Save it in one tap",
    body: "Share a link, add a note, or save anything from your phone, browser, or other apps.",
    bubble: "bg-[#d9f0e2] text-[#1f6b45]",
    icon: "bg-[#e7f6ec] text-[#1f6b45]",
    glyph: <LinkGlyph />,
  },
  {
    n: "02",
    title: "Organize the quiet way",
    body: "Stashin keeps things tidy with smart filters, tags, and checks for duplicates.",
    bubble: "bg-[#f8d7cc] text-[#c45c3e]",
    icon: "bg-[#fdeee7] text-[#c45c3e]",
    glyph: <FolderGlyph />,
  },
  {
    n: "03",
    title: "Find it offline",
    body: "Access your data anytime, even without internet. Fast, reliable, and distraction-free.",
    bubble: "bg-[#e4dcfb] text-[#5b468f]",
    icon: "bg-[#efeAFE] text-[#5b468f]",
    glyph: <CloudGlyph />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F6F3EC]">
      <div className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-[11px] font-extrabold tracking-[0.2em] text-muted uppercase">How it works</p>
        <h2 className="mt-3 max-w-xl font-serif text-[2.1rem] leading-[1.15] font-semibold tracking-[-0.02em] sm:text-5xl">
          Three quiet steps.
          <br />
          Then the library is yours.
        </h2>
        <ol className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(30,27,24,0.45)]">
              <div className="flex items-center gap-2">
                <span className={`grid h-9 w-9 place-items-center rounded-full text-xs font-extrabold ${step.bubble}`}>{step.n}</span>
                <span className={`grid h-9 w-9 place-items-center rounded-full ${step.icon}`}>{step.glyph}</span>
              </div>
              <h3 className="mt-5 font-serif text-[1.45rem] leading-tight font-semibold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LinkGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M10 13a4 4 0 0 0 5.7.4l2-2a4 4 0 0 0-5.7-5.6l-1.1 1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14 11a4 4 0 0 0-5.7-.4l-2 2a4 4 0 0 0 5.7 5.6l1.1-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function FolderGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M3.5 8.5V17a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-6l-1.6-2H5.5a2 2 0 0 0-2 2.5Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function CloudGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M7.5 17h9a3.2 3.2 0 0 0 .3-6.4 4.2 4.2 0 0 0-8.1-1A3 3 0 0 0 7.5 17Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
