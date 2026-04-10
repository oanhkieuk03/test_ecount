import { Page, Locator } from '@playwright/test';

export class PurchasesListPage {
    readonly page: Page;

    // Search & Filters
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly fnButton: Locator;
    readonly optionButton: Locator;

    // Status tabs
    readonly tabAll: Locator;
    readonly tabEApproval: Locator;
    readonly tabUnconfirmed: Locator;
    readonly tabConfirm: Locator;

    // Table
    readonly tableRows: Locator;
    readonly tableHeaders: Locator;
    readonly headerCheckbox: Locator;
    readonly dateNoLinks: Locator;
    readonly progressStatusLinks: Locator;

    // Toolbar buttons
    readonly newButton: Locator;
    readonly emailButton: Locator;
    readonly changeStatusButton: Locator;
    readonly sendButton: Locator;
    readonly printButton: Locator;
    readonly barcodeButton: Locator;
    readonly eApprovalButton: Locator;
    readonly deleteSelectedButton: Locator;
    readonly excelButton: Locator;
    readonly viewHistoryButton: Locator;

    // Date range
    readonly dateRange: Locator;

    constructor(page: Page) {
        this.page = page;

        // Search & Filters
        this.searchInput = page.locator('#quick_search');
        this.searchButton = page.locator('#search, [data-item-key="search_header_data_model"]').first();
        this.fnButton = page.locator('button.btn-fn').first();
        this.optionButton = page.locator('#option, [data-item-key="option_header_data_model"]').first();

        // Status tabs — li IDs: no-id=All, Z=e-Approval, N=Unconfirmed, Y=Confirm
        this.tabAll = page.locator('ul[data-id="list_tab"] li').filter({ hasText: /^All$/i }).first();
        this.tabEApproval = page.locator('ul[data-id="list_tab"] li#Z').first();
        this.tabUnconfirmed = page.locator('ul[data-id="list_tab"] li#N').first();
        this.tabConfirm = page.locator('ul[data-id="list_tab"] li#Y').first();

        // Table
        this.tableRows = page.locator('#grid-main tbody tr');
        this.tableHeaders = page.locator('#grid-main thead th');
        this.headerCheckbox = page.locator('#grid-main thead input[type="checkbox"]').first();
        this.dateNoLinks = page.locator('a[data-item-key*="data_dt_no_purchases"]');
        this.progressStatusLinks = page.locator('a[data-item-key*="progress_status_purchases"]');

        // Toolbar buttons (data-item-key attributes from captured HTML)
        this.newButton = page.locator('[data-item-key="new_footer_toolbar"]').first();
        this.emailButton = page.locator('[data-item-key="email_footer_toolbar"]').first();
        this.changeStatusButton = page.locator('[data-item-key="change_status_footer_toolbar"]')
            .or(page.locator('button').filter({ hasText: /Change Status/i })).first();
        this.sendButton = page.locator('[data-item-key="send_footer_toolbar"]').first();
        this.printButton = page.locator('[data-item-key="print_footer_toolbar"]').first();
        this.barcodeButton = page.locator('[data-item-key="barcode_footer_toolbar"]').first();
        this.eApprovalButton = page.locator('[data-item-key="e_approval_footer_toolbar"]').first();
        this.deleteSelectedButton = page.locator('[data-item-key="selected_delete_footer_toolbar"]').first();
        this.excelButton = page.locator('[data-item-key="excel_footer_toolbar"]').first();
        this.viewHistoryButton = page.locator('[data-item-key="history_footer_toolbar"]').first();

        // Date range shown in the top toolbar area
        this.dateRange = page.locator('.wrapper-toolbar .toolbar-text span, [class*="toolbar-text"] span').first();
    }

    async goto() {
        await this.page.goto(process.env.PURCHASES_LIST_URL ?? '/');
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

    async clickTab(tabName: 'All' | 'e-Approval' | 'Unconfirmed' | 'Confirm') {
        const tabMap: Record<string, Locator> = {
            'All': this.tabAll,
            'e-Approval': this.tabEApproval,
            'Unconfirmed': this.tabUnconfirmed,
            'Confirm': this.tabConfirm,
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
        const checkbox = this.tableRows.nth(rowIndex).locator('input[name="chkItem"]');
        await checkbox.check();
    }

    async getCellText(row: number, colIndex: number): Promise<string> {
        const cell = this.page.locator(`#grid-main tbody tr:nth-child(${row}) td:nth-child(${colIndex})`);
        return (await cell.textContent()) ?? '';
    }
}
