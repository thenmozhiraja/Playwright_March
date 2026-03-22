Feature: Student Form details


@smoke
Scenario: validate the student form by entering all details
Given user is on form page
When user enter the student form details using rowsHash

|firstname|Lakshmi|
|lastname|Rajesh|
|email|thenmozhi1905@gmail.com|
|mobile|1234567890|
|dobInput|14051996|
|subjectI|Tamil|
|address|Lakshmi Street|
|state|Haryana|
|citydt|Karnal|
Then user submit the form successfully
