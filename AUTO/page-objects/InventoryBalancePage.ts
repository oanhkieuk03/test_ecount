import { Page, Locator } from '@playwright/test';

export class InventoryBalancePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly optionButton: Locator;
    readonly printButton: Locator;
    readonly excelButton: Locator;
    readonly automatedNotificationButton: Locator;
    readonly reportTitle: Locator;
    readonly companyName: Locator;
    readonly reportDate: Locator;
    readonly tableRows: Locator;
    readonly tableHeaders: Locator;
    readonly itemCodeLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('input[placeholder*="Input"], input[placeholder*="Enter"], #search_input, .search_input').first();
        this.searchButton = page.locator('button').filter({ hasText: /Search|F3/i }).first();
        this.optionButton = page.locator('button').filter({ hasText: /Option/i }).first();
        this.printButton = page.locator('button, a').filter({ hasText: /^Print/i }).first();
        this.excelButton = page.locator('button, a').filter({ hasText: /Excel/i }).first();
        this.automatedNotificationButton = page.locator('button, a').filter({ hasText: /Automated Notification/i }).first();
        this.reportTitle = page.locator('h1, h2, .page-title, .report-title').filter({ hasText: /Tồn Kho|Inventory Balance/i }).first();
        this.companyName = page.locator('text=/Company Name/i').first();
        this.reportDate = page.locator('.report-date, .date-range, [class*="date"]').first();
        this.tableRows = page.locator('table tbody tr, .grid-body tr, [class*="list"] tr').filter({ hasNot: page.locator('th') });
        this.tableHeaders = page.locator('table thead th, .grid-header th, [class*="col-header"]');
        this.itemCodeLinks = page.locator('table tbody tr td a, .grid-body td a').first();
    }

    async goto() {
        await this.page.goto(process.env.INVENTORY_BALANCE_URL ?? '/');
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

    async getRowCount(): Promise<number> {
        return this.tableRows.count();
    }

    async getColumnHeader(columnName: string): Promise<Locator> {
        return this.page.locator('th, [class*="col-header"]').filter({ hasText: columnName }).first();
    }

    async sortByColumn(columnName: string) {
        const header = await this.getColumnHeader(columnName);
        await header.click();
        await this.page.waitForLoadState('networkidle');
    }

    async getItemCodeLinks(): Promise<Locator> {
        return this.page.locator('table tbody td:first-child a, .grid-body td:first-child a');
    }

    async getCellText(row: number, columnIndex: number): Promise<string> {
        const cell = this.page.locator(`table tbody tr:nth-child(${row}) td:nth-child(${columnIndex})`);
        return (await cell.textContent()) ?? '';
    }
}
