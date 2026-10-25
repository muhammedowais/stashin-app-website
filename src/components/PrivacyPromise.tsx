import Link from "next/link";

const points = [
  {
    title: "Zero accounts",
    body: "No sign-up, no profile, no password. Open the app and start saving.",
    className: "bg-sage text-sage-ink",
  },
  {
    title: "Zero trackers",
    body: "No analytics SDKs and no crash-reporting servers. We never see what you save.",
    className: "bg-peach text-peach-ink",
  },
  {
    title: "SQLite, on the phone",
    body: "A 100% local database holds links, notes, folders, tags, and search.",
    className: "bg-lavender text-lavender-ink",
  },
  {
    title: "Export whenever you want",
    body: "Write a local JSON or ZIP archive to a folder you choose. The file stays with you.",
    className: "bg-sand text-sand-ink",
  },
  {
    title: "Drive, only if you ask",
    body: "Optional backup goes to your private appDataFolder, encrypted in transit, visible only to your Google account.",
    className: "bg-sky text-sky-ink",
  },
];

export function PrivacyPromise() {
  return (
    <section id="privacy-promise" className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-extrabold tracking-[0.18em] text-muted uppercase">
            100% privacy-first
          </p>
          <h2 className="mt-3 font-serif text-[2.1rem] leading-[1.12] font-semibold tracking-[-0.02em] sm:text-5xl">
            Your stash never becomes our business.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Stashin is a notebook that lives on the device. There is no feed to optimize,
            no account to lock you in, and no server waiting for a copy of your links.
          </p>
          <Link
            href="/privacy/"
            className="mt-6 inline-flex font-extrabold text-ink underline decoration-terracotta decoration-2 underline-offset-4"
          >
            Read the Privacy Policy
          </Link>
        </div>
        <ul className="grid gap-3">
          {points.map((point) => (
            <li key={point.title} className={`rounded-[22px] px-5 py-4 ${point.className}`}>
              <h3 className="font-serif text-xl font-semibold">{point.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed opacity-90">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
