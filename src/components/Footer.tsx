import type { ReactNode } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { site } from "@/lib/site";

const product = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#plans", label: "Plans" },
  { href: "/#faq", label: "FAQ" },
];

const legal = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/terms/#refunds", label: "Refund Policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#f0ebe3] bg-white">
      <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <BrandMark size={32} />
            <span className="font-serif text-xl font-bold">{site.name}</span>
          </Link>
          <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-body">
            A quiet, private place for everything you save.
          </p>
          <p className="mt-6 text-xs font-bold text-muted">© 2026 Stashin. All rights reserved.</p>
        </div>
        <Column title="Product" links={product} />
        <Column title="Legal" links={legal} />
        <div>
          <h2 className="text-[11px] font-extrabold tracking-[0.16em] text-muted uppercase">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm font-bold">
            <li><a className="hover:text-[#e07a5f]" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></li>
            <li><a className="hover:text-[#e07a5f]" href={site.url}>www.stashin.app</a></li>
          </ul>
          <div className="mt-4 flex gap-2">
            <Social href={site.socials.x} label="Stashin on X"><XIcon /></Social>
            <Social href={site.socials.youtube} label="Stashin on YouTube"><YouTubeIcon /></Social>
            <Social href={site.socials.instagram} label="Stashin on Instagram"><InstagramIcon /></Social>
          </div>
          <p className="mt-6 text-xs font-bold text-muted">Made for a calmer, more focused you.</p>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-[11px] font-extrabold tracking-[0.16em] text-muted uppercase">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm font-bold">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-[#e07a5f]">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-[#e6e0d6] text-ink hover:bg-[#faf7f2]">
      {children}
    </a>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path fill="currentColor" d="M14.7 10.3 21.4 3h-1.6l-5.8 6.4L9.3 3H3.6l7 10.1L3.6 21h1.6l6.2-6.8L14.7 21h5.7l-5.7-10.7Zm-2.2 2.4-.7-1L6 4.2h2.4l4.6 6.5.7 1 6 8.5h-2.4l-4.8-6.5Z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="currentColor" d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM10 15.2V9.2l5.2 3-5.2 3Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" />
    </svg>
  );
}
