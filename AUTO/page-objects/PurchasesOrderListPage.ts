import { Page, Locator } from '@playwright/test';

export class PurchasesOrderListPage {
    readonly page: Page;

    // Search & Filters
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly fnButton: Locator;
    readonly optionButton: Locator;

    // Status tabs — IDs extracted from captured HTML
    readonly tabAll: Locator;
    readonly tabEApproval: Locator;
    readonly tabUnconfirmed: Locator;
    readonly tabConfirm: Locator;
    readonly tabProcessing: Locator;
    readonly tabFinished: Locator;

    // Table
    readonly tableRows: Locator;
    readonly tableHeaders: Locator;
    readonly headerCheckbox: Locator;
    readonly dateNoLinks: Locator;
    readonly progressStatusCells: Locator;
    readonly createdSlipViewButtons: Locator;
    readonly rowPrintLinks: Locator;

    // Toolbar buttons
    readonly newButton: Locator;
    readonly emailButton: Locator;
    readonly changeStatusButton: Locator;
    readonly sendButton: Locator;
    readonly printButton: Locator;
    readonly barcodeButton: Locator;
    readonly generateOtherSlipsButton: Locator;
    readonly eApprovalButton: Locator;
    readonly deleteSelectedButton: Locator;
    readonly excelButton: Locator;
    readonly viewHistoryButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Search & Filters
        this.searchInput = page.locator('#__headerQuick');
        this.searchButton = page.locator('#tgHeaderSearch').first();
        this.fnButton = page.locator('button.btn-fn').first();
        this.optionButton = page.locator('#tgHeaderOption').first();

        // Status tabs — tab IDs from captured HTML
        this.tabAll = page.locator('#tabAll').first();
        this.tabEApproval = page.locator('#tabReporting').first();
        this.tabUnconfirmed = page.locator('#tabUnconfirmed').first();
        this.tabConfirm = page.locator('#tabConfirm').first();
        this.tabProcessing = page.locator('#state_60_1').first();
        this.tabFinished = page.locator('#state_60_9').first();

        // Table
        this.tableRows = page.locator('#grid-main tbody tr');
        this.tableHeaders = page.locator('#grid-main thead th');
        this.headerCheckbox = page.locator('#grid-main thead th[data-columnid="CHK_H"] input[type="checkbox"]').first();
        this.dateNoLinks = page.locator('#grid-main tbody td[data-columnid="sale040.ord_date_no"] a');
        this.progressStatusCells = page.locator('#grid-main tbody td[data-columnid="sale040.s_end"]');
        this.createdSlipViewButtons = page.locator('#grid-main tbody td[data-columnid="sale040.s_state"] a, #grid-main tbody td[data-columnid="sale040.s_state"] button');
        this.rowPrintLinks = page.locator('#grid-main tbody td[data-columnid="sale040.s_print"] a');

        // Toolbar buttons — IDs and text fallbacks from captured HTML
        this.newButton = page.locator('#outputNew').first();
        this.emailButton = page.locator('#group8outputEmail, [id*="outputEmail"]').first();
        this.changeStatusButton = page.locator('button, a').filter({ hasText: /Change Status/i }).first();
        this.sendButton = page.locator('[id*="no_action"], button').filter({ hasText: /^Send/i }).first();
        this.printButton = page.locator('[id*="print"]').filter({ hasText: /^Print/i }).first();
        this.barcodeButton = page.locator('[id*="outputBarcode"]').first();
        this.generateOtherSlipsButton = page.locator('button, a').filter({ hasText: /Generate Other Slips/i }).first();
        this.eApprovalButton = page.locator('button, a').filter({ hasText: /e-Approval/i }).first();
        this.deleteSelectedButton = page.locator('button, a').filter({ hasText: /Delete Selected/i }).first();
        this.excelButton = page.locator('#outputExcel').first();
        this.viewHistoryButton = page.locator('button, a').filter({ hasText: /View History/i }).first();
    }

    async goto() {
        await this.page.goto(process.env.PURCHASES_ORDER_LIST_URL ?? '/');
    }

    async search(keyword: string) {
        await this.searchInput.fill(keyword);
        await this.searchButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clearSearch() {
        await this.searchInput.clear();
        await this.searchButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickTab(tabName: 'All' | 'e-Approval' | 'Unconfirmed' | 'Confirm' | 'Processing' | 'Finished') {
        const tabMap: Record<string, Locator> = {
            'All': this.tabAll,
            'e-Approval': this.tabEApproval,
            'Unconfirmed': this.tabUnconfirmed,
            'Confirm': this.tabConfirm,
            'Processing': this.tabProcessing,
            'Finished': this.tabFinished,
        };
        await tabMap[tabName].click();
        await this.page.waitForLoadState('networkidle');
    }

    async getRowCount(): Promise<number> {
        return this.tableRows.count();
    }

    async getColumnHeader(columnName: string): Promise<Locator> {
        return this.page.locator('#grid-main thead th').filter({ hasText: new RegExp(columnName, 'i') }).first();
    }

    async checkRow(rowIndex: number) {
        const checkbox = this.tableRows.nth(rowIndex).locator('input[type="checkbox"]');
        await checkbox.check();
    }

    async getCellText(row: number, colIndex: number): Promise<string> {
        const cell = this.page.locator(`#grid-main tbody tr:nth-child(${row}) td:nth-child(${colIndex})`);
        return (await cell.textContent()) ?? '';
    }
}
