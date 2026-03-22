const {BaseReuse} = require("../utils/baseclass");
const bookingExcel = BaseReuse.readExcel("./Excel/AdactinExcel.xlsx","Sheet2");

class BookHotelLocator{
    constructor(page){
        this.page = page;
        this.fname = "#first_name";
        this.lname = "#last_name";
        this.baddress = "#address";
        this.ccnumber = "#cc_num";
        this.cctype = "#cc_type";
        this.emonth = "#cc_exp_month";
        this.eyear = "#cc_exp_year";
        this.cvvnumber = "#cc_cvv";
        this.book = "#book_now";
        this.elementText = "#order_no";
    }

    async BHotel() {
        const data = bookingExcel[0];

        await BaseReuse.fillInput(this.page, this.fname, data.FirstName);
        await BaseReuse.fillInput(this.page, this.lname, data.LastName);
        await BaseReuse.fillInput(this.page, this.baddress, data.BillingAddress);
        
        // Ensure the credit card is treated as a string, not scientific notation
        await BaseReuse.fillInput(this.page, this.ccnumber, data.CreditCardNo.toString());
        
        await BaseReuse.selectOption(this.page, this.cctype, data.CreditCardType);
        await BaseReuse.selectOption(this.page, this.emonth, data.ExpiryMonth);
        await BaseReuse.selectOption(this.page, this.eyear, data.ExpiryYear.toString()); // Years are often read as numbers
        
        await BaseReuse.fillInput(this.page, this.cvvnumber, data.CVVNumber.toString());
        await BaseReuse.clickElement(this.page, this.book);
        
    }

 async textContentPrint() {
    

    // 1. Wait for the element to appear on the page
    const orderInput = this.page.locator(this.elementText);
    await orderInput.waitFor({state: 'visible'});

    // 2. IMPORTANT: Wait for the Order ID to be generated
    // This waits until the 'value' of the input is NOT an empty string
    await this.page.waitForFunction(
        (el) => el.value !== "",
        await orderInput.elementHandle()
    );

    // 3. Now fetch the value
    const orderId = await orderInput.inputValue();
    console.log("Order ID: " + orderId);
    
    return orderId;
}

}

module.exports = {BookHotelLocator};