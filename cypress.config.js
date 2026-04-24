const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'https://automationexercise.com',
    video: true,
    screenshotOnRunFailure: true
  }
}