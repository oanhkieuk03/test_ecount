import { Page, Locator } from '@playwright/test';

export class ForgotLoginPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly recoveryEmailInput: Locator;
    readonly recoveryEmailRadio: Locator;
    readonly sendButton: Locator;
    readonly closeButton: Locator;
    readonly instructionBlock: Locator;
    readonly masterIdLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('#UNAME');
        this.recoveryEmailInput = page.locator('#restoreEmail');
        this.recoveryEmailRadio = page.locator('#restore_type1');
        this.sendButton = page.locator('#sendMail');
        this.closeButton = page.locator('#close');
        this.instructionBlock = page.locator('#divMsgEmail');
        this.masterIdLink = page.locator('#divMsgEmail a');
    }

    async goto() {
        await this.page.goto(
            process.env.FORGOT_URL ?? '/'
        );
    }

    async fillAndSend(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.recoveryEmailInput.fill(email);
        await this.sendButton.click();
    }

    async getAlertMessage(): Promise<string> {
        return new Promise((resolve) => {
            this.page.once('dialog', async (dialog) => {
                const msg = dialog.message();
                await dialog.accept();
                resolve(msg);
            });
        });
    }
}
