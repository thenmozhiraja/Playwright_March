const xlsx = require ("xlsx");
class BaseReuse{
    static async navigateToUrl(page, url){
    await page.goto(url);
    }

    static async clickElement(page, locator){
        await page.click(locator);
        //changes

    }

    static async fillInput(page, locator, value){
        await page.fill(locator, value);
    }
    static async selectOption(page, selector, value) {
        await page.selectOption(selector, value);
    }
    static readExcel(filePath, sheetName) {
    
            const workbook = xlsx.readFile(filePath);
    
            const sheet = sheetName ?? workbook.SheetNames[0];
    
            const worksheet = workbook.Sheets[sheet];
    
            return xlsx.utils.sheet_to_json(worksheet);
        }
         static async getElementText(page, selector) {
            await page.waitForTimeout(3000);
        return await page.inputValue(selector);
    }
    
}

module.exports = {BaseReuse};
