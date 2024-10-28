# riseVest Automation Project

This project is an end-to-end test automation suite using Playwright for testing a web application, focusing on functionalities like user login, wallet balance verification, and plan creation. The test scripts are written in JavaScript and configured to run in different browsers (Chrome, Firefox, and Edge) across various environments.

## Table of Contents
* [Project Structure](#Project-Structure)
* [Prerequisites](#Prerequisites)
* Setup and Installation
* Environment Variables
* Scripts
* Running Tests
* Generating Reports
* Configuration
<br>
Project Structure <br>
The key files and folders in this project include:
```
├── pageObject/          # Folder containing Page Object Model classes
│   ├── POManager.js     # Manager class to initialize and manage page objects
│   ├── LoginPage.js     # Page object for login functionality
│   ├── WalletPage.js    # Page object for wallet functionality
│   └── PlanPage.js      # Page object for plan functionality
├── tests/               # Folder containing test scripts
│   ├── Login.spec.js    # Test file for login functionality
│   ├── Wallet.spec.js   # Test file for wallet functionality
│   └── Plan.spec.js     # Test file for plan functionality
├── utils/               # Utility folder for configuration and helper functions
│   ├── env.js           # Environment configuration file
│   └── globalSetup.js   # Global setup file for test initialization
├── .gitignore           # Git ignore file
├── playwright.config.js # Playwright configuration file
├── package.json         # Project's package configuration
└── README.md            # Documentation for the project
```
## Prerequisites
