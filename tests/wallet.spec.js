// Import required modules
const { test } = require('@playwright/test')
const { POManager } = require('../pageObject/POManager')
const ENV = require('../utils/env')


test('View Wallet Balance Test', async ({ page }) => {

    // Initialize Page Object Manager
    const poManager = new POManager(page);

    // Initialize individual Page Objects
    const loginPage = poManager.getLoginPage();
    const walletPage = poManager.getWalletPage();

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
})