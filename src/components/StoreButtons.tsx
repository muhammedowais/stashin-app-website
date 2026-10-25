import { site } from "@/lib/site";

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path fill="#34A853" d="M3.5 2.8v18.4c0 .5.5.8.9.5l10.2-9.7L3.5 2.8Z" />
      <path fill="#FBBC04" d="m14.6 12-3.2 3 4.8 2.8 3.6-2.1c.7-.4.7-1.4 0-1.8L16.2 11l-1.6 1Z" />
      <path fill="#EA4335" d="M11.4 9 3.5 2.8c.4-.3.9-.1 1.2.1l8.1 4.6L11.4 9Z" />
      <path fill="#4285F4" d="m16.2 13 3.6 2.1c.7.4.7 1.4 0 1.8l-3.6 2.1-4.8-2.8 4.8-3.2Z" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-white">
      <path d="M16.4 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-.9-2.4-3.7ZM14.7 6.6c.6-.8 1.1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.8-.9 2.9 1.1.1 2.1-.5 2.8-1.4Z" />
    </svg>
  );
}

const badgeClass =
  "inline-flex min-h-12 min-w-[168px] items-center gap-2.5 rounded-xl bg-ink px-3.5 py-2 text-left text-cream shadow-[0_8px_20px_-16px_rgba(30,27,24,0.8)] transition hover:bg-[#2c2824]";

export function StoreButtons({
  align = "start",
  className = "",
}: {
  align?: "start" | "center";
  className?: string;
}) {
  const justify = align === "center" ? "sm:justify-center" : "";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${justify} ${className}`}>
      <a className={badgeClass} href={site.playStoreUrl}>
        <PlayMark />
        <span className="leading-none">
          <span className="block text-[9px] font-bold tracking-[0.08em] uppercase">Get it on</span>
          <span className="mt-0.5 block text-[15px] font-extrabold tracking-tight">Google Play</span>
        </span>
      </a>
      <a className={badgeClass} href={site.appStoreUrl}>
        <AppleMark />
        <span className="leading-none">
          <span className="block text-[9px] font-bold tracking-[0.04em]">Download on the</span>
          <span className="mt-0.5 block text-[16px] font-extrabold tracking-tight">App Store</span>
        </span>
      </a>
    </div>
  );
}
