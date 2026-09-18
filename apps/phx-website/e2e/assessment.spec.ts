import { expect, test } from "@playwright/test";

// Precondition: the page is published in the dataset this deployment reads.
// The spec never submits, so the Release gate does not depend on the CRM.
const route = "/home-loan-assessment/";

test("drives the purchase path by keyboard, keeps answers on Back, path switch, and refresh", async ({ page }) => {
  await page.setViewportSize({ height: 900, width: 1280 });
  await page.goto(route);

  const heading = page.getByRole("heading", { name: "What would you like to do?" });
  await expect(heading).toBeVisible();
  await expect(page.getByText("Question 1 of 1")).toBeVisible();

  // Keyboard selection never advances; Next does.
  const purchase = page.getByRole("radio", { name: /Buy a Home/ });
  await purchase.focus();
  await page.keyboard.press("Space");
  await expect(purchase).toBeChecked();
  await expect(heading).toBeVisible();
  await page.keyboard.press("Enter");

  await expect(page.getByRole("heading", { name: /In which state/ })).toBeVisible();
  await expect(page.getByText("Question 2 of 19")).toBeVisible();
  await expect(page.getByRole("heading", { name: /In which state/ })).toBeFocused();
  await page.getByRole("combobox").selectOption("AZ");
  await page.getByRole("button", { name: "Next" }).click();

  await expect(page.getByRole("heading", { name: /city/ })).toBeVisible();
  await page.getByRole("textbox").fill("Mesa");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: /budget/ })).toBeVisible();

  // Back keeps the later answer.
  await page.getByRole("button", { name: "Back" }).click();
  await expect(page.getByRole("textbox")).toHaveValue("Mesa");

  // A refresh restores the draft and reopens at the first unanswered question.
  await page.reload();
  await expect(page.getByRole("heading", { name: /budget/ })).toBeVisible();
  await expect(page.getByText("Question 4 of 19")).toBeVisible();

  // A path switch keeps shared answers and lands on the new path's first gap.
  await page.getByRole("button", { name: "Back" }).click();
  await page.getByRole("button", { name: "Back" }).click();
  await page.getByRole("button", { name: "Back" }).click();
  await page.getByRole("radio", { name: /Buy a Home/ }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: /Refinance/ })).toBeChecked();
  await expect(heading).toBeVisible();
  await page.getByRole("button", { name: "Next" }).click();

  await expect(page.getByRole("heading", { name: /refinance goals/ })).toBeVisible();
  await expect(page.getByText("Question 3 of 14")).toBeVisible();
  await expect(page.getByRole("button", { name: "See my results" })).toHaveCount(0);
});
