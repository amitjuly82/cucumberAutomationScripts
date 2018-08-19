$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("taggingFF.feature");
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
  "location": "taggingSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 4378709057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "taggingSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1584881574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "taggingSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 24231860,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate first name field2",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User check user \"David\" first name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "taggingSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 5386883581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "taggingSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 133179703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "taggingSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 23202791,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate first name field3",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User check user \"David\" first name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "taggingSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 3574646152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "taggingSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1775883323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "taggingSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 274792479,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate first name field5",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field5",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User check user \"David\" first name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "taggingSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 3619520566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "taggingSD.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1959080020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 17
    }
  ],
  "location": "taggingSD.user_check_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 33079007,
  "status": "passed"
});
});