import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Navbar } from "./Navbar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Navbar", () => {
  it("exposes the editorial navigation and the free download call to action", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link", { name: "How It Works" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Features" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Privacy Promise" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Stashin Pro" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "FAQ" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Privacy Policy" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Get Stashin Free" }).length).toBeGreaterThan(0);
  });
});
