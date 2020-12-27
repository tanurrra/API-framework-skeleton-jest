# API testing
This is a test framework skeleton for API testing using Jest and Allure. 
API published on https://jsonplaceholder.typicode.com/ 

## Technologies 
- JavaScript
- [Jest](https://jestjs.io/docs/en/getting-started), one of the most popular test frameworks for JavaScript and #1 test framework for JS according to [State of JS survey 2019](https://2019.stateofjs.com/testing/).
- Allure for reporting
- [superagent](https://github.com/visionmedia/superagent), HTTP request library  

## Installation 
Install Jest using yarn:
```bash
yarn add --dev jest
```

Or npm:
```bash
npm install --save-dev jest
```
## How to run tests

From terminal:
```bash
npm run test
```

From command line
```bash
```

## How to get a report
You need to install the [CLI](https://docs.qameta.io/allure/#_commandline) in order to obtain a report.

To see a report in browser, run in console
```bash
allure serve
```
If you want to generate html version, run in console
```bash
allure generate
```