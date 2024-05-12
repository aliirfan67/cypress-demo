const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
  e2e: {
      setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
