import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DashboardPreview } from "@/features/dashboard/components/dashboard-preview";

describe("DashboardPreview", () => {
  it("renders AgroPulse dashboard heading", () => {
    render(<DashboardPreview />);

    expect(screen.getByRole("heading", { name: "AgroPulse" })).toBeInTheDocument();
  });
});
