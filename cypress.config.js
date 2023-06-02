module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionSupport: true,
    reporter: "mochawesome",
    reporterOptions: {
       reportDir: "cypress/results",
       overwrite: false,
       html: true,
       json: true
    }
  },
};
