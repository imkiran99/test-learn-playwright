import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.getByLabel('Username:').fill('rahulshettyacademy');
  await page.getByLabel('Password:').fill('learning');
  await page.locator('select').selectOption('teach');
  await page.getByLabel('I Agree to the terms and conditions').check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');
  await page.getByRole('link', { name: 'iphone X' }).click();
  await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/');
  await page.getByRole('link', { name: 'Shop' }).click();
  await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');

});