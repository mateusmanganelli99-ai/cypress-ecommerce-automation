const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    defaultCommandTimeout: 10000
  },
  retries: 2
});