// import { expect } from '@playwright/test';
import {test, expect} from '@playwright/test';

test ("alert test", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    await expect(page).toHaveTitle("Selenium Grid Online | Run Selenium Test On Cloud")
    
    // here dialog should be passed as it is
    page.once("dialog", async(alert)=>{
        let msg = alert.message();
        console.log("Alert message is : "+msg )
       await alert.accept()
    })
    page.waitForTimeout(5000)
   await page.locator("//button[text()= 'Click Me']").nth(0).click()
   
   await expect(page.locator("//div")).toHaveText("Java Script Confirm Box")
    page.waitForTimeout(5000)
   page.once("dialog", async(alert) =>{
    console.log(await "second alert message is : "+alert.message)
    await alert.accept()
   })
   await page.locator("//button[text()= 'Click Me']").nth(1).click()
   await expect(page.locator("//p[@id='confirm-demo']")).toContainText("You pressed OK!")

})