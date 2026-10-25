import { plans, type PlanTone } from "@/lib/pricing";
import { site } from "@/lib/site";

const cardTone: Record<PlanTone, string> = {
  white: "border border-[#ece6dc] bg-white",
  mint: "border border-[#cfe3d4] bg-[#F2FAF5]",
  lavender: "border border-[#ddd4f6] bg-[#F6F3FF]",
  sky: "border border-[#d3e3f4] bg-[#F1F7FD]",
};

const badgeTone: Record<string, string> = {
  monthly: "bg-[#d9f0e2] text-[#1f6b45]",
  yearly: "bg-[#e6defb] text-[#5b468f]",
};

const buttonTone = {
  outline: "border border-[#ddd6cc] bg-white text-ink hover:bg-[#faf7f2]",
  solid: "bg-ink text-cream hover:bg-[#2c2824]",
  "outline-purple": "border border-[#c8b8ef] bg-white text-[#3d2e6b] hover:bg-[#f7f4ff]",
} as const;

export function Pricing() {
  return (
    <section id="plans" className="scroll-mt-24">
      <div id="pricing" className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-center text-[11px] font-extrabold tracking-[0.2em] text-muted uppercase">Pricing</p>
        <h2 className="mt-3 text-center font-serif text-[2.1rem] font-semibold tracking-[-0.02em] sm:text-5xl">
          Simple plans. More freedom.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-body">
          Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
        </p>
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.id} className={`relative flex h-full flex-col rounded-[28px] p-6 ${cardTone[plan.tone]}`}>
              {plan.badge ? (
                <span className={`absolute top-4 right-4 rounded-full px-2.5 py-1 text-[10px] font-extrabold ${badgeTone[plan.id] ?? ""}`}>
                  {plan.badge}
                </span>
              ) : null}
              <h3 className="font-serif text-[1.7rem] font-semibold">{plan.name}</h3>
              <p className="mt-1 min-h-10 text-sm leading-snug text-body">{plan.subtitle}</p>
              <p className="mt-4 font-serif text-5xl font-semibold tracking-tight">
                {plan.price}
                {plan.cadence ? <span className="font-sans text-base font-bold text-muted">{plan.cadence}</span> : null}
              </p>
              <p className="mt-1 h-5 text-sm font-bold text-muted">{plan.note ?? ""}</p>
              <ul className="mt-4 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-[14px] leading-snug font-semibold">
                    <span className="mt-0.5 text-[#3d9a62]" aria-hidden="true">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={site.playStoreUrl} className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-4 py-2.5 text-sm font-extrabold ${buttonTone[plan.button]}`}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
