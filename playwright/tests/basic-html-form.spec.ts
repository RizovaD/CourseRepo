import { test, expect } from "@playwright/test";

test("Has h1 title", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
  const title = page.locator("xpath=//h1");
  await expect(title).toHaveText("Basic HTML Form Example");
});

test("Test username field", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("Donika");
  await expect(usernameInput).toHaveValue("Donika");
});

test("CheckBox selection", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
  const checkboxE1 = page.locator('xpath=//input[@value="cb2"]');
  await expect(checkboxE1).toBeVisible();
  await checkboxE1.check();
  await expect(checkboxE1).toBeChecked();
});

test("Select dropwown option", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
  const dropdown = page.locator('xpath=//select[@name="dropdown"]');
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption("dd3");
  await expect(dropdown).toHaveValue("dd3");
});