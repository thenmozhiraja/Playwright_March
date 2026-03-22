const {BaseReuse} = require ("../utils/baseclass");
const userdata = BaseReuse.readExcel("./Excel/AdactinExcel.xlsx","Sheet1")



class SearchHotelLocators{
    constructor (page){
    this.page = page;
    this.location = "#location";
    this.hotel = "#hotels";
    this.room = "#room_type";
    this.roomnos = "#room_nos";
    this.checkin = "#datepick_in";
    this.checkout = "#datepick_out";
    this.adults = "#adult_room";
    this.child = "#child_room";
    this.submit = "#Submit"
    }

    async hotelsearch(){
        await BaseReuse.selectOption(this.page, this.location,userdata[1].Location)
        await this.page.waitForTimeout(3000);
        await BaseReuse.selectOption(this.page,this.hotel,userdata[1].Hotels)
        await this.page.waitForTimeout(3000);
        await BaseReuse.selectOption(this.page, this.room, userdata[1].RoomType)
        await this.page.waitForTimeout(3000);
        await BaseReuse.selectOption(this.page,this.roomnos, userdata[1].NumberofRooms);
        await this.page.waitForTimeout(3000);
        await BaseReuse.fillInput(this.page,this.checkin, userdata[1].CheckInDate)
        await this.page.waitForTimeout(3000);
        await BaseReuse.fillInput(this.page,this.checkout,userdata[1].CheckOutDate)
        await this.page.waitForTimeout(3000);
        await BaseReuse.selectOption(this.page,this.adults,userdata[1].AdultsperRoom)
        await this.page.waitForTimeout(5000);
        await BaseReuse.selectOption(this.page,this.child,userdata[1].ChildrenperRoom)
                await this.page.waitForTimeout(10000);
                await BaseReuse.clickElement(this.page,this.submit);
                await this.page.waitForTimeout(3000);

    }
}

module.exports = {SearchHotelLocators};