import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PhoneMockup } from "./PhoneMockup";

describe("PhoneMockup", () => {
  it("filters the phone cards when a tab is pressed", async () => {
    const user = userEvent.setup();
    render(<PhoneMockup />);

    expect(screen.getByText("Ideas for my next app")).toBeInTheDocument();
    expect(screen.getByText("Design inspiration")).toBeInTheDocument();
    expect(screen.getByText("Workout plan")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");

    await user.click(screen.getByRole("button", { name: "Notes" }));

    expect(screen.getByText("Ideas for my next app")).toBeInTheDocument();
    expect(screen.queryByText("Design inspiration")).not.toBeInTheDocument();
    expect(screen.queryByText("Workout plan")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Notes" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "false");

    await user.click(screen.getByRole("button", { name: "Tasks" }));
    expect(screen.getByText("Workout plan")).toBeInTheDocument();
    expect(screen.queryByText("Ideas for my next app")).not.toBeInTheDocument();
  });
});
