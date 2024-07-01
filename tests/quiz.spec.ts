import { test, expect } from "@playwright/test";

test("Ended successfully a quiz", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Be good/,
    })
  ).toBeVisible();

  await page.getByRole("button", { name: "TAKE THE QUIZ" }).click();

  await page.getByAltText("Temples & Crown").click();
  await page.getByRole("button", { name: "No" }).click();
  await page.getByRole("button", { name: "No" }).click();

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: /Great news/,
    })
  ).toBeVisible();
});

test("Rejected during the quiz", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Be good/,
    })
  ).toBeVisible();

  await page.getByRole("button", { name: "TAKE THE QUIZ" }).click();

  await page.getByAltText("Patchy").click();

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: /unable to prescribe/,
    })
  ).toBeVisible();
});
