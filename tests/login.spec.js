const {test , expect} = require('@playwright/test')

test('launch test', async({page})=> {

    await page.goto("https://www.google.com/maps");

})