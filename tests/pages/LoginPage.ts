import { Page, expect } from '@playwright/test';

export class LoginPage {
    private emailInput;
    private loginButton;
    private otpInput;
    private verifyOtpButton;

    constructor(private page: Page) {
        if (!page) {
            throw new Error('Page object is required in LoginPage');
        }
        this.emailInput = this.page.getByTestId('email');
        this.loginButton = this.page.getByTestId('login_button');
        this.otpInput = this.page.getByTestId('verify_otp_code');
        this.verifyOtpButton = this.page.getByTestId('verifyOtp_button');
    }

    async navigate() {
        await this.page.goto('https://qa-contractorportal.birlaopus.com/');
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async enterOTP(otp: string) {
        await this.otpInput.waitFor({ timeout: 50000 });
        await this.otpInput.fill(otp);
    }

    async clickVerifyOTPButton() {
        await this.verifyOtpButton.click();
    }

    async verifySuccessfulLogin() {
        await expect(this.page).toHaveTitle(/QABirlaOPUSPainterApp/);
    }
}
