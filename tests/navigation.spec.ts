import { test, expect } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#home-hero")).toBeVisible();
  await expect(page.locator("#site-header")).toBeVisible();
});

test("nav links work", async ({ page }) => {
  await page.goto("/");

  await page.click("#nav-about");
  await expect(page.locator("#about-hero")).toBeVisible();

  await page.click("#nav-blog");
  await expect(page.locator("#blog-hero")).toBeVisible();

  await page.click("#nav-contact");
  await expect(page.locator("#contact-hero")).toBeVisible();
});

test("blog post page loads", async ({ page }) => {
  await page.goto("/blog");
  await page.click("#post-link-welcome-to-cyberfeedforward");
  await expect(page.locator("#blog-post-hero")).toBeVisible();
  await expect(page.locator("#blog-post")).toBeVisible();
});
