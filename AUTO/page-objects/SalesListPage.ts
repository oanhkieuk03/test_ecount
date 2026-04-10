import { Page, Locator } from '@playwright/test';

export class SalesListPage {
    readonly page: Page;

    // Search & Filters
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly fnButton: Locator;
    readonly optionButton: Locator;

    // Status tabs — li IDs extracted from captured HTML
    // Standard: Z=e-Approval, N=Unconfirmed, Y=Confirm
    // Extended: Y∬9=Xác nhận, Y∬01=INV pending, Y∬2=Confirm (do not issue invoice)
    readonly tabAll: Locator;
    readonly tabEApproval: Locator;
    readonly tabUnconfirmed: Locator;
    readonly tabConfirm: Locator;
    readonly tabXacNhan: Locator;
    readonly tabINVPending: Locator;
    readonly tabConfirmNoInvoice: Locator;

    // Table
    readonly tableRows: Locator;
    readonly tableHeaders: Locator;
    readonly headerCheckbox: Locator;
    readonly dateNoLinks: Locator;
    readonly salesNoLinks: Locator;

    // Toolbar buttons — data-item-key attributes from captured HTML
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

    constructor(page: Page) {
        this.page = page;

        // Search & Filters
        this.searchInput = page.locator('#quick_search');
        this.searchButton = page.locator('[data-item-key="search_header_data_model"]').first();
        this.fnButton = page.locator('[data-item-key="fn_button"]').first();
        this.optionButton = page.locator('[data-item-key="option_header_data_model"]').first();

        // Status tabs — simple IDs use li#ID; special-char IDs use attribute selector
        this.tabAll = page.locator('ul#list_tab li').filter({ hasText: /^All$/i }).first();
        this.tabEApproval = page.locator('ul#list_tab li#Z').first();
        this.tabUnconfirmed = page.locator('ul#list_tab li#N').first();
        this.tabConfirm = page.locator('ul#list_tab li#Y').first();
        this.tabXacNhan = page.locator('ul#list_tab li').filter({ hasText: /Xác nhận/i }).first();
        this.tabINVPending = page.locator('ul#list_tab li').filter({ hasText: /INV pending|chờ ký/i }).first();
        this.tabConfirmNoInvoice = page.locator('ul#list_tab li').filter({ hasText: /do not issue invoice/i }).first();

        // Table
        this.tableRows = page.locator('#grid-main tbody tr');
        this.tableHeaders = page.locator('#grid-main thead th');
        this.headerCheckbox = page.locator('#grid-main thead input[type="checkbox"]').first();
        this.dateNoLinks = page.locator('a[data-item-key="data_dt_no_salesXlist"]');
        this.salesNoLinks = page.locator('#grid-main tbody td[data-columnid*="no_001"] a');

        // Toolbar buttons
        this.newButton = page.locator('[data-item-key="new_footer_toolbar"]').first();
        this.emailButton = page.locator('[data-item-key="email_footer_toolbar"]').first();
        this.changeStatusButton = page.locator('[data-item-key="slip_status_footer_toolbar"]').first();
        this.sendButton = page.locator('[data-item-key="send_footer_toolbar"]').first();
        this.printButton = page.locator('[data-item-key="print_footer_toolbar"]').first();
        this.barcodeButton = page.locator('[data-item-key="barcode_footer_toolbar"]').first();
        this.eApprovalButton = page.locator('[data-item-key="e_approval_footer_toolbar"]').first();
        this.deleteSelectedButton = page.locator('[data-item-key="selected_delete_footer_toolbar"]').first();
        this.excelButton = page.locator('[data-item-key="excel_footer_toolbar"]').first();
        this.viewHistoryButton = page.locator('[data-item-key="history_group_footer_toolbar"]').first();
    }

    async goto() {
        await this.page.goto(process.env.SALES_LIST_URL ?? '/');
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

    async clickTab(tabName: 'All' | 'e-Approval' | 'Unconfirmed' | 'Confirm' | 'XacNhan' | 'INVPending' | 'ConfirmNoInvoice') {
        const tabMap: Record<string, Locator> = {
            'All': this.tabAll,
            'e-Approval': this.tabEApproval,
            'Unconfirmed': this.tabUnconfirmed,
            'Confirm': this.tabConfirm,
            'XacNhan': this.tabXacNhan,
            'INVPending': this.tabINVPending,
            'ConfirmNoInvoice': this.tabConfirmNoInvoice,
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
