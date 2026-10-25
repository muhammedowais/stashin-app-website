import { describe, expect, it } from "vitest";
import { freeFeatures, proFeatures, proTiers, yearlySavingsPercent } from "./pricing";

describe("pricing", () => {
  it("rounds the yearly plan to a 37% savings versus monthly", () => {
    expect(yearlySavingsPercent()).toBe(37);
    expect(yearlySavingsPercent(1.99, 14.99)).toBe(37);
  });

  it("lists the three Pro prices with the yearly plan marked popular", () => {
    expect(proTiers.map((tier) => tier.price)).toEqual(["$1.99", "$14.99", "$29.99"]);
    expect(proTiers.find((tier) => tier.popular)?.detail).toContain("7-Day Free Trial");
    expect(proTiers.find((tier) => tier.id === "lifetime")?.detail).toMatch(/Pay once/i);
  });

  it("keeps the free tier and Pro unlocks distinct", () => {
    expect(freeFeatures.length).toBeGreaterThan(8);
    expect(proFeatures).toEqual(expect.arrayContaining([expect.stringMatching(/OCR/i), expect.stringMatching(/Drive/i)]));
    expect(freeFeatures.join(" ")).not.toMatch(/Unlimited folders/);
  });
});
