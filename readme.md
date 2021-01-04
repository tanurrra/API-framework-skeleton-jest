# API testing
This is a test framework skeleton for API testing using Jest and Allure. 
API published on https://jsonplaceholder.typicode.com/ 

## Technologies 
- JavaScript
- [Jest](https://jestjs.io/docs/en/getting-started), one of the most popular test frameworks for JavaScript and #1 test framework for JS according to [State of JS survey 2019](https://2019.stateofjs.com/testing/).
- Allure for reporting
- [superagent](https://github.com/visionmedia/superagent), HTTP request library  

## Project contains
- tests for several API flows
- allure reporter
- config file for integration with CircleCI

## Installation 
Install all packages using npm:
```bash
npm install
```
Note: assuming `npm` is already installed.

## How to run tests
To run tests on Windows, MacOS from terminal first install and after run:
```bash
npm run test
```
To get results with coverage:
```bash
npm run test-with-coverage
```
For CLI options please reffer to official [docs](https://jestjs.io/docs/en/cli)

## How to get a report
You need to install the [CLI](https://docs.qameta.io/allure/#_commandline) in order to obtain a report.

To see a report in browser, run in console
```bash
allure serve
```
If you want to generate html version, run in console
```bash
allure generate --clean
```
and report will be generated in allure-report folder.

## Covered flows
1. Search for the user with username “Delphine” (taken from `config/global.config.js`).
2. Use the details fetched to make a search for the posts written by the
user.
3. For each post, fetch the comments and validate if the emails in the comment section are in the proper format.
