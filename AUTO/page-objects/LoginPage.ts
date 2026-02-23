import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly companyCodeInput: Locator;
    readonly userIdInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly saveCodeIdCheckbox: Locator;
    readonly clockInCheckbox: Locator;
    readonly forgotLoginLink: Locator;
    readonly languageDropdown: Locator;
    readonly qrLoginTab: Locator;
    readonly idLoginTab: Locator;
    readonly websiteLink: Locator;
    readonly customerPortalLink: Locator;
    readonly userPayLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.companyCodeInput = page.locator('#com_code');
        this.userIdInput = page.locator('#id');
        this.passwordInput = page.locator('#passwd');
        this.loginButton = page.locator('#save');
        this.saveCodeIdCheckbox = page.locator('#loginck');
        this.clockInCheckbox = page.locator('#logintimeinck');
        this.forgotLoginLink = page.getByText('Forgot your login information?');
        this.languageDropdown = page.locator('button').filter({ hasText: 'United States' }).or(page.locator('.lang_select'));
        this.qrLoginTab = page.locator('a, li').filter({ hasText: 'QR Login' }).first();
        this.idLoginTab = page.locator('a, li').filter({ hasText: 'ID Login' }).first();
        this.websiteLink = page.locator('a, button').filter({ hasText: /i-Aicon Website/i }).first();
        this.customerPortalLink = page.locator('a, button').filter({ hasText: /Customer Portal/i }).first();
        this.userPayLink = page.locator('a, button').filter({ hasText: /UserPay/i }).first();
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(companyCode: string, userId: string, password: string) {
        await this.companyCodeInput.fill(companyCode);
        await this.userIdInput.fill(userId);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async switchLanguage(language: string) {
        await this.languageDropdown.click();
        await this.page.getByText(language).click();
        await this.page.waitForLoadState('networkidle');
    }

    async getErrorMessage(): Promise<Locator> {
        return this.page.locator('.error_box, #login_msg, .view-error').first();
    }
}
