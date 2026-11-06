import { test, expect } from "@playwright/test";

test("blog index lists posts", async ({ page }) => {
  await page.goto("/blog");
  const articles = page.getByRole("article");
  await expect(articles.first()).toBeVisible();
  expect(await articles.count()).toBeGreaterThanOrEqual(3);
});

test("post page renders content and metadata", async ({ page }) => {
  await page.goto("/blog/welcome-to-cyberfeedforward");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Welcome to CyberFeedForward",
    }),
  ).toBeVisible();
  await expect(page.getByRole("time")).toBeVisible();
});

test("unknown post returns 404 page", async ({ page }) => {
  const response = await page.goto("/blog/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "Page not found" }),
  ).toBeVisible();
});
