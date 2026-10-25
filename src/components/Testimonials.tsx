const quotes = [
  {
    text: "Stashin is exactly what I needed. Simple, private and super easy to use. It keeps my ideas and links in one place without any distractions.",
    initial: "A",
    name: "Ali Raza",
    role: "Android user",
    avatar: "bg-ink text-cream",
  },
  {
    text: "I love the clean design and the fact that it works offline. The duplicate detection is a game changer!",
    initial: "S",
    name: "Sarah Khan",
    role: "Android user",
    avatar: "bg-[#6d5bd0] text-white",
  },
  {
    text: "Finally a note app that respects my privacy. No ads, no clutter, just pure productivity.",
    initial: "M",
    name: "M. Usman",
    role: "Android user",
    avatar: "bg-[#3d3832] text-cream",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-center text-[11px] font-extrabold tracking-[0.2em] text-muted uppercase">What users say</p>
      <h2 className="mt-3 text-center font-serif text-[2.1rem] font-semibold tracking-[-0.02em] sm:text-5xl">
        Trusted by people who value their focus.
      </h2>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {quotes.map((quote) => (
          <figure key={quote.name} className="rounded-[24px] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(30,27,24,0.45)] ring-1 ring-[#f0ebe3]">
            <span className="font-serif text-4xl leading-none text-[#d9cfc2]" aria-hidden="true">“</span>
            <blockquote className="mt-2 text-[15px] leading-relaxed text-[#3f3a34]">“{quote.text}”</blockquote>
            <figcaption className="mt-6 flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <span className={`grid h-9 w-9 place-items-center rounded-full text-sm font-extrabold ${quote.avatar}`}>{quote.initial}</span>
                <span>
                  <span className="block text-sm font-extrabold">{quote.name}</span>
                  <span className="block text-xs font-bold text-muted">{quote.role}</span>
                </span>
              </span>
              <span className="text-[13px] tracking-tight text-[#e0b84a]" aria-label="5 stars">★★★★★</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
