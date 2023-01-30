import { test, expect } from '@playwright/test';

test("basic interaction test", async({page}) => {

await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
await expect(page).toHaveTitle("Selenium Grid Online | Run Selenium Test On Cloud")

const userInput = page.locator("input#user-message")
await userInput.scrollIntoViewIfNeeded()  //to scroll to the particular element
console.log(await userInput.getAttribute("placeholder") +">>>>>>>>><<<<<<<<<<")

await expect(userInput).toHaveAttribute("placeholder", "Please enter your Message")
console.log(await userInput.inputValue() + " <<<<<>>>>>")

await userInput.type("test")   //type will append the value. Does not clear the existing value
console.log(await userInput.inputValue() + " <<<<<>>>>>")

await userInput.fill("new value")  // fill will clear the old value and enter the new value
console.log(await userInput.inputValue() + " <<<<<>>>>>")

})