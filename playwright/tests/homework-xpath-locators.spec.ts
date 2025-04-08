import { test, expect, Page } from "@playwright/test";
import path from "path";

interface Results {
  username: string;
  password: string;
  dropdownValue: string;
}

const results = {
  username: "Donika",
  password: "P@ssword01",
  dropdownValue: "dd3",
};

const fillFields = async (page: Page, resultsObj: Results) => {
  //locate and fill Username input
  await test.step("Enter username", async () => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill("Donika");
    await expect(usernameInput).toHaveValue(resultsObj.username);
  });

  await test.step("Enter Password", async () => {
    //Locate and fill in Password
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill(resultsObj.password);
    await expect(passwordInput).toHaveValue(resultsObj.password);
  });

  await test.step("Locate and check checkbox", async () => {
    //Locate and check checkbox
    const checkboxE1 = page.locator('xpath=//input[@value="cb2"]');
    await expect(checkboxE1).toBeVisible();
    await checkboxE1.check();
    await expect(checkboxE1).toBeChecked();
  });

  await test.step("Locate and click radio buuton", async () => {
    //Locate and click radio buuton
    const radioButtonE1 = page.locator('xpath=//input[@value="rd2"]');
    await expect(radioButtonE1).toBeVisible();
    await radioButtonE1.check();
    await expect(radioButtonE1).toBeChecked();
  });

  await test.step("Locate and select dropdownn", async () => {
    //Locate and select dropdown
    const dropdown = page.locator('xpath=//select[@name="dropdown"]');
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption(resultsObj.dropdownValue);
    await expect(dropdown).toHaveValue(resultsObj.dropdownValue);
  });
};
//1. Homework -  Add the web form link as an environment variable and use it in the beforeEach hook (https://testpages.herokuapp.com/styled/basic-html-form-test.html).
// const PAGE_URL =
//   process.env.PAGE_URL ||
//   "https://testpages.herokuapp.com/styled/basic-html-form-test.html";

//2. Homework - Wrap all tests within a describe block to improve structure.
test.describe("Basic HTML Form Tests", () => {
  // beforeEach hook to navigate before each test
  test.beforeEach(async ({ page }) => {
    const PAGE_URL = process.env.PAGE_URL as string;
    await page.goto(PAGE_URL);
  });

  test.describe("UI Element Checks", () => {
    test("Has h1 title", async ({ page }) => {
      const title = page.locator("xpath=//h1");
      await expect(title).toHaveText("Basic HTML Form Example");
    });

    test("Reset button", async ({ page }) => {
      const cancelBtn = page.locator('xpath=//input[@type="reset"]');
      await expect(cancelBtn).toBeVisible();
      await fillFields(page, results);
      await cancelBtn.click();

      await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
        ""
      );
      await expect(page.locator("xpath=//input[@name='password']")).toHaveValue(
        ""
      );
    });

    test("Submit Form", async ({ page }) => {
      const submitButton = page.locator('xpath=//input[@type="submit"]');
      await expect(submitButton).toBeVisible();
      await fillFields(page, results);
      await submitButton.click();

      await expect(page).toHaveURL(
        "https://testpages.herokuapp.com/styled/the_form_processor.php"
      );

      const usernameValue = page.locator('xpath=//li[@id="_valueusername"]');
      await expect(usernameValue).toHaveText("Donika");

      const dropdownValue = page.locator('xpath=//li[@id="_valuedropdown"]');
      await expect(dropdownValue).toHaveText("dd3");
    });

    // test("Test username field", async ({ page }) => {
    //   const usernameInput = page.locator("xpath=//input[@name='username']");
    //   await expect(usernameInput).toBeVisible();
    //   await usernameInput.fill("Donika");
    //   await expect(usernameInput).toHaveValue("Donika");
    // });

    // test("CheckBox selection", async ({ page }) => {
    // const checkboxE1 = page.locator('xpath=//input[@value="cb2"]');
    // await expect(checkboxE1).toBeVisible();
    // await checkboxE1.check();
    // await expect(checkboxE1).toBeChecked();
    // });

    // test("Select dropdown option", async ({ page }) => {
    //   const dropdown = page.locator('xpath=//select[@name="dropdown"]');
    //   await expect(dropdown).toBeVisible();
    //   await dropdown.selectOption("dd3");
    //   await expect(dropdown).toHaveValue("dd3");
    //});
    // //3. Homework - Locate the Password field, fill it with a test value, and validate the input.
    // test("Test password field", async ({ page }) => {
    //   const passwordInput = page.locator("xpath=//input[@name='password']");
    //   await expect(passwordInput).toBeVisible();
    //   await passwordInput.fill("P@ssword01");
    //   await expect(passwordInput).toHaveValue("P@ssword01");
    // });
    //4. Homework - Locate the TextArea field, fill it with a test value, and validate the input.
    // test("Test TextArea field", async ({ page }) => {
    //   const textArea = page.locator("xpath=//textarea[@name='comments']");
    //   await expect(textArea).toBeVisible();
    //   await textArea.fill("This is a test comment.");
    //   await expect(textArea).toHaveValue("This is a test comment.");
    //});
    // //5.Homework - After the checkbox test, add a similar test for Radio Items.
    // test("Radio button selection", async ({ page }) => {
    //   const radioButtonE1 = page.locator('xpath=//input[@value="rd2"]');
    //   await expect(radioButtonE1).toBeVisible();
    //   await radioButtonE1.check();
    //   await expect(radioButtonE1).toBeChecked();
    // });
    // 6,Homework - Finally, submit the form by locating the input with type="submit" and triggering a click action.
    test("Submit the form", async ({ page }) => {
      const submitButton = page.locator('xpath=//input[@type="submit"]');
      await expect(submitButton).toBeVisible();
      await submitButton.click();
    });

    //Upload File
    test("Upload file", async ({ page }) => {
      const uploadBtn = page.locator('xpath=//input[@type="file"]');
      const filePath = path.resolve(__dirname, "./test.txt");
      await expect(uploadBtn).toBeVisible();
      await uploadBtn.setInputFiles(filePath);
    });
  });
});
