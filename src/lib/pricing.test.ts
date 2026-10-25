import { describe, expect, it } from "vitest";
import { plans, yearlySavingsPercent } from "./pricing";

describe("pricing", () => {
  it("rounds the yearly plan to a 37% savings versus monthly", () => {
    expect(yearlySavingsPercent()).toBe(37);
    expect(yearlySavingsPercent(1.99, 14.99)).toBe(37);
  });

  it("lists the four mockup plans with monthly marked most popular", () => {
    expect(plans.map((plan) => plan.price)).toEqual(["$0", "$1.99", "$14.99", "$29.99"]);
    expect(plans.find((plan) => plan.id === "monthly")?.badge).toBe("Most Popular");
    expect(plans.find((plan) => plan.id === "yearly")?.badge).toBe("Save 37%");
    expect(plans.find((plan) => plan.id === "onetime")?.cta).toBe("Buy Now");
  });
});
