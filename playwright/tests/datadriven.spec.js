import { test, expect } from '@playwright/test';
import loginData from './data.json';

test('data-driven login test with text verification', async ({ page }) => {
  // Navigate to the initial page
  await page.goto('https://www.rmkec.ac.in/2023/');
  await page.getByLabel('Close').click();
  await page.getByRole('link', { name: 'CP Tracker' }).click();

  for (const user of loginData.loginData) {
    try {
      console.log(`Attempting login with username: ${user.username}`);

      // Fill in the login form
      await page.locator('input[name="user"]').click();
      await page.locator('input[name="user"]').fill(user.username);
      await page.locator('input[name="pass"]').click();
      await page.locator('input[name="pass"]').fill(user.password);

      // Click the login button
      await page.getByRole('row', {
        name: `Sign in to Department CPT Account Username ${user.username} Password ${user.password} Role admin`,
        exact: true
      }).getByRole('link').click();

      // Wait for potential error messages or page updates
      await page.waitForTimeout(1000);

      // Check for the "InValid Login" message
      const invalidLoginMessage = await page.locator('text=InValid Login').isVisible();
      if (invalidLoginMessage) {
        console.log(`Login failed for username: ${user.username} - "InValid Login" message displayed.`);
      }

      // Check for the "Pls Relogin to CPT Account" message
      const plsReloginMessage = await page.locator('text=Pls Relogin to CPT Account').isVisible();
      if (plsReloginMessage) {
        console.log(`Login failed for username: ${user.username} - "Pls Relogin to CPT Account" message displayed.`);
      }

      // After attempting the login, click the logout/reload button (Image10)
      await page.locator('img[name="Image10"]').click();

      // Add a small delay to ensure the page resets before the next attempt
      await page.waitForTimeout(1000);
    } catch (error) {
      console.error(`Login attempt failed for username: ${user.username} with error: ${error.message}`);
    }
  }
});
