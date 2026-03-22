require ("dotenv").config();

module.exports = {
    baseURL: process.env.BASE_URL,
    username: process.env.USER,
    password: process.env.PASS,
    browser: process.env.BROWSER

}