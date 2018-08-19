$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dataDrivenFF.feature");
formatter.feature({
  "line": 1,
  "name": "Create account of Facebook",
  "description": "As a user you need to open facebook home page and do the validation",
  "id": "create-account-of-facebook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate create user multiple fields",
  "description": "",
  "id": "create-account-of-facebook;validate-create-user-multiple-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User enters user \"\u003cuser\u003e\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003csurname\u003e\" as surname",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User check user \"\u003cuser\u003e\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User mobile field should be blank",
  "keyword": "But "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "create-account-of-facebook;validate-create-user-multiple-fields;",
  "rows": [
    {
      "cells": [
        "user",
        "surname"
      ],
      "line": 11,
      "id": "create-account-of-facebook;validate-create-user-multiple-fields;;1"
    },
    {
      "cells": [
        "Amit",
        "Kumar"
      ],
      "line": 12,
      "id": "create-account-of-facebook;validate-create-user-multiple-fields;;2"
    },
    {
      "cells": [
        "Ajay",
        "Bhattacharjee"
      ],
      "line": 13,
      "id": "create-account-of-facebook;validate-create-user-multiple-fields;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Validate create user multiple fields",
  "description": "",
  "id": "create-account-of-facebook;validate-create-user-multiple-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User enters user \"Amit\" first name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"Kumar\" as surname",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User check user \"Amit\" first name is present",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User mobile field should be blank",
  "keyword": "But "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "Validate create user multiple fields",
  "description": "",
  "id": "create-account-of-facebook;validate-create-user-multiple-fields;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User enters user \"Ajay\" first name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"Bhattacharjee\" as surname",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User check user \"Ajay\" first name is present",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User mobile field should be blank",
  "keyword": "But "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});