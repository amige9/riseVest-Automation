// Importing Playwright's 'expect' utility for assertions
const { expect } = require('@playwright/test');

class WalletPage {

    // Constructor to initialize the page and element locators
    constructor(page) {
        this.page = page;
        this.walletButtonLocator = this.page.locator("a[href='/wallet']");
        this.walletBalance = this.page.locator("p[class='mt-3 font-tomato text-[2rem] text-center']");
        this.balanceToggleButton = this.page.locator('button[class="text-soft"]');
        this.toggleIcon = this.page.locator("button[class='text-primary']")
    }

    // Clicks the Wallet button to navigate to the Wallet page.
    async clickOnWalltetButton() {
        // Using 'nth(1)' to target the second instance of the wallet button, as they are two elemennts with the same locator
        await this.walletButtonLocator.nth(1).click();
    }

    // Asserts that the user is on the Wallet page by checking the URL
    async assertUserIsOnWalletPage() {
        expect(this.page).toHaveURL('https://app.risevest.com/wallet');
    }

    // Verifies the wallet balance by removing the dollar sign and comparing the remaining value
    async verifyWalletBalance() {
        // Get the wallet balance text content (e.g., "$0.00")
        const balanceText = await this.walletBalance.textContent();

        // Remove the dollar sign and retain the numeric balance (e.g., "0.00")
        const balanceValue = balanceText.replace('$', '');

        // Verify the balance value is "0.00"
        expect(balanceValue).toEqual("0.00")
    }


    async showHideBalance() {
        // Vet the current wallet balance text
        var balanceText = await this.walletBalance.textContent();

        // Check if the balance is currently visible
        if (balanceText == "$0.00") {
            // Click the toggle to hide the balance
            await this.toggleIcon.click();
            console.log("The balance is hidden")

            // Re-fetch the balance text after toggling
            var balanceText = await this.walletBalance.textContent();

            // Check if the balance is hidden
            if (balanceText == "******") {
                // Click the toggle to show the balance
                await this.toggleIcon.click();
                console.log("The balance is shown")
            }
        } else {
            // Check if the balance is currently hidden
            if (balanceText == "******") {
                // Click the toggle to show the balance
                await this.toggleIcon.click();
                console.log("The balance is shown")

                // Re-fetch the balance text after toggling
                var balanceText = await this.walletBalance.textContent();

                // Check if the balance is visible
                if (balanceText == "$0.00") {
                    // click the toggle to hide the balance
                    await this.toggleIcon.click();
                    console.log("The balance is hidden")
                }
            }


            // await this.toggleIcon.click();
            // console.log("The balance is hidden")
        }

    }


}

// Exporting the WalletPage class for use in other modules
module.exports = { WalletPage }