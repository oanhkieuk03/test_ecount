import { test, expect } from '@playwright/test';
import { ForgotLoginPage } from '../page-objects/ForgotLoginPage';

test.describe('Forgot Login Page Tests', () => {
    let forgotPage: ForgotLoginPage;

    test.beforeEach(async ({ page }) => {
        forgotPage = new ForgotLoginPage(page);
        await forgotPage.goto();
    });

    // ──────────────────────────────────────────────
    // FUNCTIONAL — P0
    // ──────────────────────────────────────────────

    test('FLI_001: Page renders all required fields and buttons', async () => {
        await expect(forgotPage.nameInput).toBeVisible();
        await expect(forgotPage.recoveryEmailInput).toBeVisible();
        await expect(forgotPage.recoveryEmailRadio).toBeVisible();
        await expect(forgotPage.sendButton).toBeVisible();
        await expect(forgotPage.closeButton).toBeVisible();
    });

    test('FLI_002: Successful recovery with valid Name and Recovery Email', async ({ page }) => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.fillAndSend('[valid_name]', '[registered_email]@example.com');
        const msg = await alertMsg;
        expect(msg).toMatch(/sent|success/i);
    });

    test('FLI_003: Recovery with Name that does not match Recovery Email', async () => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.fillAndSend('WrongName', '[registered_email]@example.com');
        const msg = await alertMsg;
        expect(msg).toMatch(/not match|cannot be verified|does not match/i);
    });

    test('FLI_004: Recovery with correct Name but unregistered Recovery Email', async () => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.fillAndSend('[valid_name]', 'notregistered@example.com');
        const msg = await alertMsg;
        expect(msg).toMatch(/not match|cannot be verified|does not match/i);
    });

    // ──────────────────────────────────────────────
    // VALIDATION — P1
    // ──────────────────────────────────────────────

    test('FLI_005: Submit with all fields empty shows validation error', async () => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.sendButton.click();
        const msg = await alertMsg;
        expect(msg.length).toBeGreaterThan(0);
    });

    test('FLI_006: Submit with Name empty shows validation error', async () => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.recoveryEmailInput.fill('test@example.com');
        await forgotPage.sendButton.click();
        const msg = await alertMsg;
        expect(msg.length).toBeGreaterThan(0);
    });

    test('FLI_007: Submit with Recovery Email empty shows validation error', async () => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.nameInput.fill('[valid_name]');
        await forgotPage.sendButton.click();
        const msg = await alertMsg;
        expect(msg).toMatch(/email|entered/i);
    });

    test('FLI_008: Submit with invalid email format shows validation error', async ({ page }) => {
        const invalidEmails = ['notanemail', 'user@', '@domain.com'];
        for (const email of invalidEmails) {
            const alertMsg = forgotPage.getAlertMessage();
            await forgotPage.nameInput.fill('[valid_name]');
            await forgotPage.recoveryEmailInput.fill(email);
            await forgotPage.sendButton.click();
            const msg = await alertMsg;
            expect(msg).toMatch(/format|email|enter/i);
            // Reset for next iteration
            await forgotPage.nameInput.clear();
            await forgotPage.recoveryEmailInput.clear();
        }
    });

    // ──────────────────────────────────────────────
    // FUNCTIONAL — DEFAULT STATE & CLOSE
    // ──────────────────────────────────────────────

    test('FLI_009: "Reset passwords by Recovery Email" radio is selected by default', async () => {
        await expect(forgotPage.recoveryEmailRadio).toBeChecked();
    });

    test('FLI_010: Close button closes the popup', async ({ page }) => {
        // Intercept window.close() since we're not in a real popup context
        await page.evaluate(() => {
            window.close = () => { document.title = '__CLOSED__'; };
        });
        await forgotPage.closeButton.click();
        await expect(page).toHaveTitle('__CLOSED__');
    });

    // ──────────────────────────────────────────────
    // UI/UX — LAYOUT & NAVIGATION
    // ──────────────────────────────────────────────

    test('FLI_014: Master ID link is visible and clickable', async () => {
        await expect(forgotPage.masterIdLink).toBeVisible();
        await expect(forgotPage.masterIdLink).toHaveAttribute('href');
    });

    test('FLI_015: Instruction block is visible with guidance text', async () => {
        await expect(forgotPage.instructionBlock).toBeVisible();
        await expect(forgotPage.instructionBlock).toContainText(/Recovery Email/i);
        await expect(forgotPage.instructionBlock).toContainText(/Login Information Email/i);
    });

    test('FLI_017: Tab key navigates fields in logical order', async ({ page }) => {
        await forgotPage.nameInput.click();
        await page.keyboard.press('Tab');
        await expect(forgotPage.recoveryEmailInput).toBeFocused();
        await page.keyboard.press('Tab');
        await expect(forgotPage.sendButton).toBeFocused();
    });

    test('FLI_018: Enter key in Recovery Email field submits the form', async ({ page }) => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.nameInput.fill('[valid_name]');
        await forgotPage.recoveryEmailInput.fill('[registered_email]@example.com');
        await forgotPage.recoveryEmailInput.press('Enter');
        const msg = await alertMsg;
        expect(msg.length).toBeGreaterThan(0);
    });

    // ──────────────────────────────────────────────
    // EDGE CASES — P2
    // ──────────────────────────────────────────────

    test('FLI_019: Name with whitespace only is treated as empty', async () => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.nameInput.fill('   ');
        await forgotPage.recoveryEmailInput.fill('test@example.com');
        await forgotPage.sendButton.click();
        const msg = await alertMsg;
        expect(msg.length).toBeGreaterThan(0);
    });

    test('FLI_020: Recovery Email with whitespace only is treated as empty', async () => {
        const alertMsg = forgotPage.getAlertMessage();
        await forgotPage.nameInput.fill('[valid_name]');
        await forgotPage.recoveryEmailInput.fill('   ');
        await forgotPage.sendButton.click();
        const msg = await alertMsg;
        expect(msg.length).toBeGreaterThan(0);
    });

    test('FLI_021: Name with special characters does not crash or execute XSS', async ({ page }) => {
        let xssExecuted = false;
        page.on('dialog', async (dialog) => {
            if (dialog.message().includes('xss')) xssExecuted = true;
            await dialog.accept();
        });
        await forgotPage.nameInput.fill("<script>alert('xss')</script>");
        await forgotPage.recoveryEmailInput.fill('test@example.com');
        await forgotPage.sendButton.click();
        await page.waitForTimeout(1000);
        expect(xssExecuted).toBe(false);
    });

    test('FLI_022: Recovery Email with leading/trailing spaces does not crash', async ({ page }) => {
        page.on('dialog', async (dialog) => { await dialog.accept(); });
        await forgotPage.nameInput.fill('[valid_name]');
        await forgotPage.recoveryEmailInput.fill(' test@example.com ');
        await forgotPage.sendButton.click();
        await expect(page).not.toHaveURL('about:blank');
    });

    test('FLI_023: Extremely long Name input does not crash', async ({ page }) => {
        page.on('dialog', async (dialog) => { await dialog.accept(); });
        const longStr = 'A'.repeat(500);
        await forgotPage.nameInput.fill(longStr);
        await forgotPage.recoveryEmailInput.fill('test@example.com');
        await forgotPage.sendButton.click();
        await expect(page).not.toHaveURL('about:blank');
    });

    test('FLI_024: Extremely long Recovery Email input does not crash', async ({ page }) => {
        page.on('dialog', async (dialog) => { await dialog.accept(); });
        await forgotPage.nameInput.fill('[valid_name]');
        await forgotPage.recoveryEmailInput.fill('A'.repeat(500) + '@example.com');
        await forgotPage.sendButton.click();
        await expect(page).not.toHaveURL('about:blank');
    });

    // ──────────────────────────────────────────────
    // SECURITY — P1
    // ──────────────────────────────────────────────

    test('FLI_025: SQL injection in Name field is handled safely', async ({ page }) => {
        page.on('dialog', async (dialog) => { await dialog.accept(); });
        await forgotPage.nameInput.fill("' OR '1'='1");
        await forgotPage.recoveryEmailInput.fill('test@test.com');
        await forgotPage.sendButton.click();
        // Page must remain stable and not expose a DB error
        await expect(page).not.toHaveURL('about:blank');
        const bodyText = await page.locator('body').innerText();
        expect(bodyText).not.toMatch(/sql|syntax error|ORA-|mysql/i);
    });

    test('FLI_026: XSS in Recovery Email field does not execute script', async ({ page }) => {
        let xssExecuted = false;
        page.on('dialog', async (dialog) => {
            if (dialog.message().includes('xss')) xssExecuted = true;
            await dialog.accept();
        });
        await forgotPage.nameInput.fill('[valid_name]');
        await forgotPage.recoveryEmailInput.fill("<script>alert('xss')</script>@test.com");
        await forgotPage.sendButton.click();
        await page.waitForTimeout(1000);
        expect(xssExecuted).toBe(false);
    });

    // ──────────────────────────────────────────────
    // UI/UX — RESPONSIVE
    // ──────────────────────────────────────────────

    test('FLI_028: Responsive layout on mobile (375px)', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await expect(forgotPage.nameInput).toBeVisible();
        await expect(forgotPage.recoveryEmailInput).toBeVisible();
        await expect(forgotPage.sendButton).toBeVisible();
        await expect(forgotPage.closeButton).toBeVisible();
    });
});
