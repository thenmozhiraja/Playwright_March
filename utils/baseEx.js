const { test, expect } = require('@playwright/test');

export class BaseUtils {

    static async navigateToUrl(page, url) {
        await page.goto(url);
    }
    // static async switchToFrame(page, frameSelector) {
    //     const frame = await page.frame({ name: frameSelector });
    //     if (!frame) {
    //         throw new Error(Frame with selector "${frameSelector}" not found.);
    //     }
    //     return frame;
    // }

    static async clickElement(page, selector) {
        await page.click(selector);
    }

    static async fillInput(page, selector, value) {
        await page.fill(selector, value);
    }

    static async getElementText(page, selector) {
        return await page.textContent(selector);
    }

    static async waitForElement(page, selector) {
        await page.waitForSelector(selector);
    }

    static async switchToNewTab(context) {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    static async closeCurrentTab(page) {
        await page.close();
    }

    static async getCurrentUrl(page) {
        return page.url();
    }

    static async getPageTitle(page) {
        return page.title();
    }

    static async isElementVisible(page, selector) {
        return await page.isVisible(selector);
    }

    static async isElementEnabled(page, selector) {
        return await page.isEnabled(selector);
    }

    static async isElementChecked(page, selector) {
        return await page.isChecked(selector);
    }

    static async selectOption(page, selector, value) {
        await page.selectOption(selector, value);
    }

    static async getSelectedOption(page, selector) {
        return await page.$eval(selector, el => el.value);
    }

    static async hoverOverElement(page, selector) {
        await page.hover(selector);
    }

    static async scrollToElement(page, selector) {
        await page.$eval(selector, el => el.scrollIntoView());
    }

    static async takeScreenshot(page, path) {
        await page.screenshot({ path });
    }

    static async waitForNavigation(page) {
        await page.waitForNavigation();
    }

    static async waitForLoadState(page, state = 'load') {
        await page.waitForLoadState(state);
    }

    static async waitForTimeout(page, timeout) {
        await page.waitForTimeout(timeout);
    }

    static async getElementAttribute(page, selector, attribute) {
        return await page.getAttribute(selector, attribute);
    }

    static async getElementCount(page, selector) {
        return await page.$$eval(selector, elements => elements.length);
    }

    static async getElementInnerText(page, selector) {
        return await page.$eval(selector, el => el.innerText);
    }

    static async getElementValue(page, selector) {
        return await page.$eval(selector, el => el.value);
    }

    static async acceptAlert(page) {
        page.once('dialog', async (dialog) => {
            console.log("Alert Message:", dialog.message());
            await dialog.accept();
        });
    }

    static async dismissAlert(page) {
        page.once('dialog', async (dialog) => {
            console.log("Alert Message:", dialog.message());
            await dialog.dismiss();
        });
    }

    static async acceptPrompt(page, inputText) {
        page.once('dialog', async (dialog) => {
            console.log("Prompt Message:", dialog.message());
            await dialog.accept(inputText);
        });
    }

    static async getAlertText(page) {
        return new Promise((resolve) => {
            page.once('dialog', async (dialog) => {
                const message = dialog.message();
                await dialog.accept();
                resolve(message);
            });
        });
    }

    // static async validateAlertText(page, expectedText) {
    //     page.once('dialog', async (dialog) => {
    //         const message = dialog.message();

    //         if (message !== expectedText) {
    //             throw new Error(
    //                 Alert text mismatch. Expected: ${expectedText}, Actual: ${message}
    //             );
    //         }

    //         await dialog.accept();
    //     });
    // }

    static async handleMultipleTabs(context, action) {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            action(),
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }   
    


}