import { Bento } from "@/components/Bento";
import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { PrivacyPromise } from "@/components/PrivacyPromise";
import { Roadmap } from "@/components/Roadmap";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Bento />
      <HowItWorks />
      <PrivacyPromise />
      <Pricing />
      <Roadmap />
      <Faq />
      <ClosingCta />
    </main>
  );
}
