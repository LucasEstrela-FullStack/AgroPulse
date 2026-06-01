import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DashboardPreview } from "@/features/dashboard/components/dashboard-preview";
import { TestQueryProvider } from "@/tests/test-query-provider";

describe("DashboardPreview", () => {
  it("renders AgroPulse dashboard heading", async () => {
    render(
      <TestQueryProvider>
        <DashboardPreview />
      </TestQueryProvider>
    );

    expect(await screen.findByRole("heading", { name: "AgroPulse" })).toBeInTheDocument();
  });
});
