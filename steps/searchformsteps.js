const {Given, When, Then} = require("@cucumber/cucumber");


const {Stddetails} = require("../pages/Studentdetails");


 Given('user is on form page', async function () {
    this.studentdt= new Stddetails(this.page)
          
         });
          When('user enter the student form details using rowsHash', { timeout: 40000 }, async function (dataTable) {
          const user = dataTable.rowsHash();
              await this.studentdt.enterFLName(user.firstname, user.lastname);
              await this.studentdt.enterEmail(user.email);
              await this.studentdt.genderDt();
              await this.studentdt.userNumber(user.mobile);
              await this.studentdt.userDOB(user.dobInput)
              await this.studentdt.fillSubject(user.subjectI);
              await this.studentdt.hobbies();
              await this.studentdt.addressdt(user.address);
              await this.studentdt.selectState(user.state);
              await this.studentdt.selectCity(user.citydt)


         });
         Then('user submit the form successfully', async function () {
          await this.studentdt.clickSubmit();
         });
