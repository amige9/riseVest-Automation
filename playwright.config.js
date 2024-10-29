// @ts-check
const { devices } = require('@playwright/test');
// const { globalSetup } = require('./utils/globalSetup');

const config = {
  testDir: './tests',
  // retries: 1,
  Worker: 5,
  
  /* Maximum time one test can run for. */
  timeout: 120 * 1000,
  expect: {
    timeout: 10000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on',//off,on
    video: 'on'
    
  },
  globalSetup: "utils/globalSetup.js",
  projects : [
    {
      name: 'chrome',
      use: {
        browserName : 'chromium',
        headless : false
      //   screenshot: 'on',
      //   video: 'retain-on-failure',
      //   trace: 'on',
      //   // viewport : {width:720, height:720},
      //   ignoreHTTPSErrors: true,
      //   permissions: ['geolocation']
      }
    },
    {
      name: 'Microsoft Edge',
      use: {
        // browserName : 'Microsoft Edge',
        channel: 'msedge',
        headless : false
      //   screenshot: 'on',
      //   video: 'retain-on-failure',
      //   trace: 'on',
      //   // viewport : {width:720, height:720},
      //   ignoreHTTPSErrors: true,
      //   permissions: ['geolocation']
      }
    }

  ]


};

module.exports = config;