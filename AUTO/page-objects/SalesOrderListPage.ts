import { Page, Locator } from '@playwright/test';

export class SalesOrderListPage {
    readonly page: Page;

    // Search & Filters
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly fnButton: Locator;
    readonly optionButton: Locator;

    // Status tabs — IDs from captured HTML
    // Standard: Z=e-Approval, N=Unconfirmed, Y=Confirm
    // Extended (special-char IDs): Y∬1=Processing, Y∬3=Goods ready, Y∬4=Invoice issue, Y∬9=Finished
    readonly tabAll: Locator;
    readonly tabEApproval: Locator;
    readonly tabUnconfirmed: Locator;
    readonly tabConfirm: Locator;
    readonly tabProcessing: Locator;
    readonly tabGoodsReady: Locator;
    readonly tabInvoiceIssue: Locator;
    readonly tabFinished: Locator;

    // Table
    readonly tableRows: Locator;
    readonly tableHeaders: Locator;
    readonly headerCheckbox: Locator;
    readonly dateLinks: Locator;
    readonly salesOrderNoLinks: Locator;
    readonly progressStatusCells: Locator;

    // Toolbar buttons — data-item-key values extracted from captured HTML
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
        this.searchInput = page.locator('#quick_search');
        this.searchButton = page.locator('[data-item-key="search_header_data_model"]').first();
        this.fnButton = page.locator('[data-item-key="fn_button"]').first();
        this.optionButton = page.locator('[data-item-key="option_header_data_model"]').first();

        // Status tabs — simple IDs via li#ID; special-char IDs via text filter
        this.tabAll = page.locator('ul[data-id="list_tab"] li').filter({ hasText: /^All$/i }).first();
        this.tabEApproval = page.locator('ul[data-id="list_tab"] li#Z').first();
        this.tabUnconfirmed = page.locator('ul[data-id="list_tab"] li#N').first();
        this.tabConfirm = page.locator('ul[data-id="list_tab"] li#Y').first();
        this.tabProcessing = page.locator('ul[data-id="list_tab"] li').filter({ hasText: /Đang xử lý|processing/i }).first();
        this.tabGoodsReady = page.locator('ul[data-id="list_tab"] li').filter({ hasText: /Giao hàng|Goods ready/i }).first();
        this.tabInvoiceIssue = page.locator('ul[data-id="list_tab"] li').filter({ hasText: /Kế toán|Invoice issue/i }).first();
        this.tabFinished = page.locator('ul[data-id="list_tab"] li').filter({ hasText: /Đã hoàn tất|finished/i }).first();

        // Table — data-columnid uses partial match (*=) to avoid session-specific prefixes
        this.tableRows = page.locator('#grid-main tbody tr');
        this.tableHeaders = page.locator('#grid-main thead th');
        this.headerCheckbox = page.locator('#grid-main thead input[type="checkbox"]').first();
        this.dateLinks = page.locator('#grid-main tbody td[data-columnid*="data_dt"] a');
        this.salesOrderNoLinks = page.locator('#grid-main tbody td[data-columnid*="no_001"] a');
        this.progressStatusCells = page.locator('#grid-main tbody td[data-columnid*="progress_status"]');

        // Toolbar buttons — this page uses short data-item-key values (no _footer_toolbar suffix)
        this.newButton = page.locator('[data-item-key="new"]')
            .or(page.locator('button').filter({ hasText: /New\(F2\)/i })).first();
        this.emailButton = page.locator('[data-item-key="email"]')
            .or(page.locator('button').filter({ hasText: /^Email$/i })).first();
        this.changeStatusButton = page.locator('[data-item-key="progress_status"]')
            .or(page.locator('button').filter({ hasText: /Change Status/i })).first();
        this.sendButton = page.locator('[data-item-key="send"]')
            .or(page.locator('button').filter({ hasText: /^Send$/i })).first();
        this.printButton = page.locator('[data-item-key="print"]')
            .or(page.locator('button').filter({ hasText: /^Print$/i })).first();
        this.barcodeButton = page.locator('[data-item-key="barcode"]')
            .or(page.locator('button').filter({ hasText: /Barcode/i })).first();
        this.generateOtherSlipsButton = page.locator('[data-item-key="other_slip"], [data-item-key="slip"]')
            .or(page.locator('button').filter({ hasText: /Generate Other Slips/i })).first();
        this.eApprovalButton = page.locator('[data-item-key="slip_status"]')
            .or(page.locator('button').filter({ hasText: /e-Approval/i })).first();
        this.deleteSelectedButton = page.locator('[data-item-key="selected_delete"]')
            .or(page.locator('button').filter({ hasText: /Delete Selected/i })).first();
        this.excelButton = page.locator('[data-item-key="excel"]')
            .or(page.locator('button').filter({ hasText: /^Excel$/i })).first();
        this.viewHistoryButton = page.locator('[data-item-key="history"]')
            .or(page.locator('button').filter({ hasText: /View History/i })).first();
    }

    async goto() {
        await this.page.goto(process.env.SALES_ORDER_LIST_URL ?? '/');
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

    async clickTab(tabName: 'All' | 'e-Approval' | 'Unconfirmed' | 'Confirm' | 'Processing' | 'GoodsReady' | 'InvoiceIssue' | 'Finished') {
        const tabMap: Record<string, Locator> = {
            'All': this.tabAll,
            'e-Approval': this.tabEApproval,
            'Unconfirmed': this.tabUnconfirmed,
            'Confirm': this.tabConfirm,
            'Processing': this.tabProcessing,
            'GoodsReady': this.tabGoodsReady,
            'InvoiceIssue': this.tabInvoiceIssue,
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
        const checkbox = this.tableRows.nth(rowIndex).locator('input[name="chkItem"]');
        await checkbox.check();
    }

    async getCellText(row: number, colIndex: number): Promise<string> {
        const cell = this.page.locator(`#grid-main tbody tr:nth-child(${row}) td:nth-child(${colIndex})`);
        return (await cell.textContent()) ?? '';
    }
}
