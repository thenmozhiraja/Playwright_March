Feature: Login Functionality


Scenario: Adactin hotel Booking
Given User is on the login page
When User enters the valid username and password
And User click the login button
Then User should be navigated to Home Page
Given User is on Home Page
When User enter the search Hotel page details and click search button
Then User will be on Select page
Given User is on Select page
When User should click continue
Then User should be navigated to Book Hotel page
Given User is on Book Hotel page
When User enters the booking details and book now button
Then Order ID wil get displayed once the booking done correctly



Scenario: Validate the invalid username and password
Given User is on the login page
When Enter the username "Thenmozhi"
And Enter the password "Then"
# Then User should be navigated to Home Page

@raw
Scenario: validate the data table using raw
When Enter the credential values
|username|password|
|admin|pass|
|admin1|pass1|

@rows
Scenario: validate the data table using rows
When Enter the credential values for rows
|username|password|
|admin|pass|
|admin1|pass1|


@rowsHash
Scenario: validate the data table using rowsHash
When Enter the credential values for rowsHash
|username|admin|
|password|pass1|

@smoke
Scenario: validate the data table using hashes
When Enter the credential values for Hashes
|username|password|
|admin|pass|
|admin1|pass1|










