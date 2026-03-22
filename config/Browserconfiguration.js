const {chromium, firefox, webkit} = require ('playwright');
const env = require ('./env')

class BrowserManager{
    static async launchBrowser(){
        let browser;
        switch(env.browser){
            case 'chromium':
                browser = await chromium.launch({headless: false});
                break;
                case 'firefox':
                    browser =await firefox.launch({headless:false})
                    break;
                    case 'webkit':
                        browser = await webkit.launch({headless:false});
                        break;
        }
        const context = await browser.newContext();
        const page = await context.newPage();
        return {browser,context,page}
    }
}
module.exports = {BrowserManager}