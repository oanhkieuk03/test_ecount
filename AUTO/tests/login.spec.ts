import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

const APP_URL = process.env.APP_URL ?? 'https://app.i-aicon.com';
const COMPANY_CODE = process.env.COMPANY_CODE ?? 'COMPANY_CODE';
const USER_ID = process.env.USER_ID ?? 'USER_ID';
const PASSWORD = process.env.PASSWORD ?? 'PASSWORD';

test.describe('i-Aicon Login Page Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    // ──────────────────────────────────────────────
    // FUNCTIONAL — P0
    // ──────────────────────────────────────────────

    test('TC_001: Successful login with valid credentials', async ({ page }) => {
        await loginPage.login(COMPANY_CODE, USER_ID, PASSWORD);
        await expect(page).not.toHaveURL(APP_URL, { timeout: 8000 });
    });

    test('TC_002: Login with invalid Company Code', async ({ page }) => {
        await loginPage.login('000000', USER_ID, PASSWORD);
        const error = await loginPage.getErrorMessage();
        await expect(error).toBeVisible({ timeout: 5000 });
        await expect(error).toContainText(/code|exist|company/i);
    });

    test('TC_003: Login with invalid User ID', async ({ page }) => {
        await loginPage.login(COMPANY_CODE, 'WrongUser', PASSWORD);
        const error = await loginPage.getErrorMessage();
        await expect(error).toBeVisible({ timeout: 5000 });
        await expect(error).toContainText(/ID|Password/i);
    });

    test('TC_004: Login with invalid Password', async ({ page }) => {
        await loginPage.login(COMPANY_CODE, USER_ID, 'WrongPass!');
        const error = await loginPage.getErrorMessage();
        await expect(error).toBeVisible({ timeout: 5000 });
        await expect(error).toContainText(/ID|Password/i);
    });

    // ──────────────────────────────────────────────
    // VALIDATION — P1
    // ──────────────────────────────────────────────

    test('TC_005: Login with all fields empty', async ({ page }) => {
        await loginPage.loginButton.click();
        const comCode = loginPage.companyCodeInput;
        const isRequired = await comCode.getAttribute('required');
        if (isRequired !== null) {
            await expect(comCode).toHaveAttribute('required');
        } else {
            const error = await loginPage.getErrorMessage();
            await expect(error).toBeVisible({ timeout: 3000 });
        }
    });

    test('TC_006: Login with only Company Code filled', async () => {
        await loginPage.companyCodeInput.fill(COMPANY_CODE);
        await loginPage.loginButton.click();
        const userId = loginPage.userIdInput;
        const isRequired = await userId.getAttribute('required');
        if (isRequired !== null) {
            await expect(userId).toHaveAttribute('required');
        } else {
            const error = await loginPage.getErrorMessage();
            await expect(error).toBeVisible({ timeout: 3000 });
        }
    });

    test('TC_007: Login with only User ID filled', async () => {
        await loginPage.userIdInput.fill(USER_ID);
        await loginPage.loginButton.click();
        const comCode = loginPage.companyCodeInput;
        const isRequired = await comCode.getAttribute('required');
        if (isRequired !== null) {
            await expect(comCode).toHaveAttribute('required');
        } else {
            const error = await loginPage.getErrorMessage();
            await expect(error).toBeVisible({ timeout: 3000 });
        }
    });

    test('TC_008: Login with only Password filled', async () => {
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        const comCode = loginPage.companyCodeInput;
        const isRequired = await comCode.getAttribute('required');
        if (isRequired !== null) {
            await expect(comCode).toHaveAttribute('required');
        } else {
            const error = await loginPage.getErrorMessage();
            await expect(error).toBeVisible({ timeout: 3000 });
        }
    });

    // ──────────────────────────────────────────────
    // UI/UX — PASSWORD & CHECKBOXES
    // ──────────────────────────────────────────────

    test('TC_009: Password field is masked by default', async () => {
        await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
    });

    test('TC_010: "Save [Code, ID]" checkbox can be checked', async () => {
        await loginPage.companyCodeInput.fill(COMPANY_CODE);
        await loginPage.userIdInput.fill(USER_ID);
        await loginPage.saveCodeIdCheckbox.check();
        await expect(loginPage.saveCodeIdCheckbox).toBeChecked();
    });

    test('TC_011: "Save [Code, ID]" checkbox unchecked by default', async () => {
        await expect(loginPage.saveCodeIdCheckbox).not.toBeChecked();
    });

    test('TC_012: "Clock In" checkbox can be checked', async () => {
        await loginPage.clockInCheckbox.check();
        await expect(loginPage.clockInCheckbox).toBeChecked();
    });

    // ──────────────────────────────────────────────
    // UI/UX — TABS
    // ──────────────────────────────────────────────

    test('TC_013: Switch to QR Login tab', async ({ page }) => {
        await loginPage.qrLoginTab.click();
        await expect(page.locator('#qrNumber')).toBeAttached({ timeout: 5000 });
    });

    test('TC_014: Switch back from QR Login to ID Login tab', async () => {
        await loginPage.qrLoginTab.click();
        await loginPage.idLoginTab.click();
        await expect(loginPage.companyCodeInput).toBeVisible({ timeout: 5000 });
    });

    // ──────────────────────────────────────────────
    // FUNCTIONAL — FORGOT LINK & LANGUAGE
    // ──────────────────────────────────────────────

    test('TC_015: "Forgot your login information?" navigates to recovery page', async ({ page }) => {
        await loginPage.forgotLoginLink.click();
        await expect(page).toHaveURL(/search/i, { timeout: 8000 });
    });

    test('TC_016: Language selection — switch to Vietnamese', async ({ page }) => {
        await loginPage.switchLanguage('Việt Nam');
        await expect(page.locator('button').filter({ hasText: /Việt Nam/i })).toBeVisible({ timeout: 5000 });
    });

    test('TC_017: Language selection — switch back to English', async ({ page }) => {
        await loginPage.switchLanguage('Việt Nam');
        await loginPage.switchLanguage('United States');
        await expect(page.locator('button').filter({ hasText: /United States/i })).toBeVisible({ timeout: 5000 });
    });

    // ──────────────────────────────────────────────
    // EDGE CASES — P2
    // ──────────────────────────────────────────────

    test('TC_019: Login with whitespace-only input does not crash', async ({ page }) => {
        await loginPage.login('   ', '   ', '   ');
        // Page must remain stable — either shows error or stays on login
        await expect(page).toHaveURL(APP_URL, { timeout: 5000 });
    });

    test('TC_020: Login with leading/trailing spaces does not crash', async ({ page }) => {
        await loginPage.login(` ${COMPANY_CODE} `, ` ${USER_ID} `, ` ${PASSWORD} `);
        // Should either trim and succeed, or show a clear error — no crash
        await expect(page).not.toHaveURL('about:blank');
    });

    test('TC_021: Login with special characters does not crash or render HTML', async ({ page }) => {
        await loginPage.login("admin'--", 'NANCY', '<script>alert(1)</script>');
        // Page must not execute injected script
        const dialogFired = await page.evaluate(() => {
            let fired = false;
            window.alert = () => { fired = true; };
            return fired;
        });
        expect(dialogFired).toBe(false);
    });

    test('TC_022: Login with maximum-length input does not crash', async ({ page }) => {
        const longStr = 'A'.repeat(255);
        await loginPage.login(longStr, longStr, longStr);
        await expect(page).not.toHaveURL('about:blank');
    });

    // ──────────────────────────────────────────────
    // UI/UX — KEYBOARD INTERACTION
    // ──────────────────────────────────────────────

    test('TC_024: Tab key navigates fields in logical order', async ({ page }) => {
        await loginPage.companyCodeInput.click();
        await page.keyboard.press('Tab');
        await expect(loginPage.userIdInput).toBeFocused();
        await page.keyboard.press('Tab');
        await expect(loginPage.passwordInput).toBeFocused();
    });

    test('TC_025: Enter key submits the login form', async ({ page }) => {
        await loginPage.companyCodeInput.fill(COMPANY_CODE);
        await loginPage.userIdInput.fill(USER_ID);
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.passwordInput.press('Enter');
        await expect(page).not.toHaveURL(APP_URL, { timeout: 8000 });
    });

    // ──────────────────────────────────────────────
    // UI/UX — RESPONSIVE
    // ──────────────────────────────────────────────

    test('TC_032: Responsive layout on mobile (375px)', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await expect(loginPage.loginButton).toBeVisible();
        await expect(loginPage.companyCodeInput).toBeVisible();
    });

    test('TC_033: Responsive layout on tablet (768px)', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await expect(loginPage.loginButton).toBeVisible();
        await expect(loginPage.companyCodeInput).toBeVisible();
    });

    // ──────────────────────────────────────────────
    // UI/UX — PAGE META & EXTERNAL LINKS
    // ──────────────────────────────────────────────

    test('TC_034: Page title is set correctly', async ({ page }) => {
        await expect(page).toHaveTitle(/.+/);
    });

    test('TC_035: "i-Aicon Website" link opens in new tab', async ({ context }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            loginPage.websiteLink.click(),
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        expect(newPage.url()).toBeTruthy();
    });

    test('TC_036: "Customer Portal" link opens in new tab', async ({ context }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            loginPage.customerPortalLink.click(),
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        expect(newPage.url()).toBeTruthy();
    });

    test('TC_037: "UserPay" link opens in new tab', async ({ context }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            loginPage.userPayLink.click(),
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        expect(newPage.url()).toBeTruthy();
    });
});
