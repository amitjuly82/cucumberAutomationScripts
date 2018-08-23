Feature: Create account of Facebook
As a user you need to open facebook home page and do the validation

Scenario: Validate first name field
Given User need to be on facebook login page
When Enter following details
	| UserName | Surname      | Mobile     |
	| Amit     | Kumar        | 9986135361 |
	| Ajay     | Bhattacharjee| 8310426705 |


#Then User check user "David" first name is present
Then Close the browser


