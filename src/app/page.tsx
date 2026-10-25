import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Showcase />
      <Testimonials />
      <Faq />
      <ClosingCta />
    </main>
  );
}
