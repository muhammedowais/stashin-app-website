"use client";

import { useId, useState } from "react";
import { ChevronGlyph } from "@/components/icons";
import { faqs } from "@/lib/faq";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section id="faq" className="mx-auto w-full max-w-[860px] px-5 pb-8 sm:px-8">
      <p className="text-center text-xs font-extrabold tracking-[0.18em] text-muted uppercase">FAQ</p>
      <h2 className="mt-3 text-center font-serif text-[2rem] font-semibold tracking-[-0.02em] sm:text-5xl">
        Questions, answered plainly.
      </h2>
      <div className="mt-10 divide-y divide-line overflow-hidden rounded-[28px] border border-line bg-card">
        {faqs.map((item) => {
          const open = openId === item.id;
          const panelId = `${baseId}-${item.id}`;
          const buttonId = `${panelId}-button`;
          return (
            <div key={item.id}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-extrabold sm:px-7 sm:text-lg"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  {item.question}
                  <ChevronGlyph
                    className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              {open ? (
                <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-6 sm:px-7">
                  <p className="max-w-2xl text-[15px] leading-relaxed text-body">{item.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
