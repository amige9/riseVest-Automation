# RiseVest Automation Project

This project is an end-to-end test automation suite using Playwright for testing a web application, focusing on functionalities like user login, wallet balance verification, and plan creation. The test scripts are written in JavaScript and configured to run in different browsers (Chrome, Firefox, and Edge) across various environments.

## Table of Contents
* [Project Structure](#Project-Structure)
* [Prerequisites](#Prerequisites)
* [Setup and Installation](#Setup-and-Installation)
* [Environment Variables](#Environment-Variables)
* [Scripts](#Scripts)
* [Generating Reports](#Generating-Reports)
* [Configuration](#Configuration)
* [Troubleshooting](#Troubleshooting)
<br>
<br>

## Project Structure <br>
The key files and folders in this project include: 
<br>

├── pageObject/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            # Folder containing Page Object Model classes <br>
│   ├── POManager.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      # Manager class to initialize and manage page objects <br>
│   ├── LoginPage.js  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     # Page object for login functionality <br>
│   ├── WalletPage.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    # Page object for wallet functionality <br>
│   └── PlanPage.js   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   # Page object for plan functionality <br>
├── tests/   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    # Folder containing test scripts <br>
    ├── helper/   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    # Folder containing any helpers <br>
      ├── env/   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    # Folder containing the environment variables <br>
        ├── .env.prod/   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    # Production Enviroment variables <br>
│    ├── Login.spec.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     # Test file for login functionality <br>
│    ├── Wallet.spec.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   # Test file for wallet functionality <br>
│    └── Plan.spec.js  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      # Test file for plan functionality <br>
│    └── regression.spec.js  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Test file for regression <br>
├── utils/  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                # Utility folder for configuration and helper functions <br>
│   ├── env.js  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             # Environment configuration file <br>
│   └── globalSetup.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     # Global setup file for test initialization <br>
├── .gitignore  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            # Git ignore file <br>
├── playwright.config.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  # Playwright configuration file <br>
├── package.json   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         # Project's package configuration <br>
└── README.md   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            # Documentation for the project 
<br>
<br>

## Prerequisites
Ensure you have the following installed on your machine:
<br>
* [Node-js](https://nodejs.org/en) - for running JavaScript on the server<br>
* [Playwright](https://playwright.dev/docs/intro) - for end-to-end testing<br>
* [Git](https://git-scm.com/) - for version control<br>
<br>
<br>

## Setup and Installation

1. Clone the Repository: Clone this repository to your local machine. <br>
   ```markdown
   git clone https://github.com/amige9/riseVest-Automation.git <br>
   cd riseVest-Automation <br>
   ```
2. Install Dependencies: Run the following command to install all required dependencies: <br>
   ```markdown
   npm install   
   ```
3. Install Browsers: Playwright requires specific versions of browsers. Run the following command to install them: <br>
   ```markdown
   npx playwright install   
   ```

## Environment Variables <br>
To manage sensitive data (like login credentials), this project uses environment variables. <br>
Navigate to the helper folder > env > .env.prod to insert your login details <br>
   ```markdown
   EMAIL = "your-email@example.com"
  PASSWORD = "your-password"
   ```
<br>
<br>

## Scripts
The package.json includes scripts for running specific tests in different environments and browsers(chrome, firefox, edge):
* Run Login Tests:
     ```markdown
   npm run env:prodLoginTest
   ```
* Run Wallet Tests:
  ```markdown
   npm run env:prodWalletTest
   ```
* Run Plans Tests:
  ```markdown
   npm run env:prodPlanTest
   ```
* Run Full Regression Tests:
  ```markdown
   npm run env:prodRegressionTest
   ```
<br>
<br>

## Generating Reports
This project is set up to generate reports using [Allure Playwright Reporter](https://allurereport.org/docs/playwright/): <br>
1. Generate Allure Report
   ```markdown
   allure generate ./allure-results --clean
   ```

2. View Allure Report
   ```markdown
   allure open ./allure-report
   ```
<br>
<br>

## Configuration
The playwright.config.js file includes settings like:
* timeout: Maximum time a test can run (set to 120 seconds).
* expect: Configurations for assertion timeouts.
* projects: Defines browsers and configurations for running tests in Chrome, Firefox, and Edge.
* reporter: Defines the type of report generated (HTML by default).
* use: Shared settings for all tests, like enabling screenshots, trace, and video capture.

To modify any of these settings, edit the respective sections in playwright.config.js.

<br>
<br>

## Troubleshooting
1. Failed to Push to Remote: Ensure you pull the latest changes from the remote repository before pushing to avoid conflicts.
2. Browser Compatibility Issues: Use the latest browser versions supported by Playwright.
3. Timeout Errors: Increase the timeout in playwright.config.js if you encounter frequent timeout issues.


