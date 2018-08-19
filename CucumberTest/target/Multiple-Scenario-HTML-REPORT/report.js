$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("backgroundFF.feature");
formatter.feature({
  "line": 1,
  "name": "Create account of Facebook",
  "description": "As a user you need to open facebook home page and do the validation",
  "id": "create-account-of-facebook",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "Common Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "backgroundSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 5786455058,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate first name field",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User check user \"David\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
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
  "duration": 4740084213,
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
  "duration": 22981346,
  "status": "passed"
});
formatter.match({
  "location": "backgroundSD.close_the_browser()"
});
formatter.result({
  "duration": 3679642325,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Common Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "backgroundSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 13630045722,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate create user multiple fields",
  "description": "",
  "id": "create-account-of-facebook;validate-create-user-multiple-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters \"Ryan\" as surname",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User check user \"David\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User mobile field should be blank",
  "keyword": "But "
});
formatter.step({
  "line": 18,
  "name": "Close the browser",
  "keyword": "Then "
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
  "duration": 128229359,
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
  "duration": 107503911,
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
  "duration": 27089726,
  "status": "passed"
});
formatter.match({
  "location": "backgroundSD.user_mobile_field_blank()"
});
formatter.result({
  "duration": 31287315,
  "status": "passed"
});
formatter.match({
  "location": "backgroundSD.close_the_browser()"
});
formatter.result({
  "duration": 3691405364,
  "status": "passed"
});
});