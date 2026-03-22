const { Given, When, Then } = require("@cucumber/cucumber");

const { LoginAdactin } = require("../pages/Loginpage");
const { SearchHotelLocators } = require("../pages/search");
const { SelectHotel } = require("../pages/Select")
const { BookHotelLocator } = require("../pages/bookHotel");
const env = require("../config/env")

Given('User is on the login page', async function () {
    this.LoginAdac = new LoginAdactin(this.page)

});


When('User enters the valid username and password', async function () {
    await this.LoginAdac.navigateLogin()


});

When('User click the login button', async function () {
    await this.LoginAdac.clickLogin();
});

Then('User should be navigated to Home Page', async function () {

});

Given('User is on Home Page', async function () {
    this.searchHot = new SearchHotelLocators(this.page)
});


When('User enter the search Hotel page details and click search button', { timeout: 40000 }, async function () {
    await this.searchHot.hotelsearch();
});


Then('User will be on Select page', function () {

});

Given('User is on Select page', async function () {
    this.selectbttn = new SelectHotel(this.page)
});

When('User should click continue', async function () {
    await this.selectbttn.selectButton();
});

Then('User should be navigated to Book Hotel page', function () {

});

Given('User is on Book Hotel page', { timeout: 20000 }, async function () {
    this.bookhtl = new BookHotelLocator(this.page)
});

When('User enters the booking details and book now button', async function () {
    await this.bookhtl.BHotel();

});


Then('Order ID wil get displayed once the booking done correctly', { timeout: 20000 }, async function () {
    await this.bookhtl.textContentPrint();
});





