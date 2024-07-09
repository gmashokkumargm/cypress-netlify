TechStack:
 - Cypress
 - Typescript

# Folder structure
 * Cypress - main folder for all cypress codes such as spec files, custom commands, fixture files 
 * e2e - The folder which contains all spec/test files
 * fixtures - For test data
 * support - This folder contains all custom commands that can be reusable in Cypress tests
 * TsConfig file - To support typescript 
 * GitIgnore - To avoid pushing unwanted files to the git
 * Cypress.config.js - All cypress configuration and node events go under this config file
 * Packet.json -> Dependency management

To Execute the coding:

* Please pull the github repository by using `git Clone https://github.com/gmashokkumargm/challenge.git`
* Install npm dependencies using `npm i` or `npm install`
* To run the test headless mode use `npm test` command
* To see the test visually with cypress test run use `npm run open` 
    -> Configure E2E testing
    -> Select the browser and click start E2E test
    -> Wait for the browser to launch and click login.cy.ts
*********************** THANK YOU ***********************

