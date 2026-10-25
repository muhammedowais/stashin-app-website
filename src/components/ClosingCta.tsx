import { BrandMark } from "@/components/BrandMark";
import { StoreButtons } from "@/components/StoreButtons";

export function ClosingCta() {
  return (
    <section className="mx-auto w-full max-w-[1160px] px-5 py-12 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] bg-[linear-gradient(90deg,#E8F3EC_0%,#F1EFFA_65%,#E9E2FA_100%)] px-6 py-7 sm:px-8 lg:flex-row lg:items-center">
        <div className="flex items-start gap-4">
          <BrandMark size={44} />
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Keep what matters. <em className="text-[#e07a5f] italic">Quietly.</em>
            </h2>
            <p className="mt-1 max-w-xl text-[15px] text-body">
              Download Stashin today and get your notes, links, and ideas in one private place.
            </p>
          </div>
        </div>
        <StoreButtons />
      </div>
    </section>
  );
}
