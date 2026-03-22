const { Before, After } = require("@cucumber/cucumber");
const { BrowserManager } = require("../config/Browserconfiguration");
const env = require("../config/env");
const { setDefaultTimeout } = require('@cucumber/cucumber');



// Set global timeout to 30 seconds
setDefaultTimeout(30 * 1000);

Before(async function () {
    const browserInstance = await BrowserManager.launchBrowser();
    
    // Assign to 'this' so these are visible in your steps
    this.browser = browserInstance.browser;
    this.context = browserInstance.context;
    this.page = browserInstance.page; 

    // Now this.page is defined, so goto() will work
    await this.page.goto(env.baseURL); 
});

After(async function () {
    if (this.browser) {
        await this.browser.close();
    }
});