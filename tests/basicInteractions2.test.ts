import {test, expect} from '@playwright/test';

test.skip ("Basic interactions 2", async ({page}) => {
   await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    await expect(page).toHaveTitle("Selenium Grid Online | Run Selenium Test On Cloud")
    const text1 = page.locator("#sum1")
    const text2 = page.locator("#sum2")
    await text1.scrollIntoViewIfNeeded()
    let num1 = 23,num2 = 34;
    let result = num1 + num2
    await text1.fill(num1.toString())  //fill will clear the existing text and before entering new value. type is recommended when data needs to be appended. Fill is recommended when old text needs to be cleared before adding new one.
    await text2.fill(num2.toString())
    await page.locator("//button[contains(text(),'Get values')]").click()
    const resultEl =  page.locator("#addmessage")
    console.log(await resultEl.textContent())    
    await expect(resultEl).toHaveText(result.toString())

})

test.skip("test 2", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

    const singleChkBox = page.locator("#isAgeSelected")

    await expect(singleChkBox).not.toBeChecked();

    await singleChkBox.check()
    
    await expect(singleChkBox).toBeChecked()
})

test("multiple checkbox", async({page}) =>{

    page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")

    const chkbox1 = page.locator("//input[@id='ex1-check1']")

    await chkbox1.check()

    await expect(chkbox1).toBeChecked()


    const chkbox2 =  page.locator("//input[@id='ex1-check2']")

    await expect(chkbox2).toBeChecked()

    await page.locator("//input[@id='box']").click()

  
    
})