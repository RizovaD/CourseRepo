import { test, expect } from "@playwright/test";

// Add the web form link as an environment variable and use it in the beforeEach hook (https://testpages.herokuapp.com/styled/basic-html-form-test.html).
const PAGE_URL =
  process.env.PAGE_URL ||
  "https://testpages.herokuapp.com/styled/basic-html-form-test.html";

// Wrap all tests within a describe block to improve structure.
test.describe("Basic HTML Form Tests", () => {
  // beforeEach hook to navigate before each test
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE_URL);
  });

  test.describe("UI Element Checks", () => {
    test("Has h1 title", async ({ page }) => {
      const title = page.locator("xpath=//h1");
      await expect(title).toHaveText("Basic HTML Form Example");
    });

    test("Test username field", async ({ page }) => {
      const usernameInput = page.locator("xpath=//input[@name='username']");
      await expect(usernameInput).toBeVisible();
      await usernameInput.fill("Donika");
      await expect(usernameInput).toHaveValue("Donika");
    });

    test("CheckBox selection", async ({ page }) => {
      const checkboxE1 = page.locator('xpath=//input[@value="cb2"]');
      await expect(checkboxE1).toBeVisible();
      await checkboxE1.check();
      await expect(checkboxE1).toBeChecked();
    });

    test("Select dropdown option", async ({ page }) => {
      const dropdown = page.locator('xpath=//select[@name="dropdown"]');
      await expect(dropdown).toBeVisible();
      await dropdown.selectOption("dd3");
      await expect(dropdown).toHaveValue("dd3");
    });
    // Locate the Password field, fill it with a test value, and validate the input.
    test("Test password field", async ({ page }) => {
      const passwordInput = page.locator("xpath=//input[@name='password']");
      await expect(passwordInput).toBeVisible();
      await passwordInput.fill("P@ssword01");
      await expect(passwordInput).toHaveValue("P@ssword01");
    });
    // Locate the TextArea field, fill it with a test value, and validate the input.
    test("Test TextArea field", async ({ page }) => {
      const textArea = page.locator("xpath=//textarea[@name='comments']");
      await expect(textArea).toBeVisible();
      await textArea.fill("This is a test comment.");
      await expect(textArea).toHaveValue("This is a test comment.");
    });
    // After the checkbox test, add a similar test for Radio Items.
    test("Radio button selection", async ({ page }) => {
      const radioButtonE1 = page.locator('xpath=//input[@value="rd2"]');
      await expect(radioButtonE1).toBeVisible();
      await radioButtonE1.check();
      await expect(radioButtonE1).toBeChecked();
    });
    // Finally, submit the form by locating the input with type="submit" and triggering a click action.
    test("Submit the form", async ({ page }) => {
      const submitButton = page.locator('xpath=//input[@type="submit"]');
      await expect(submitButton).toBeVisible();
      await submitButton.click();
    });
  });
});
