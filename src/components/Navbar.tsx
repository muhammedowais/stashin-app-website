"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { CloseGlyph, MenuGlyph } from "@/components/icons";
import { navLinks, site } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  const path = href.replace(/\/$/, "") || "/";
  const current = pathname.replace(/\/$/, "") || "/";
  return current === path;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1160px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <BrandMark size={34} />
          <span className="font-serif text-[1.45rem] leading-none font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 min-[1180px]:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className="text-[15px] font-semibold text-body transition-colors hover:text-ink aria-[current=page]:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.playStoreUrl}
            className="btn btn-primary hidden min-h-11 px-4 py-2.5 text-sm sm:inline-flex"
          >
            Get Stashin Free
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-card text-ink min-[1180px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseGlyph className="h-5 w-5" /> : <MenuGlyph className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-cream px-5 py-4 min-[1180px]:hidden sm:px-8"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  className="block py-3.5 text-lg font-bold"
                  aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={site.playStoreUrl} className="btn btn-primary mt-4 w-full">
            Get Stashin Free
          </a>
        </nav>
      ) : null}
    </header>
  );
}
