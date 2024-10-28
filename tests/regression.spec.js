// Import required modules
const { test } = require('@playwright/test')
const { POManager } = require('../pageObject/POManager')
const ENV = require('../utils/env')


test('End to End Regressiob Test', async ({ page }) => {

    // Initialize Page Object Manager
    const poManager = new POManager(page);

    // Initialize individual Page Objects
    const loginPage = poManager.getLoginPage();
    const walletPage = poManager.getWalletPage();
    const planPage = poManager.getPlanPage();

    // Perform login action using reusable function 'loginAsUser' from the LoginPage
    // The function accepts email, password, expected page title, expected URL, and notification handling
    await loginPage.loginAsUser(ENV.EMAIL, ENV.PASSWORD,
        "Home - Risevest", "https://app.risevest.com/", true)

    // Navigate to the Wallet page by clicking the Wallet button
    await walletPage.clickOnWalltetButton();

    // Assert that the user has successfully navigated to the Wallet page
    await walletPage.assertUserIsOnWalletPage();

    // Verify the wallet balance displayed on the page
    await walletPage.verifyWalletBalance();

    // Ensure the balance is hidden/shown as expected when the corresponding button/toggle is clicked.
    await walletPage.showHideBalance();

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