@ALL
Feature: Create account of Facebook
As a user you need to open facebook home page and do the validation

@Smoke @Regression
Scenario: Validate first name field1
Given User need to be on facebook login page
When User enters user "David" first name
Then User check user "David" first name is present
Then Close the browser

@Regression
Scenario: Validate first name field2
Given User need to be on facebook login page
When User enters user "David" first name
Then User check user "David" first name is present
Then Close the browser

@Regression
Scenario: Validate first name field3
Given User need to be on facebook login page
When User enters user "David" first name
Then User check user "David" first name is present
Then Close the browser

Scenario: Validate first name field4
Given User need to be on facebook login page
When User enters user "David" first name
Then User check user "David" first name is present
Then Close the browser

@Smoke
Scenario: Validate first name field5
Given User need to be on facebook login page
When User enters user "David" first name
Then User check user "David" first name is present
Then Close the browser
