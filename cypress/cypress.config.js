const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    projectId: "bk7ec6",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureCypress(on, config);
      return config;
      // implement node event listeners here
    },
  },
});