// Importing Playwright's 'expect' utility for assertions
const { expect } = require('@playwright/test');



class LoginPage {

    // Constructor to initialize the page and element locators
    constructor(page) {
        this.page = page;
        this.email = this.page.locator("#email");
        this.password = this.page.locator("#password");
        this.signInButton = this.page.locator("button[type='submit']");
        this.errorMessage = this.page.locator(".MuiAlert-message.css-1pxa9xg-MuiAlert-message");
        this.passwordErrorMessage = this.page.locator("#password-helper-text");
        this.emailErrorMessage = this.page.locator("#email-helper-text");
        this.notifcationButton = this.page.locator('text=Yes, allow notifications')
        this.acceptNotifcationButton = this.page.locator('text=Okay, got it!')
    }

    // Method to navigate to the login page URL, using the environment variable for the base URL
    async goTo(loginUrl) {
        await this.page.goto(loginUrl, {timeout:90000}); 
    }

    // Method to perform the login operation by filling in the email and password, then clicking the sign-in button
    async login(email, pass) {
        await this.email.fill(email);    // Fill email field
        await this.password.fill(pass);  // Fill password field
        await this.signInButton.click(); // Click on sign-in button
        // await this.page.waitForLoadState('networkidle'); // Wait for the page to finish network requests
    }


    // Assertion to verify the user is logged in successfully by checking page title and URL
    async assertLoggedInSuccessfully(expectedTitle, expectedUrl) {
        await expect(this.page).toHaveTitle(expectedTitle); // Check if the page title matches the expected title
        await expect(this.page).toHaveURL(expectedUrl); // Check if the URL matches the expected URL
    }

    // 
    async acceptNotification(){
        // const browserName = browser.browserType();
        // console.log(browserName)
        // console.log(`Running acceptNotification. Browser: ${browserName}`); // Debugging output

        await this.notifcationButton.click();
        // if (browserName === 'firefox') {
        //     this.page.on('dialog', async dialog => {
        //         console.log('Dialog detected, accepting...');
        //         await dialog.accept();
        //     });
        // }
        await this.acceptNotifcationButton.click();

       
    }

    // Assertion to verify the error message is displayed for invalid login attempts
    async assertErrorMessageIsDisplayed() {
        const text = await this.errorMessage.textContent(); // Capture error message content
        expect(text).toEqual("Invalid email or password."); // Validate the error message content
    }

    // Assertion to verify the password error message is displayed
    async assertPasswordErrorMsgIsDisplayed() {
        const passwordText = await this.passwordErrorMessage.textContent(); // Capture password error message content
        expect(passwordText).toEqual("Enter your password"); // Validate the password error message content
    }

    // Assertion to verify the email error message is displayed
    async assertEmailErrorMsgIsDisplayed() {
        const emailText = await this.emailErrorMessage.textContent(); // Capture email error message content
        expect(emailText).toEqual("Enter your email address"); // Validate the email error message content
    }

    // Assertion to verify the user is not logged in by checking the page title
    async assertLoggedNotInSuccessfully() {
        await expect(this.page).not.toHaveTitle("Home - Risevest"); // Validate that the title is not the Home page title
    }

    //Reusable Login Function
    async loginAsUser(email, password, expectedTitle, expectedUrl,notificationAction=false) {
        await this.goTo(process.env.BASEURL);
        await this.login(email, password);
        await this.assertLoggedInSuccessfully(expectedTitle, expectedUrl);
        if(notificationAction){
            await this.acceptNotification()
        }


    }

}

// Exporting the LoginPage class for use in other modules
module.exports = { LoginPage };


