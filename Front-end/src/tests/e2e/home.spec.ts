import { expect, test } from "@playwright/test";

test("loads the AgroPulse dashboard", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "AgroPulse" })).toBeVisible();
});
