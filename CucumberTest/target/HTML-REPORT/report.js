$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hookFF.feature");
formatter.feature({
  "line": 2,
  "name": "Create account of Facebook",
  "description": "As a user you need to open facebook home page and do the validation",
  "id": "create-account-of-facebook",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ALL"
    }
  ]
});
formatter.before({
  "duration": 3569433464,
  "status": "passed"
});
formatter.before({
  "duration": 97105,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate first name field1",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
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
formatter.match({
  "location": "hookSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 2254270747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "hookSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 2002567758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "hookSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 26228231,
  "status": "passed"
});
formatter.after({
  "duration": 74210,
  "status": "passed"
});
formatter.after({
  "duration": 2095005446,
  "status": "passed"
});
formatter.before({
  "duration": 1881191976,
  "status": "passed"
});
formatter.before({
  "duration": 108157,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate first name field2",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User check user \"David\" first name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "hookSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 4397280822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "hookSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 182532223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "hookSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 27239939,
  "status": "passed"
});
formatter.after({
  "duration": 54868,
  "status": "passed"
});
formatter.after({
  "duration": 2141830998,
  "status": "passed"
});
});