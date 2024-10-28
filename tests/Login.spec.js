// Import required modules
const { test } = require('@playwright/test');
const { POManager } = require('../pageObject/POManager');
const ENV = require('../utils/env')

// Import Test Data
const invalidLoginData = JSON.parse(JSON.stringify(require('../testData/invalidLoginTestData.json')))


// Configure test suite to run tests in parallel mode
test.describe.configure({ mode: "parallel" });

// Test script for a valid login attempt
test('@regression Valid Login Test', async ({ page }) => {

    // Initialize Page Object Manager
    const poManager = new POManager(page);

    // Initialize individual Page Objects
    const loginPage = poManager.getLoginPage();

    // Navigate to the login page
    await loginPage.goTo();

    // Perform login using valid credentials from environment variables
    await loginPage.login(ENV.EMAIL, ENV.PASSWORD);

    // Accept the notfication prompt
    await loginPage.acceptNotification();

    // Assert that the user has logged in successfully
    await loginPage.assertLoggedInSuccessfully("Home - Risevest", "https://app.risevest.com/");

})

// Test script for invalid login with an invalid email
test('InValid Login Test with Invalid email', async ({ page }) => {

    // Initialize the Page Object Manager
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    // Navigate to the login page
    await loginPage.goTo();

    // Perform login with invalid email from test data
    await loginPage.login(invalidLoginData[0].email, invalidLoginData[0].password);

    // Assert that the appropriate error message is displayed
    await loginPage.assertErrorMessageIsDisplayed();

     // Assert that the user has not logged in
    await loginPage.assertLoggedNotInSuccessfully();

})

// Test case for invalid login with an invalid password
test('Invalid Login Test with Invalid Password', async ({ page }) => {
    // Initialize the Page Object Manager
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    // Navigate to the login page
    await loginPage.goTo();

    // Perform login with valid email but invalid password from test data
    await loginPage.login(invalidLoginData[1].email, invalidLoginData[1].password);

    // Assert that the appropriate error message is displayed
    await loginPage.assertErrorMessageIsDisplayed();

    // Assert that the user has not logged in
    await loginPage.assertLoggedNotInSuccessfully();
});

// Test case for invalid login with an empty password
test('Invalid Login Test with Empty Password', async ({ page }) => {
    // Initialize the Page Object Manager
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    // Navigate to the login page
    await loginPage.goTo();

    // Perform login with valid email but empty password from test data
    await loginPage.login(invalidLoginData[2].email, invalidLoginData[2].password);

    // Assert that the appropriate error message for the password field is displayed
    await loginPage.assertPasswordErrorMsgIsDisplayed();

    // Assert that the user has not logged in
    await loginPage.assertLoggedNotInSuccessfully();
});

// Test case for invalid login with an empty email
test('Invalid Login Test with Empty Email', async ({ page }) => {
    // Initialize the Page Object Manager
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    // Navigate to the login page
    await loginPage.goTo();

    // Perform login with empty email but valid password from test data
    await loginPage.login(invalidLoginData[3].email, invalidLoginData[3].password);

    // Assert that the appropriate error message for the email field is displayed
    await loginPage.assertEmailErrorMsgIsDisplayed();

    // Assert that the user has not logged in
    await loginPage.assertLoggedNotInSuccessfully();
});