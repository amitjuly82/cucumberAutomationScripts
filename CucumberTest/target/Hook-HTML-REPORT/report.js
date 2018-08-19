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
  "duration": 2651368017,
  "status": "passed"
});
formatter.before({
  "duration": 70263,
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
  "duration": 8448818338,
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
  "duration": 249608126,
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
  "duration": 26437046,
  "status": "passed"
});
formatter.after({
  "duration": 76184,
  "status": "passed"
});
formatter.after({
  "duration": 2334139253,
  "status": "passed"
});
formatter.before({
  "duration": 1870363974,
  "status": "passed"
});
formatter.before({
  "duration": 79342,
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
  "duration": 3787137845,
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
  "duration": 4478333536,
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
  "duration": 31622693,
  "status": "passed"
});
formatter.after({
  "duration": 71052,
  "status": "passed"
});
formatter.after({
  "duration": 2316868765,
  "status": "passed"
});
});