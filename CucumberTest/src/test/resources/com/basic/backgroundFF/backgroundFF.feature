Feature: Create account of Facebook
As a user you need to open facebook home page and do the validation

Background: Common Login
Given User need to be on facebook login page

Scenario: Validate first name field
When User enters user "David" first name
Then User check user "David" first name is present
#Then Close the browser


Scenario: Validate create user multiple fields
When User enters user "David" first name
And User enters "Ryan" as surname
Then User check user "David" first name is present
But User mobile field should be blank
#Then Close the browser