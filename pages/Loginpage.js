const {BaseReuse} = require ("../utils/baseclass");
const {baseURL, username, password} = require ("../config/env")
class LoginAdactin {

    constructor(page){
        this.page = page;
        this.usernameField = "#username";
        this.passwordField = "#password";
        this.loginBtn = "#login";
    }
async navigateLogin(){
    await BaseReuse.navigateToUrl(this.page,baseURL)
await BaseReuse.fillInput(this.page,this.usernameField,username)
await BaseReuse.fillInput(this.page,this.passwordField,password)
   
    
}

async clickLogin(){
    await BaseReuse.clickElement(this.page,this.loginBtn) 
}
}

module.exports = { LoginAdactin };