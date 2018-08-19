$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DatatableFF.feature");
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
  "name": "Enter following details",
  "rows": [
    {
      "cells": [
        "UserName",
        "Surname",
        "Mobile"
      ],
      "line": 7
    },
    {
      "cells": [
        "Amit",
        "Kumar",
        "9986135361"
      ],
      "line": 8
    },
    {
      "cells": [
        "Ajay",
        "Bhattacharjee",
        "8310426705"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "datatableSD.user_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 5454110530,
  "status": "passed"
});
formatter.match({
  "location": "datatableSD.enter_following_details(DataTable)"
});
formatter.result({
  "duration": 4597420658,
  "status": "passed"
});
});