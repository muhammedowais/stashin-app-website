"use client";

import { useState } from "react";
import { itemsForTab, previewTabs, type TabId } from "@/lib/stash";

export function PhoneMockup() {
  const [tab, setTab] = useState<TabId>("all");
  const items = itemsForTab(tab);

  return (
    <div className="relative mx-auto w-full max-w-[360px]" role="region" aria-label="Stashin app preview">
      <div className="pointer-events-none absolute -top-8 -left-10 h-36 w-36 rounded-full bg-[#d9f0e2] blur-2xl" />
      <div className="pointer-events-none absolute top-10 -right-8 h-32 w-32 rounded-full bg-[#f8d9cc] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-6 left-8 h-36 w-36 rounded-full bg-[#e6defb] blur-2xl" />
      <div className="pointer-events-none absolute right-6 bottom-16 h-24 w-24 rounded-full bg-[#d7e7f8] blur-2xl" />

      <div className="pointer-events-none absolute -top-2 -right-2 z-20 hidden rotate-6 sm:block">
        <p className="font-script text-[28px] text-[#5d7ea3]">Save anything</p>
        <svg viewBox="0 0 84 46" className="ml-6 h-10 w-16 text-[#7aa0c4]" fill="none" aria-hidden="true">
          <path d="M8 8c18 2 32 10 48 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M48 24c6 4 10 8 14 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M52 34c6-1 10-2 14-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 rounded-[42px] border border-[#ece7df] bg-[#f7f4ef] p-2.5 shadow-[0_30px_70px_-36px_rgba(40,32,24,0.55)]">
        <div className="relative overflow-hidden rounded-[32px] bg-white">
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-extrabold text-ink">
            <span>9:41</span>
            <span className="flex items-center gap-1.5 text-ink" aria-hidden="true">
              <svg viewBox="0 0 16 12" className="h-2.5 w-3.5"><path fill="currentColor" d="M1 8h2v3H1zm4-3h2v6H5zm4-3h2v9H9zm4-2h2v11h-2z" /></svg>
              <svg viewBox="0 0 16 12" className="h-2.5 w-3.5"><path fill="none" stroke="currentColor" strokeWidth="1.4" d="M1.5 5.5a7 7 0 0 1 13 0M4 8a4 4 0 0 1 8 0" /><circle cx="8" cy="10.2" r="1" fill="currentColor" /></svg>
              <svg viewBox="0 0 22 12" className="h-2.5 w-5"><rect x="0.6" y="1" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" /><rect x="2" y="2.4" width="12" height="7.2" rx="1" fill="currentColor" /><rect x="19.2" y="4" width="1.6" height="4" rx="0.4" fill="currentColor" /></svg>
            </span>
          </div>

          <div className="flex items-center justify-between px-4 pt-2">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 16 16" className="h-6 w-6" aria-hidden="true"><rect width="16" height="16" rx="4" fill="#1E1B18" /><path fill="#FAF6F0" d="M5 3.2h6c.4 0 .7.3.7.8v8.2L8 10.2 4.3 12.2V4c0-.5.3-.8.7-.8Z" /></svg>
              <span className="font-serif text-[15px] font-bold">Stashin</span>
            </div>
            <div className="flex items-center gap-2 text-ink" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none"><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" /><path d="M16 16.5 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><circle cx="6" cy="12" r="1.4" /><circle cx="12" cy="12" r="1.4" /><circle cx="18" cy="12" r="1.4" /></svg>
            </div>
          </div>

          <div className="mt-3 flex gap-1.5 px-3" role="toolbar" aria-label="Filters">
            {previewTabs.map((item) => {
              const active = item.id === tab;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTab(item.id)}
                  className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${active ? "bg-ink text-cream" : "bg-[#f4f1eb] text-[#5e584f]"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div key={tab} className="rise space-y-2.5 px-3 pt-3 pb-16" aria-live="polite">
            {items.map((item) => (
              <PreviewCard key={item.id} id={item.id} />
            ))}
          </div>

          <button
            type="button"
            aria-label="Add"
            className="absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-full bg-ink text-2xl leading-none text-cream shadow-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function PreviewCard({ id }: { id: string }) {
  if (id === "next-app") {
    return (
      <article className="rounded-2xl bg-[#fbf3dd] px-3 py-2.5">
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-[#f3d48a] px-2 py-0.5 text-[10px] font-extrabold text-[#7a5a12]">Note</span>
          <Pin />
        </div>
        <h3 className="mt-1.5 text-[13px] font-extrabold">Ideas for my next app</h3>
        <p className="mt-0.5 text-[11px] leading-snug text-[#6d6458]">
          Build a simple, local-first app with offline support and sync later.
        </p>
        <p className="mt-1.5 text-[10px] font-bold text-[#8a8174]">Today · 10:24 AM</p>
      </article>
    );
  }
  if (id === "design") {
    return (
      <article className="rounded-2xl border border-[#eee8f8] bg-[#fbfaff] px-3 py-2.5">
        <div className="flex items-start justify-between">
          <span className="flex gap-1">
            <span className="rounded-full bg-[#ece4fb] px-2 py-0.5 text-[10px] font-extrabold text-[#5a468c]">Link</span>
            <span className="rounded-full bg-[#e7eef8] px-2 py-0.5 text-[10px] font-extrabold text-[#3d5d86]">Web</span>
          </span>
          <External />
        </div>
        <h3 className="mt-1.5 text-[13px] font-extrabold">Design inspiration</h3>
        <p className="text-[11px] font-bold text-[#7d6ea8]">dribbble.com</p>
        <p className="mt-1.5 text-[10px] font-bold text-[#8a8174]">Yesterday</p>
      </article>
    );
  }
  return (
    <article className="rounded-2xl bg-[#fde8df] px-3 py-2.5">
      <div className="flex items-start justify-between">
        <span className="rounded-full bg-[#f7c7b4] px-2 py-0.5 text-[10px] font-extrabold text-[#8a4632]">Task</span>
        <span className="text-[#b0897c]" aria-hidden="true">•••</span>
      </div>
      <h3 className="mt-1.5 text-[13px] font-extrabold">Workout plan</h3>
      <ul className="mt-1 space-y-0.5 text-[11px] font-bold text-[#6d5348]">
        <li className="flex items-center gap-1.5"><span className="grid h-3 w-3 place-items-center rounded-[3px] border border-[#d7a894] text-[8px]">✓</span>30 mins walk</li>
        <li className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-[3px] border border-[#d7a894]" />Core exercises</li>
      </ul>
      <p className="mt-1.5 text-[10px] font-bold text-[#8a8174]">Tue, 8:00 AM</p>
    </article>
  );
}

function Pin() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#c45c3e]" aria-hidden="true">
      <path fill="currentColor" d="M9.2 1.6 14.4 6.8l-1.2 1.2-1.5-1.5-3.2 3.2.4 2.3-1.6 1.6L5.6 12 2.4 15.2 1 13.8 4.2 10.6 2.6 8.9l1.6-1.6 2.3.4 3.2-3.2-1.5-1.5 1-.4Z" />
    </svg>
  );
}

function External() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#8d7eae]" fill="none" aria-hidden="true">
      <path d="M6 4H4.5A1.5 1.5 0 0 0 3 5.5v6A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.5-1.5V10" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 8 13 3m0 0H9.5M13 3v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
