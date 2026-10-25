import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PhoneMockup } from "./PhoneMockup";

describe("PhoneMockup", () => {
  it("filters the saved cards when a folder pill is pressed", async () => {
    const user = userEvent.setup();
    render(<PhoneMockup />);

    expect(screen.getByText("How warm editorial interfaces calm digital clutter")).toBeInTheDocument();
    expect(screen.getByText("Duplicate Checked")).toBeInTheDocument();
    expect(screen.getByText("📌 Pinned")).toBeInTheDocument();
    expect(screen.getByText("𝕏 · x.com")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Recipes/i }));

    expect(screen.queryByText("How warm editorial interfaces calm digital clutter")).not.toBeInTheDocument();
    expect(screen.getByText("Brown butter miso noodles for slow Sundays")).toBeInTheDocument();
    expect(screen.getByText("📸 · Instagram")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Recipes/i })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /Design Inspo/i })).toHaveAttribute("aria-pressed", "false");
  });
});
