$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("parammeterizationFF.feature");
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
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User check user \"David\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "parammeterizationSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 8796298512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "parammeterizationSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 152364114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "parammeterizationSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 22488325,
  "status": "passed"
});
formatter.match({
  "location": "parammeterizationSD.close_the_browser()"
});
formatter.result({
  "duration": 3678273786,
  "status": "passed"
});
});