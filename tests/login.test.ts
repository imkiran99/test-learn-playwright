import { chromium, test, expect } from '@playwright/test';

test("login test demo",async () => {

const browser = await chromium.launch({headless:false});
const context = await browser.newContext();  //context does not share cookies with other tab. 
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
// await page.hover("//a[@data-toggle= 'dropdown']//span[contains(.,'My account')]")

// await page.click("//span[contains(text(),'Login')]")  // by using xpath

// await page.click("text=Login")   /// By using Playwright's locator selector

// await page.click("'Login'")

await page.fill("#username", "rahulshettyacademy")
await page.fill("#password", "learning")
await page.click("#signInBtn")
await expect(page).toHaveTitle("ProtoCommerce")

await page.waitForTimeout(5000)  // this statement is equivalent to sleep

const page2 = await context.newPage()
await page2.goto("https://rahulshettyacademy.com/angularpractice/shop")

await page.waitForTimeout(5000)
})