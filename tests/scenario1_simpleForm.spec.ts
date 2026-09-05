import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.testmuai.com/selenium-playground/';

test('test', async ({ page }) => {

  // Step 1: Open Selenium Playground
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

  // Step 2: Click "Simple Form Demo" (locator: link text)
  await page.getByRole('link', { name: 'Simple Form Demo' }).click();
  await page.waitForLoadState('domcontentloaded');

  // Step 3: Validate URL contains "simple-form-demo"
  await expect(page).toHaveURL(/simple-form-demo/);
  console.log('URL validated: contains "simple-form-demo"');

  // Step 4: Create a variable for the string value
  const message = 'Welcome to TestMu AI';

  // Step 5: Enter the value in the "Enter Message" textbox (locator: id)
  const messageBox = await page.locator('#user-message').first();
  await messageBox.fill(message);

  // Step 6: Click "Get Checked Value" (locator: id)
  await page.locator('#showInput').first().click();

  // Step 7: Validate the same text appears under "Your Message:" (locator: id)
  const displayedMessage = page.locator('#message').first();
  await expect(displayedMessage).toHaveText(message);
  console.log('Verified "Your Message:" shows "${message}"');

  console.log('Scenario 1: PASSED');
  return true;

});
