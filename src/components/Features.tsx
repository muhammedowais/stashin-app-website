import type { ReactNode } from "react";

const cards: {
  title: string;
  body: string;
  card: string;
  bubble: string;
  icon: ReactNode;
}[] = [
  {
    title: "Tap, Note, Share",
    body: "Save ideas, links, notes and more in seconds. Keep everything in one place, beautifully organized.",
    card: "bg-[#EAF5EE]",
    bubble: "bg-[#cfe8d8] text-[#1f6b45]",
    icon: <ShareIcon />,
  },
  {
    title: "Smart Duplicate Guard",
    body: "Avoid duplicate saves and keep your collection clean. Stashin detects repeated links and suggests the existing one.",
    card: "bg-[#FDEEE7]",
    bubble: "bg-[#f8cfc0] text-[#c45c3e]",
    icon: <BoltIcon />,
  },
  {
    title: "Biometric Private Lock",
    body: "Lock your notes with your fingerprint or Face ID. Your data, your choice.",
    card: "bg-[#EFEAFE]",
    bubble: "bg-[#ddd4f8] text-[#5b468f]",
    icon: <LockIcon />,
  },
  {
    title: "Fairly Useful Archiving",
    body: "Keep what matters. Archive the rest. Find anything, anytime, without the clutter.",
    card: "bg-[#F7F1E8]",
    bubble: "bg-[#efe6d8] text-[#3d3832]",
    icon: <CloudIcon />,
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-center text-[11px] font-extrabold tracking-[0.2em] text-muted uppercase">Features</p>
      <h2 className="mx-auto mt-3 max-w-3xl text-center font-serif text-[2rem] leading-tight font-semibold tracking-[-0.02em] sm:text-5xl">
        Designed like a calm editorial notebook, not a noisy feed
      </h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className={`flex h-full flex-col rounded-[28px] p-6 ${card.card}`}>
            <span className={`grid h-11 w-11 place-items-center rounded-full ${card.bubble}`}>{card.icon}</span>
            <h3 className="mt-8 font-serif text-[1.55rem] leading-tight font-semibold">{card.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#4e4840]">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 9h6M9 12.5h6M9 16h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M13 2 5 14h6l-1 8 9-13h-6l0-7Z" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 10V8a3.5 3.5 0 0 1 7 0v2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M7.5 17.5h9a3.5 3.5 0 0 0 .4-7 4.5 4.5 0 0 0-8.6-1.2A3.2 3.2 0 0 0 7.5 17.5Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
