import { When } from '@cucumber/cucumber'
import { LoginPage } from '../pages/LoginPage'

// This step performs the full login flow for "User login to the site" in Painter.feature
When('User login to the site', { timeout: 120 * 1000 }, async function () {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
    // You may want to use environment variables or a fixture for credentials in real tests
    await this.loginPage.enterEmail('prachi@adityabirla.com')
    await this.loginPage.clickLoginButton()
    await this.loginPage.enterOTP('123456')
    await this.loginPage.clickVerifyOTPButton()
    await this.loginPage.verifySuccessfulLogin()
})

