import { CheckGlyph } from "@/components/icons";
import { freeFeatures, proFeatures, proTiers, yearlySavingsPercent } from "@/lib/pricing";
import { site } from "@/lib/site";

export function Pricing() {
  const savings = yearlySavingsPercent();

  return (
    <section id="pricing" className="border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-center text-xs font-extrabold tracking-[0.18em] text-muted uppercase">
          Method 5 · Hybrid Freemium
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center font-serif text-[2rem] leading-tight font-semibold tracking-[-0.02em] sm:text-5xl">
          Free forever. Pro when the notebook fills up.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-body">
          Stashin Free stays generous. Stashin Pro is {savings}% less by the year, with a 7-day
          trial, or a single Lifetime Founder&apos;s Pass.
        </p>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
          <article className="flex flex-col rounded-[32px] border border-line bg-card p-7 sm:p-9">
            <p className="text-xs font-extrabold tracking-[0.16em] text-muted uppercase">Free Forever</p>
            <p className="mt-4 font-serif text-6xl font-semibold tracking-tight">
              $0
            </p>
            <p className="mt-2 text-body">Yours to keep. No trial countdown on the free tier.</p>
            <ul className="mt-8 space-y-3">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-[15px] leading-snug font-semibold">
                  <CheckGlyph className="mt-0.5 h-4 w-4 shrink-0 text-sage-soft" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-8 text-sm leading-relaxed font-bold text-muted">
              No account. No trial clock. Delete the app and the local stash goes with it.
            </p>
          </article>

          <article className="rounded-[32px] bg-ink p-7 text-cream sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-extrabold tracking-[0.16em] text-cream/65 uppercase">Stashin Pro</p>
              <span className="rounded-full bg-terracotta px-3 py-1 text-[11px] font-extrabold text-white">
                Full editorial toolkit
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {proTiers.map((tier) => (
                <li
                  key={tier.id}
                  className={`rounded-2xl px-4 py-3.5 ${
                    tier.popular ? "bg-cream text-ink" : "bg-white/8 ring-1 ring-white/10"
                  }`}
                >
                  <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
                    <div>
                      <p className="flex flex-wrap items-center gap-2 font-extrabold">
                        {tier.name}
                        {tier.popular ? (
                          <span className="rounded-full bg-terracotta px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-white uppercase">
                            Most Popular
                          </span>
                        ) : null}
                      </p>
                      <p className={`mt-1 text-sm font-bold ${tier.popular ? "text-body" : "text-cream/70"}`}>
                        {tier.detail}
                      </p>
                    </div>
                    <p className="font-serif text-[1.85rem] leading-none font-semibold">
                      {tier.price}
                      <span className={`ml-1 font-sans text-sm font-extrabold ${tier.popular ? "text-body" : "text-cream/65"}`}>
                        {tier.cadence}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-[15px] leading-snug font-semibold text-cream/95">
                  <CheckGlyph className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
          Prices in USD. Google Play shows the local price, tax, and trial eligibility.
          Cancel monthly or yearly anytime in Google Play. The Lifetime Founder&apos;s Pass
          is a one-time purchase of the <span className="font-bold">{site.packageName}</span> app.
        </p>
        <div className="mt-6 text-center">
          <a href={site.playStoreUrl} className="btn btn-primary">
            Get Stashin Free
          </a>
        </div>
      </div>
    </section>
  );
}
