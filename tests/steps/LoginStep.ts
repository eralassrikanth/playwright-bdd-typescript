import { Given, When, Then } from '@cucumber/cucumber'
import { LoginPage } from '../pages/LoginPage'

Given('I am on the login page', { timeout: 30000 }, async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('I enter my email {string}', async function (email) {
  await this.loginPage.enterEmail(email);
});

When('I click the login button', async function () {
  // Since the login button locator is empty in this.loginPage, let's use direct selector
  await this.loginPage.clickLoginButton();
});

When('I enter the OTP {string}', { timeout: 100 * 1000 }, async function (otp) {
  await this.loginPage.enterOTP(otp)
});

When('I click the verify OTP button', async function () {
  await this.loginPage.clickVerifyOTPButton();
});

Then('I should be logged in successfully', async function () {
  await this.loginPage.verifySuccessfulLogin();
});