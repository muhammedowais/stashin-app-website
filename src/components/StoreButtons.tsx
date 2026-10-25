import Link from "next/link";
import { DownloadGlyph, PlayGlyph } from "@/components/icons";
import { site } from "@/lib/site";

type StoreButtonsProps = {
  align?: "start" | "center";
  className?: string;
};

export function StoreButtons({ align = "start", className = "" }: StoreButtonsProps) {
  const justify = align === "center" ? "sm:justify-center" : "";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${justify} ${className}`}>
      <a className="btn btn-primary min-h-12 px-5 text-[15px]" href={site.playStoreUrl}>
        <PlayGlyph className="h-4 w-4" />
        Download on Google Play
      </a>
      <Link className="btn btn-secondary min-h-12 px-5 text-[15px]" href="/download/#apk">
        <DownloadGlyph className="h-4 w-4" />
        Direct APK · v{site.version}
      </Link>
    </div>
  );
}
