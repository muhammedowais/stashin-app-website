import { describe, expect, it } from "vitest";
import { itemsForTab, previewItems, previewTabs } from "./stash";

describe("stash preview", () => {
  it("shows every kind on All and only that kind on a filter", () => {
    expect(previewTabs.map((tab) => tab.id)).toEqual(["all", "notes", "links", "tasks"]);
    expect(itemsForTab("all")).toEqual(previewItems);
    expect(itemsForTab("notes").map((item) => item.title)).toEqual(["Ideas for my next app"]);
    expect(itemsForTab("links").map((item) => item.title)).toEqual(["Design inspiration"]);
    expect(itemsForTab("tasks").map((item) => item.title)).toEqual(["Workout plan"]);
  });

  it("does not leak items across filters", () => {
    const notes = new Set(itemsForTab("notes").map((item) => item.id));
    for (const item of itemsForTab("links")) {
      expect(notes.has(item.id)).toBe(false);
    }
  });
});
