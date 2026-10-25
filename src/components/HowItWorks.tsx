const steps = [
  {
    n: "01",
    title: "Share in one tap",
    body: "Share from any Android app in 1 tap, or add a link manually, or drop it in from the Home Screen Widget.",
  },
  {
    n: "02",
    title: "Organize the quiet way",
    body: "Smart Hybrid folders keep pinned folders first. Choose from 226 curated icons, 18 pastel palettes plus a custom hex picker, nested subfolders, and tags.",
  },
  {
    n: "03",
    title: "Find it offline",
    body: "Search and revisit anytime. Instant SQLite full-text search covers titles, notes, URLs, and offline OCR text inside saved images.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-center text-xs font-extrabold tracking-[0.18em] text-muted uppercase">
          How It Works
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center font-serif text-[2rem] leading-tight font-semibold tracking-[-0.02em] sm:text-5xl">
          Three quiet steps. Then the library is yours.
        </h2>
        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="rounded-[28px] border border-line bg-cream p-7">
              <p className="font-serif text-5xl font-semibold text-terracotta italic">{step.n}</p>
              <h3 className="mt-5 font-serif text-[1.7rem] leading-tight font-semibold">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
