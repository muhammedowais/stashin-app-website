export const MONTHLY_USD = 1.99;
export const YEARLY_USD = 14.99;
export const LIFETIME_USD = 29.99;

/** Percent saved versus twelve monthly payments, rounded to the nearest integer. */
export function yearlySavingsPercent(monthly = MONTHLY_USD, yearly = YEARLY_USD) {
  const fullYear = monthly * 12;
  return Math.round((1 - yearly / fullYear) * 100);
}

export type PlanTone = "white" | "mint" | "lavender" | "sky";

export type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  cadence?: string;
  note?: string;
  badge?: string;
  features: string[];
  cta: string;
  tone: PlanTone;
  button: "outline" | "solid" | "outline-purple";
};

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    subtitle: "Perfect for getting started.",
    price: "$0",
    cadence: "/month",
    tone: "white",
    button: "outline",
    cta: "Get Started",
    features: [
      "Save unlimited notes, links, and files",
      "Basic organization and search",
      "Works offline",
      "No ads",
      "Access on Android",
    ],
  },
  {
    id: "monthly",
    name: "Monthly",
    subtitle: "For power users and regular savers.",
    price: "$1.99",
    cadence: "/month",
    badge: "Most Popular",
    tone: "mint",
    button: "solid",
    cta: "Upgrade to Monthly",
    features: [
      "Everything in Free, plus:",
      "Unlimited storage",
      "Smart duplicate detection",
      "Biometric lock",
      "Advanced search & filters",
      "Priority support",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    subtitle: "Best value for long-term use.",
    price: "$14.99",
    cadence: "/year",
    note: "(~$1.25/month)",
    badge: `Save ${yearlySavingsPercent()}%`,
    tone: "lavender",
    button: "outline-purple",
    cta: "Upgrade to Yearly",
    features: [
      "Everything in Monthly, plus:",
      "2x more storage",
      "Early access to new features",
      "Priority support",
    ],
  },
  {
    id: "onetime",
    name: "Onetime",
    subtitle: "Pay once. Keep forever.",
    price: "$29.99",
    tone: "sky",
    button: "outline",
    cta: "Buy Now",
    features: [
      "Lifetime access",
      "Unlimited storage",
      "All premium features",
      "Future updates included",
      "Priority support",
    ],
  },
];
