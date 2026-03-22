const { Given, When, Then } = require("@cucumber/cucumber");
const { username } = require("../config/env");

When('Enter the username {string}', async function (user) {
    console.log(user);
});

When('Enter the password {string}', async function (pass) {
    console.log(pass);
});

When('Enter the credential values', function (dataTable) {
    const raw= dataTable.raw();
    const row = raw[1]
    const username = row[0];
    const password = row[1];
    console.log(username);
    console.log(password);
});

When('Enter the credential values for rows', function (dataTable) {
       const rows = dataTable.rows();
       for (const data of rows){
        const [username,password] = data;
        console.log(username);
        console.log(password);
       }
         });

          When('Enter the credential values for rowsHash', function (dataTable) {
           const data = dataTable.rowsHash();
           console.log(data.username)
           console.log(data.password)
         });

         When('Enter the credential values for Hashes', function (dataTable) {
           const users = dataTable.hashes();
           for (const data of users){
            console.log(data.username)
            console.log(data.password)
           }
         });
