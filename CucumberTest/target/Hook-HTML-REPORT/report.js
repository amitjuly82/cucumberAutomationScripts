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
  "duration": 1916647819,
  "status": "passed"
});
formatter.before({
  "duration": 141709,
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
  "duration": 3339142222,
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
  "duration": 4581404373,
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
  "duration": 24875669,
  "status": "passed"
});
formatter.after({
  "duration": 57237,
  "status": "passed"
});
formatter.after({
  "duration": 2340382078,
  "status": "passed"
});
formatter.before({
  "duration": 1832501040,
  "status": "passed"
});
formatter.before({
  "duration": 116052,
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
  "duration": 3377859198,
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
  "duration": 3580420698,
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
  "duration": 33315846,
  "status": "passed"
});
formatter.after({
  "duration": 48158,
  "status": "passed"
});
formatter.after({
  "duration": 2337187111,
  "status": "passed"
});
});