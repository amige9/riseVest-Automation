const { test } = require('@playwright/test');
const ENV = require('../utils/env');
const { POManager } = require('../pageObject/POManager');
const { faker } = require('@faker-js/faker');




test("Create a Valid Plan Test", async ({ page }) => {

    // Initialize Page Object Manager
    const poManager = new POManager(page);

    // Initialize individual Page Objects
    const loginPage = poManager.getLoginPage();
    const planPage = poManager.getPlanPage();

    // Log in to the application using credentials from ENV variables
    // The function accepts email, password, expected page title, expected URL, and notification handling
    await loginPage.loginAsUser(ENV.EMAIL, ENV.PASSWORD,
        "Home - Risevest", "https://app.risevest.com/", true)


    // Navigate to the Plans page by clicking the "Plans" button
    await planPage.clickOnPlansButton();

    // Verify navigation to the Plans page by asserting the URL
    await planPage.assertUserIsOnPlanPage();

    // Click the "Real Estate" link to start creating a Real Estate plan
    await planPage.clickRealEstateLink();

    // Click the "Get Started" button to proceed with plan creation
    await planPage.clickGetStartedButton();

    // Generate a unique plan name using faker and enter it in the Plan Name field
    const planName = faker.commerce.productName();
    await planPage.enterPlanName(planName);

    // Click the "Continue" button to move to the next step in plan creation
    await planPage.clickContinueButton();

    // Select the plan duration of 6 months
    await planPage.selectPlanDuration(6);

    // Click the "Create Plan" button to finalize the plan creation
    await planPage.clickCreatePlanButton();

    // Click the "View Plan" button to view the newly created plane
    await planPage.clickViewPlanButton();

    // Decline to add money to the plan by clicking "No, later"
    await planPage.rejectAddingMoney();

    // Verify that the newly created plan with the specified name is successfully added
    await planPage.assertPlanIsAdded(planName);

})