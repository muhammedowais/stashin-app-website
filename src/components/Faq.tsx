"use client";

import { useId, useState } from "react";
import { ChevronGlyph } from "@/components/icons";
import { faqs } from "@/lib/faq";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section id="faq" className="mx-auto w-full max-w-[1160px] px-5 pb-8 sm:px-8">
      <p className="text-center text-[11px] font-extrabold tracking-[0.2em] text-muted uppercase">FAQ</p>
      <h2 className="mt-3 text-center font-serif text-[2.1rem] font-semibold tracking-[-0.02em] sm:text-5xl">
        Questions, answered plainly.
      </h2>
      <div className="mt-10 grid items-start gap-4 lg:grid-cols-[1.35fr_0.75fr]">
        <div className="rounded-[28px] bg-white px-2 shadow-[0_18px_40px_-32px_rgba(30,27,24,0.4)] ring-1 ring-[#f0ebe3] sm:px-4">
          {faqs.map((item) => {
            const open = openId === item.id;
            const panelId = `${baseId}-${item.id}`;
            const buttonId = `${panelId}-button`;
            return (
              <div key={item.id} className="border-b border-[#f3eee6] last:border-b-0">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left text-[15px] font-bold sm:px-4"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    {item.question}
                    <ChevronGlyph className={`h-4 w-4 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                {open ? (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="px-3 pb-4 sm:px-4">
                    <p className="text-[15px] leading-relaxed text-body">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <aside className="relative overflow-hidden rounded-[28px] bg-[#EBF3EE] p-7">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-cream">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
              <path d="M12 3.5 19 6.2v6c0 4.2-2.9 6.8-7 8.3-4.1-1.5-7-4.1-7-8.3v-6L12 3.5Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M9 12.2 11 14.2 15.2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <h3 className="mt-6 font-serif text-3xl font-semibold">Your privacy matters.</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#355443]">
            We don&apos;t collect your data, track your activity, or show ads. Ever.
          </p>
          <p className="font-script mt-10 text-right text-[26px] text-[#6d8f78]">Private by design</p>
          <svg viewBox="0 0 70 36" className="ml-auto h-8 w-16 text-[#8aab94]" fill="none" aria-hidden="true">
            <path d="M8 8c16 2 28 8 44 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M44 20c4 3 8 6 12 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </aside>
      </div>
    </section>
  );
}
