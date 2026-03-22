const {BaseReuse} = require("../utils/baseclass");

class SelectHotel{
    constructor(page){
        this.page = page;
        this.radio = "#radiobutton_0";
        this.continue = "#continue";
    }

    async selectButton(){
        await BaseReuse.clickElement(this.page,this.radio);
        await BaseReuse.clickElement(this.page,this.continue);
    }
}
module.exports = {SelectHotel};