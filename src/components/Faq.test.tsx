import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Faq } from "./Faq";

describe("Faq", () => {
  it("opens one answer at a time and closes it again", async () => {
    const user = userEvent.setup();
    render(<Faq />);

    const account = screen.getByRole("button", { name: /Does Stashin need an account/i });
    const drive = screen.getByRole("button", { name: /Google Drive backup/i });
    expect(account).toHaveAttribute("aria-expanded", "false");

    await user.click(account);
    expect(account).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/never asks you to sign up/i)).toBeVisible();

    await user.click(drive);
    expect(account).toHaveAttribute("aria-expanded", "false");
    expect(drive).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/appDataFolder/i)).toBeVisible();

    await user.click(drive);
    expect(drive).toHaveAttribute("aria-expanded", "false");
  });
});
