$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("backgroundFF.feature");
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
  "location": "backgroundSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 6122401700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "backgroundSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1578801337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "backgroundSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 32594138,
  "status": "passed"
});
formatter.match({
  "location": "backgroundSD.close_the_browser()"
});
formatter.result({
  "duration": 3988133447,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate create user multiple fields",
  "description": "",
  "id": "create-account-of-facebook;validate-create-user-multiple-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"Ryan\" as surname",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User check user \"David\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User mobile field should be blank",
  "keyword": "But "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "backgroundSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 4949864981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "backgroundSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 2153084526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ryan",
      "offset": 13
    }
  ],
  "location": "backgroundSD.user_enters_user_surname(String)"
});
formatter.result({
  "duration": 120623809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "backgroundSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 22357845,
  "status": "passed"
});
formatter.match({
  "location": "backgroundSD.user_mobile_field_blank()"
});
formatter.result({
  "duration": 30924404,
  "status": "passed"
});
formatter.match({
  "location": "backgroundSD.close_the_browser()"
});
formatter.result({
  "duration": 3578798574,
  "status": "passed"
});
});