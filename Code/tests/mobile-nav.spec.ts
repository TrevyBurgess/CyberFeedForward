import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["Pixel 7"] });

test("mobile menu opens, navigates, and closes", async ({ page }) => {
  await page.goto("/");

  const toggle = page.getByRole("button", { name: "Open menu" });
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  await toggle.click();
  const menu = page.getByRole("navigation", { name: "Mobile" });
  await expect(menu).toBeVisible();

  await menu.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(menu).not.toBeVisible();
});

test("mobile menu closes on Escape", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const menu = page.getByRole("navigation", { name: "Mobile" });
  await expect(menu).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
});
