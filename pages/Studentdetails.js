const {BaseReuse} = require("../utils/baseclass");
const {baseURL} = require ("../config/studentformenv");


class Stddetails{
    constructor(page){
        this.page = page;
        this.fname = "#firstName";
        this.lname = "#lastName";
        this.emailI = "#userEmail";
        this.unumber = "#userNumber";
        this.dob = "#dateOfBirthInput";
        this.subject = "#subjectsInput";
        this.addressInput = "#currentAddress";
        this.selectst = "#react-select-3-placeholder"
        this.city = "#react-select-4-input";
        this.sbmt = "#submit"
    }

    async enterFLName(firstname, lastname) {
            await BaseReuse.navigateToUrl(this.page,baseURL)
        await this.page.fill(this.fname, firstname);
        await this.page.fill(this.lname, lastname);
    }

    async enterEmail(email) {
        await this.page.fill(this.emailI, email);
    }
    // async genderDt(){
    //     await BaseReuse.clickElement(this.page, "//input[@value='Female']")
    // }

    async userNumber(mobile) {
        await this.page.fill(this.unumber, mobile);
    }

    // async userDOB(dobInput) {
    //     await this.page.fill(this.dob, dobInput);
    //     await this.page.keyboard.press('Enter');
    // }

    async fillSubject(subjectI) {
        await this.page.fill(this.subject, subjectI);
        await this.page.keyboard.press('Tab');
    }
    // async hobbies(){
    //     await BaseReuse.clickElement(this.page,'(//input[@type="checkbox"])[1]')
    // }

    async addressdt(address) {
        await this.page.fill(this.addressInput, address);
    }

    // async selectState(state) {
    //     await this.page.click(this.selectst);
    //     await this.page.locator(`text=${state}`).click();
    // }

    // async selectCity(citydt) {
    //     await this.page.click(this.city);
    //     await this.page.locator(`text=${citydt}`).click();
    // }

    async clickSubmit() {
        await this.page.click(this.submitButton);
    }

    async userDOB(dobInput) {
        await this.page.fill(this.dob, dobInput);
        // Pressing Escape closes the calendar without triggering a form submit
        await this.page.keyboard.press('Escape'); 
    }

   async genderDt() {
    // Instead of clicking the radio input, click the label
    await this.page.click('label[for="gender-radio-2"]'); // Clicks 'Female' label
}

async hobbies() {
    await this.page.click('label[for="hobbies-checkbox-1"]'); // Clicks 'Sports' label
}

   async selectState(state) {
    // 1. Scroll and click the container
    await this.page.locator(this.selectst).scrollIntoViewIfNeeded();
    await this.page.click(this.selectst, { force: true });
    
    // 2. Type the state name to filter the options
    await this.page.keyboard.type(state);
    await this.page.keyboard.press('Enter');
}

async selectCity(citydt) {
    await this.page.click(this.city, { force: true });
    await this.page.keyboard.type(citydt);
    await this.page.keyboard.press('Enter');
}

  async clickSubmit() {
        await this.page.click(this.sbmt);
    }





}
module.exports = {Stddetails};
