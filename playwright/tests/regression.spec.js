import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.rmkec.ac.in/2023/');
  await page.getByLabel('Close').click();
  await page.getByRole('link', { name: 'MENU ' }).click();
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
  await page.getByRole('link', { name: ' Contact Us' }).click();
  await page.locator('#quick_links').getByRole('button').first().click();
  await page.locator('#quick_links').getByRole('button').first().click();
  await page.locator('#quick_links').getByRole('button').first().click();
  await page.locator('#aboutCarousel').getByRole('button').first().click();
  await page.locator('#aboutCarousel').getByRole('button').first().click();
  await page.locator('#aboutCarousel').getByRole('button').first().click();
  await page.locator('#aboutCarousel').getByRole('button').first().click();
  await page.locator('#researchCarousel').getByRole('button').first().click();
  await page.locator('#researchCarousel').getByRole('button').first().click();
  await page.locator('#researchCarousel').getByRole('button').first().click();
  await page.locator('#researchCarousel').getByRole('button').first().click();
  await page.locator('#researchCarousel').getByRole('button').first().click();
  await page.locator('#researchCarousel').getByRole('button').first().click();
  await page.locator('#researchCarousel').getByRole('button').first().click();
  await page.locator('#caseStudies').getByRole('button').first().click();
  await page.locator('#caseStudies').getByRole('button').first().click();
  await page.locator('#caseStudies').getByRole('button').first().click();
  await page.locator('#caseStudies').getByRole('button').first().click();
  await page.locator('#caseStudies').getByRole('button').first().click();
  await page.locator('#recruitCarousel').getByRole('button').first().click();
  await page.locator('#recruitCarousel').getByRole('button').first().click();
  await page.locator('#recruitCarousel').getByRole('button').first().click();
  await page.locator('#recruitCarousel').getByRole('button').first().click();
  await page.locator('#recruitCarousel').getByRole('button').first().click();
  await page.getByRole('link', { name: 'Contact Us', exact: true }).click();
  await page.getByRole('link', { name: 'Grievances' }).click();
    // Get the iframe's content frame
    const iframeElement = await page.locator('iframe').first();
    const iframe = await iframeElement.contentFrame();
    
    // Ensure the iframe content is available
    if (!iframe) {
      throw new Error('Iframe content is not accessible');
    }
  
    // Fill in the form fields inside the iframe
    await iframe.getByPlaceholder('Enter your Name').click();
    await iframe.getByPlaceholder('Enter your Name').fill('Gaurav');
    await iframe.locator('#type').selectOption('Student');
    await iframe.getByPlaceholder('Enter Student Register Number').click();
    await iframe.getByPlaceholder('Enter Student Register Number').fill('1234567890');
    await iframe.getByPlaceholder('Enter your Batch').click();
    await iframe.getByPlaceholder('Enter your Batch').fill('2022');
    await iframe.getByPlaceholder('Enter your Email').click();
    await iframe.getByPlaceholder('Enter your Email').fill('gaurav@gmail.com');
    await iframe.getByPlaceholder('Enter your Mobile Number').click();
    await iframe.getByPlaceholder('Enter your Mobile Number').fill('1234567890');
    await iframe.getByPlaceholder('Enter your Grievence').click();
    await iframe.getByPlaceholder('Enter your Grievence').fill('trtrtrtrtrtrtt');
    await iframe.getByPlaceholder('Enter your Aadhar Number').click();
    await iframe.getByPlaceholder('Enter your Aadhar Number').fill('123456789012');
  
    // Locate and click the Submit button inside the iframe
    const submitButton = iframe.getByRole('button', { name: 'Submit' });
    await expect(submitButton).toBeVisible();
    await submitButton.click();
  
    // Validate the URL change
    const newURL = page.url();
    expect(newURL).toBe('https://www.rmkec.ac.in/2023/');
  });