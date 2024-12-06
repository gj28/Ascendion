import { test, expect } from '@playwright/test';

test('end-to-end test for RMKEC website', async ({ page }) => {
  // Visit the RMKEC homepage
  await page.goto('https://www.rmkec.ac.in/2023/');
  
  // Close any initial pop-up
  await page.getByLabel('Close').click();

  // Test Navigation through Slides
  await page.getByLabel('Slide 1', { exact: true }).click();
  await page.getByLabel('Slide 2', { exact: true }).click();

  // Test Quick Links - clicking buttons multiple times
  const quickLinksButton = page.locator('#quick_links').getByRole('button').nth(1);
  for (let i = 0; i < 3; i++) {
    await quickLinksButton.click();
  }

  // Test section navigation and link clicks
  await page.locator('section').filter({ hasText: '28 Years of Excellence28' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Vice Chairman' }).click();
  await page.getByRole('link', { name: 'Management Team' }).click();
  await page.getByRole('link', { name: 'Vision & Mission' }).click();
  await page.getByRole('link', { name: 'Quality Policy' }).click();
  await page.getByRole('link', { name: 'R.M.K. ENGINEERING COLLEGE (an autonomous institution)', exact: true }).click();
  await page.waitForTimeout(9000);
  // Close popup after navigation
  await page.getByLabel('Close').click();

  // Interact with Research Carousel - click buttons multiple times
  const researchCarouselButton = page.locator('#researchCarousel').getByRole('button').first();
  for (let i = 0; i < 5; i++) {
    await researchCarouselButton.click();
  }

  // Interact with Recruitment Carousel - click buttons multiple times
  const recruitCarouselButton = page.locator('#recruitCarousel').getByRole('button').first();
  for (let i = 0; i < 5; i++) {
    await recruitCarouselButton.click();
  }

  // Test various links in the navigation menu
  await page.getByRole('link', { name: 'Administration', exact: true }).click();
  await page.getByRole('link', { name: 'Governing Board' }).click();
  await page.getByRole('link', { name: 'Advisors' }).click();
  await page.getByRole('link', { name: 'Principal', exact: true }).click();
  await page.getByRole('link', { name: 'Dean Research' }).click();
  await page.locator('li').filter({ hasText: 'Committee Anti-Ragging' }).locator('i').click();
  await page.getByRole('link', { name: 'Planning & Monitoring' }).click();
  
  // Test dropdown links in the navigation menu (e.g., About Us, Campus, etc.)

  // Validate if menu items open properly
  await page.getByRole('link', { name: 'MENU ' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: ' About Us' }).click();
  await page.getByRole('link', { name: ' About Us' }).click();
  await page.getByRole('link', { name: ' Administration' }).click();
  await page.getByRole('link', { name: ' Administration' }).click();
  await page.getByRole('link', { name: ' Academics' }).click();
  await page.getByRole('link', { name: ' Academics' }).click();
  await page.getByRole('link', { name: ' Department' }).click();
  await page.getByRole('link', { name: ' Department' }).click();
  await page.getByRole('link', { name: ' Career Development Centre' }).click();
  await page.getByRole('link', { name: ' Career Development Centre' }).click();
  await page.getByRole('link', { name: ' AICTE IDEA Lab' }).click();
  await page.getByRole('link', { name: ' AICTE IDEA Lab' }).click();
  await page.getByRole('link', { name: ' Campus' }).click();
  await page.getByRole('link', { name: ' Campus' }).click();
  await page.getByRole('link', { name: ' Entrepreneurship' }).click();
  await page.getByRole('link', { name: ' Entrepreneurship' }).click();
  await page.getByRole('link', { name: ' Accreditation' }).click();
  await page.getByRole('link', { name: ' Accreditation' }).click();
  await page.getByRole('link', { name: ' Contact Us' }).click();
  
  // Login Flow: Test the login and reset password features
  await page.getByRole('link', { name: 'RMK Nextgen Faculty Login' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('test@test.com');
  await page.getByPlaceholder('Password').fill('Pass@123');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Assert successful login (optional, depending on the page)
  await expect(page).toHaveURL('https://nextgen.rmkec.ac.in/');

  // Test forgot password flow
  await page.getByRole('link', { name: 'Forgot Password?' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('test@test.com');
  await page.getByRole('button', { name: 'Send' }).click();
  const errorMessage = page.locator('text=Wrong Email Id or Password!');
  await expect(errorMessage).toBeVisible();
});
