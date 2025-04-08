import { test, expect } from '@playwright/test';

const url = process.env.HOMEWORK_PAGE as string;

test.describe('Practice Test Automation - Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Login test - correct credentials', async ({ page }) => {
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');

    await expect(page).toHaveURL(/.*practicetestautomation\.com\/logged-in-successfully\//);
    const content = await page.textContent('.post-content');
    expect(content).toMatch(/congratulations|successfully logged in/i);
    await expect(page.locator('text=Log out')).toBeVisible();
  });

  test('Login test - incorrect username', async ({ page }) => {
    await page.fill('#username', 'incorrectUser');
    await page.fill('#password', 'Password123');
    await page.click('#submit');

    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Your username is invalid!');
  });

  test('Login test - incorrect password', async ({ page }) => {
    await page.fill('#username', 'student');
    await page.fill('#password', 'wrongPassword');
    await page.click('#submit');

    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Your password is invalid!');
  });
});
