const {test , expect} = require('@playwright/test')

test('launch home  test', async({page})=> {

    await page.goto("https://www.google.com/");

})