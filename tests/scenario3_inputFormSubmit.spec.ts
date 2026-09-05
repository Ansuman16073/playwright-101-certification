import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.testmuai.com/selenium-playground/';

test('test', async ({ page }) => {

  // Step 1: Open the playground and click "Input Form Submit"
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  await page.getByRole('link', { name: 'Input Form Submit', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/input-form-demo/);

  const submitButton = page.locator('(//*[@type="submit"])[2]');

  // Step 3: Fill in Name, Email, and other fields; select Country by visible text
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Ansuman Panda');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('ansuman@gmail.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('ansuman');
  await page.getByRole('textbox', { name: 'Company' }).click();
  await page.getByRole('textbox', { name: 'Company' }).fill('gyansys');
  await page.getByRole('textbox', { name: 'Website' }).click();
  await page.getByRole('textbox', { name: 'Website' }).fill('www.gyansys.com');
  await page.getByRole('combobox').selectOption('IN');
  await page.getByRole('textbox', { name: 'City', exact: true }).click();
  await page.getByRole('textbox', { name: 'City', exact: true }).fill('bengaluru');
  await page.getByRole('textbox', { name: 'Address 1' }).click();
  await page.getByRole('textbox', { name: 'Address 1' }).fill('bengaluru');
  await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).fill('karntaka');
  await page.getByRole('textbox', { name: 'City* State*' }).click();
  await page.getByRole('textbox', { name: 'City* State*' }).fill('karnataka');
  await page.getByRole('textbox', { name: 'Zip Code*' }).click();
  await page.getByRole('textbox', { name: 'Zip Code*' }).fill('560066');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for contacting us, we')).toBeVisible();

});

