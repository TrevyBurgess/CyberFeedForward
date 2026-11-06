import { test, expect } from "@playwright/test";

test("contact form validates and warns nothing was sent", async ({ page }) => {
  await page.goto("/contact");

  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Message").fill("Hello");
  await page.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByRole("status")).toContainText(
    "not yet wired to a backend",
  );
});
