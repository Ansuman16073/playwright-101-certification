import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.testmuai.com/selenium-playground/';
const TARGET_VALUE = 95;

test('test', async ({ page }) => {

  // Step 1: Open the playground and click "Drag & Drop Sliders"
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  await page.getByRole('link', { name: 'Drag & Drop Sliders', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/drag-drop-range-sliders-demo/);

  // Step 2: Find the slider with default value 15
  const sliders = page.locator('[role="slider"]');
  const slider15 = page.locator("//*[text()=' Default value 15']/..//input");

  await slider15.focus();

  // Step 3: Change value from 15 to 95
  for (let i = 0; i < 80; i++) {
    await page.keyboard.press('ArrowRight');
  }

  // Step 4: Validate the range value shows 95
  await expect(page.locator('//*[@id="rangeSuccess"]')).toContainText(String(TARGET_VALUE));

  console.log('Verified slider value is ${TARGET_VALUE}');
});