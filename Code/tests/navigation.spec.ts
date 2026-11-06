import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", heading: /stay ahead of the threat/i },
  { path: "/services", heading: /^services$/i },
  { path: "/blog", heading: /^insights$/i },
  { path: "/about", heading: /about us/i },
  { path: "/contact", heading: /^contact$/i },
];

for (const { path, heading } of pages) {
  test(`${path} loads with expected heading`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.ok()).toBeTruthy();
    await expect(
      page.getByRole("heading", { level: 1, name: heading }),
    ).toBeVisible();
  });
}

test("footer and header navigation links resolve", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Main" })
    .getByRole("link", { name: "Services" })
    .click();
  await expect(page).toHaveURL(/\/services$/);
});

test("skip link targets main content", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("main")).toHaveId("main-content");
});
