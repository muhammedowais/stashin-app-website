"use client";

import { useState } from "react";
import { cardsForFolder, folders, sources, type FolderId } from "@/lib/stash";

const badgeCopy = {
  duplicate: "Duplicate Checked",
  pinned: "📌 Pinned",
} as const;

export function PhoneMockup() {
  const [folderId, setFolderId] = useState<FolderId>("design");
  const cards = cardsForFolder(folderId);

  return (
    <div
      className="relative mx-auto w-full max-w-[460px]"
      role="region"
      aria-label="Interactive preview of the Stashin app"
    >
      <div className="rounded-[36px] border border-line-strong bg-gradient-to-b from-[#F7F1E8] to-surface p-3.5 shadow-[0_30px_70px_-36px_rgba(30,27,24,0.55)] sm:p-4">
        <div className="rounded-[28px] border border-[#EFE6DA] bg-card px-4 pt-5 pb-4 sm:px-5">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-serif text-[1.85rem] leading-none font-semibold tracking-tight">My Stash</h2>
            <span className="mt-1 inline-flex items-center rounded-full bg-ink px-3 py-1.5 text-[11px] font-extrabold tracking-wide text-cream">
              ★ Pro Active
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2" role="toolbar" aria-label="Folders">
            {folders.map((folder) => {
              const active = folder.id === folderId;
              return (
                <button
                  key={folder.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFolderId(folder.id)}
                  className={`inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-extrabold transition-colors ${
                    active ? "bg-ink text-cream" : folder.idleClass
                  }`}
                >
                  <span aria-hidden="true">{folder.emoji}</span>
                  {folder.label}
                  <span className={active ? "text-cream/70" : "opacity-70"}>({folder.count})</span>
                </button>
              );
            })}
          </div>

          <div key={folderId} className="rise mt-4 space-y-3" aria-live="polite">
            {cards.map((card) => {
              const source = sources[card.source];
              return (
                <article key={card.id} className="rounded-[20px] border border-line bg-card px-3.5 py-3.5 shadow-[0_1px_0_rgba(30,27,24,0.03)]">
                  <div className="flex items-start justify-between gap-2">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-extrabold ${source.chipClass}`}>
                      {source.label}
                    </span>
                    {card.badge ? (
                      <span
                        className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[11px] font-extrabold ${
                          card.badge === "duplicate"
                            ? "bg-amber text-amber-ink"
                            : "bg-peach text-peach-ink"
                        }`}
                      >
                        {badgeCopy[card.badge]}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 font-serif text-[17px] leading-snug font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13px] font-bold text-body">{card.folder}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    {card.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-surface px-2 py-0.5 text-[11px] font-extrabold text-muted">
                        #{tag}
                      </span>
                    ))}
                    <span className="ml-auto text-[11px] font-bold text-muted">{card.time}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
