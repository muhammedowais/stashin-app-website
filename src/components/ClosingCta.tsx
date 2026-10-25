import { StoreButtons } from "@/components/StoreButtons";

export function ClosingCta() {
  return (
    <section className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-8">
      <div className="rounded-[36px] border border-line bg-surface px-6 py-14 text-center sm:px-12">
        <h2 className="font-serif text-[2.1rem] leading-tight font-semibold tracking-[-0.02em] sm:text-5xl">
          Keep what matters. <em className="text-terracotta italic">Quietly.</em>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-body">
          Free on Android. Pro when you want every folder, every icon, and a private backup.
        </p>
        <StoreButtons align="center" className="mt-8" />
      </div>
    </section>
  );
}
