Feature: Create account of Facebook
As a user you need to open facebook home page and do the validation

Scenario: Validate first name field
Given User need to be on facebook login page
When User enters user first name
Then User check user first name is present
Then Close the browser
