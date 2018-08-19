Feature: Create account of Facebook
As a user you need to open facebook home page and do the validation

Scenario Outline: Validate create user multiple fields
When User enters user "<user>" first name
And User enters "<surname>" as surname
Then User check user "<user>" first name is present
But User mobile field should be blank
#Then Close the browser
Examples: 
	| user     | surname      |
	| Amit     | Kumar        |
	| Ajay     | Bhattacharjee|