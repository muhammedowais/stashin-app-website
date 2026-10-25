import Link from "next/link";
import { parseRichText, type LegalSection } from "@/lib/legal";
import { site } from "@/lib/site";

const tones = {
  peach: "bg-peach text-peach-ink",
  sage: "bg-sage text-sage-ink",
  sand: "bg-sand text-sand-ink",
  lavender: "bg-lavender text-lavender-ink",
  sky: "bg-sky text-sky-ink",
} as const;

export function LegalDocument({
  kicker,
  title,
  lede,
  sections,
}: {
  kicker: string;
  title: string;
  lede: string;
  sections: LegalSection[];
}) {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-5 pt-12 pb-24 sm:px-8">
      <p className="text-xs font-extrabold tracking-[0.18em] text-muted uppercase">{kicker}</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight font-semibold tracking-[-0.02em] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-body">{lede}</p>
      <p className="mt-4 text-sm font-bold text-muted">
        Effective {site.updated} · {site.packageName} · {site.url.replace("https://", "")}
      </p>

      <nav aria-label="On this page" className="mt-10 rounded-[24px] border border-line bg-card p-5">
        <p className="text-xs font-extrabold tracking-[0.16em] text-muted uppercase">On this page</p>
        <ol className="mt-3 grid gap-x-8 sm:grid-cols-2">
          {sections.map((section, index) => (
            <li key={section.id} className="py-1 text-sm leading-snug font-bold">
              <a href={`#${section.id}`} className="hover:text-terracotta">
                <span className="mr-2 text-muted">{String(index + 1).padStart(2, "0")}</span>
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="font-serif text-3xl leading-tight font-semibold tracking-tight">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-[16.5px] leading-relaxed text-body">
              {section.blocks.map((block, index) => {
                if (block.type === "p") {
                  return (
                    <p key={index} className="break-words">
                      <Rich text={block.text} />
                    </p>
                  );
                }
                if (block.type === "subhead") {
                  return (
                    <h3 key={index} className="pt-2 font-serif text-xl font-semibold text-ink">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={index} className="list-disc space-y-2 pl-5">
                      {block.items.map((item) => (
                        <li key={item} className="break-words">
                          <Rich text={item} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <aside key={index} className={`rounded-[22px] px-5 py-4 ${tones[block.tone]}`}>
                    <p className="font-serif text-xl font-semibold">{block.title}</p>
                    <p className="mt-2 text-[15px] leading-relaxed">
                      <Rich text={block.text} />
                    </p>
                  </aside>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

function Rich({ text }: { text: string }) {
  const parts = parseRichText(text);
  return parts.map((part, index) => {
    if (part.type === "text") return <span key={index}>{part.value}</span>;
    const className =
      "font-bold text-ink underline decoration-terracotta/70 decoration-2 underline-offset-4";
    if (part.href.startsWith("/")) {
      return (
        <Link key={index} href={part.href} className={className}>
          {part.label}
        </Link>
      );
    }
    const external = part.href.startsWith("http");
    return (
      <a
        key={index}
        href={part.href}
        className={className}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {part.label}
      </a>
    );
  });
}
