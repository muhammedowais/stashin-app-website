import { describe, expect, it } from "vitest";
import { cardsForFolder, folders, savedCards, sources } from "./stash";

describe("stash preview", () => {
  it("gives every folder at least two cards with a known source", () => {
    for (const folder of folders) {
      const cards = cardsForFolder(folder.id);
      expect(cards.length).toBeGreaterThanOrEqual(2);
      for (const card of cards) {
        expect(sources[card.source].label).toMatch(/x\.com|YouTube|Instagram|Web/);
        expect(card.folder).toBe(folder.label);
        expect(card.tags.length).toBeGreaterThan(0);
      }
    }
  });

  it("shows duplicate and pinned badges on the default design folder", () => {
    const badges = cardsForFolder("design").map((card) => card.badge);
    expect(badges).toContain("duplicate");
    expect(badges).toContain("pinned");
  });

  it("does not leak cards across folders", () => {
    const designIds = new Set(cardsForFolder("design").map((card) => card.id));
    for (const card of cardsForFolder("recipes")) {
      expect(designIds.has(card.id)).toBe(false);
    }
    expect(savedCards.length).toBe(folders.length * 2);
  });
});
