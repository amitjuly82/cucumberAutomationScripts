$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFile.feature");
formatter.feature({
  "line": 1,
  "name": "Create account of Facebook",
  "description": "As a user you need to open facebook home page and do the validation",
  "id": "create-account-of-facebook",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate first name field",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters user first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User check user first name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "Automation.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 6715838662,
  "status": "passed"
});
formatter.match({
  "location": "Automation.user_enters_user_first_name()"
});
formatter.result({
  "duration": 2215104651,
  "status": "passed"
});
formatter.match({
  "location": "Automation.user_check_user_first_name_is_present()"
});
formatter.result({
  "duration": 2239025649,
  "status": "passed"
});
});