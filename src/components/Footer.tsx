import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { mailto, site } from "@/lib/site";

const product = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Stashin Pro" },
  { href: "/#faq", label: "FAQ" },
  { href: "/download/", label: "Download" },
];

const legal = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/#privacy-promise", label: "Privacy Promise" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <BrandMark size={34} />
            <span className="font-serif text-[1.45rem] font-semibold tracking-tight">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-body">
            A quiet, private place for everything you save. On your phone. Nowhere else.
          </p>
        </div>
        <FooterColumn title="Product" links={product} />
        <FooterColumn title="Legal" links={legal} />
        <div>
          <h2 className="text-xs font-extrabold tracking-[0.16em] text-muted uppercase">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] font-semibold">
            <li>
              <a className="hover:text-terracotta" href={mailto(site.supportEmail, "Stashin support")}>
                {site.supportEmail}
              </a>
            </li>
            <li>
              <a className="hover:text-terracotta" href={mailto(site.privacyEmail, "Stashin privacy")}>
                {site.privacyEmail}
              </a>
            </li>
            <li className="pt-2 font-bold text-muted">{site.packageName}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-2 px-5 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {site.updatedIso.slice(0, 4)} {site.name}. All rights reserved.</p>
          <p>100% on-device · Zero tracking · No account required</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-extrabold tracking-[0.16em] text-muted uppercase">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[15px] font-semibold">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-terracotta">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
