const { expect } = require('@playwright/test');

class PlanPage {

    // Constructor to initialize the page and element locators on the page
    constructor(page) {
        this.page = page;
        this.planButtonLocator = this.page.locator("a[href='/plans']");
        this.realEstateLocator = this.page.locator("a[href='/plans/new/real-estate']");
        this.getStartedButton = this.page.locator("text=Get Started");
        this.planNameFieldLocator = this.page.locator("#name");
        this.continueButton = this.page.locator("text=Continue");
        this.createPlanButton = this.page.locator("button[type='submit']");
        this.viewPlanButton = this.page.locator("text=View Plan");
        this.noLaterButton = this.page.locator("text=No, later");
        this.planNameLocator = this.page.locator(".text-sm.isolate p")
    }

    // Click the "Plans" button to navigate to the Plans page.
    async clickOnPlansButton() {
        await this.planButtonLocator.click();
    }

    // verifies that the user is on the Plan page by checking the URL
    async assertUserIsOnPlanPage() {
        expect(this.page).toHaveURL('https://app.risevest.com/plans');
    }

    // CLick on the Real Estate Link to get started on creating a Real Estate Plan
    async clickRealEstateLink() {
        await this.realEstateLocator.click();
    }

    // Clicks the "Get Started" button to start plan creation
    async clickGetStartedButton() {
        await this.getStartedButton.nth(0).click();
    }

    // Enter a plan name in the Plan Name field
    async enterPlanName(planName) {
        await this.planNameFieldLocator.fill(planName)
    }

    // Clicks the "Continue" button to proceed to the next step
    async clickContinueButton() {
        await this.continueButton.click();
    }

    // Returns a locator for selecting a plan duration based on a given number
    getPlanDurationLocator(duration) {
        return this.page.locator(`text=${duration}`);
    }

    // Selects a plan duration by clicking the respective option based on input
    async selectPlanDuration(duration) {
        const planDurationLocator = this.getPlanDurationLocator(duration);
        await planDurationLocator.nth(0).click();
    }

    // Clicks the "Create Plan" button to finalize the plan creation
    async clickCreatePlanButton() {
        await this.createPlanButton.click();
    }

    // Clicks the "View Plan" button to navigate to the newly created plan's page
    async clickViewPlanButton() {
        await this.viewPlanButton.click();
    }

    // Declines adding money to the plan by clicking the "No, later" button
    async rejectAddingMoney() {
        await this.noLaterButton.click();
    }

    // Verifies that a plan with the specified name has been successfully added
    async assertPlanIsAdded(planName) {
        // Navigate back to the Plans page and reload to ensure content is up-to-date
        await this.planButtonLocator.click();
        await this.page.reload();

        // Initialize an empty array to store the text content of each plan name
        const investmentNames = [];

        // Get the count of plan name elements
        const count = await this.planNameLocator.count();

        // Loop through each element and add its text content to the array
        for (let i = 0; i < count; i++) {
            const name = await this.planNameLocator.nth(i).textContent();
            investmentNames.push(name.trim());  // Use trim() to remove any extra whitespace
        }

        // Assert that the specified plan name is present in the list of plan names
        expect(investmentNames).toContain(planName);

    }


}

module.exports = { PlanPage }