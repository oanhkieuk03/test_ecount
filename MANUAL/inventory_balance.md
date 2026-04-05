# Manual Test Cases — Inventory Balance

**Feature:** Inventory Balance (Số dư Tồn Kho) — view and analyze current inventory stock levels, quantities, and values

> **Note:** This is a read-only report page. There are no Create/Update/Delete actions. Test coverage focuses on display, search, sort, filter, and export.

---

## Table Display & Layout

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **IB_001** | UI/UX | P0 | Page renders the report title and company info | 1. Navigate to the Inventory Balance page | N/A | Page title "Số dư Tồn Kho" is displayed prominently. Company Name (e.g., `CÔNG TY TNHH I-AICON VIỆT NAM / Aicon VN office`) and the report date are shown in the header. | Untested |
| **IB_002** | UI/UX | P0 | Table renders all required columns | 1. Navigate to the Inventory Balance page | N/A | Table displays all columns: Item Code, Item Name [Spec], Brand, Bundle Item Status, Inventory Qty, 入库单价（品目信息）, Amount (Inv. Qty × Purchase Price), Purchase Price (Tax Status). No column is missing. | Untested |
| **IB_003** | UI/UX | P1 | Report date is displayed correctly in the header | 1. Navigate to the Inventory Balance page | N/A | The report date shown (e.g., `05/04/2026`) matches the current or selected reporting date. | Untested |
| **IB_004** | UI/UX | P1 | All toolbar buttons are visible | 1. Navigate to the Inventory Balance page | N/A | Bottom toolbar shows: Print, Excel, Automated Notification. | Untested |
| **IB_005** | UI/UX | P2 | Column headers have sort indicators | 1. Navigate to the Inventory Balance page | N/A | Columns Item Code, Item Name [Spec], Bundle Item Status, Inventory Qty, 入库单价（品目信息）, Amount (Inv. Qty × Purchase Price), Purchase Price (Tax Status) each display a ▼ sort indicator. | Untested |
| **IB_006** | UI/UX | P2 | Item Code is displayed as a clickable blue link | 1. Navigate to the Inventory Balance page | N/A | Item Code values (e.g., `101A00056`) appear as blue links. Clicking opens the item detail or inventory ledger for that item. | Untested |
| **IB_007** | UI/UX | P2 | Numeric columns are right-aligned and formatted | 1. Navigate to the Inventory Balance page | N/A | Inventory Qty, 入库单价, and Amount columns are right-aligned. Values with thousands are formatted with comma separators (e.g., `775,000`). | Untested |
| **IB_008** | UI/UX | P2 | "Purchase Price (Tax Status)" column shows Exclude or Include for each row | 1. Navigate to the Inventory Balance page | N/A | Each row in the Purchase Price (Tax Status) column shows either "Exclude" or "Include" matching the item's tax configuration. | Untested |
| **IB_009** | UI/UX | P2 | Rows with zero or null Brand display a placeholder | 1. View rows where Brand has no value | Row: Brand = `-` or empty | Rows with no brand show a dash `-` or empty cell without breaking the row layout. | Untested |
| **IB_010** | UI/UX | P3 | Long Item Name [Spec] does not break row layout | 1. View rows where Item Name [Spec] contains a long product name or specification | E.g., "Gạt từ CB435A/436A/CE285A/278A, hiệu i.Aicon" | Long names wrap within the cell or are truncated gracefully. Row height adjusts. No overflow into adjacent columns. | Untested |
| **IB_011** | UI/UX | P3 | Page is readable without horizontal scrolling on a standard wide screen | 1. Open the Inventory Balance page at 1920px width | N/A | All columns are visible without requiring horizontal scrolling at standard desktop width. | Untested |

---

## Search

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **IB_012** | Functional | P0 | Search by keyword filters the table | 1. Enter a keyword in the search input<br>2. Press Enter or click Search(F3) | Keyword: `[valid_item_name]` | Table updates to show only rows matching the keyword in Item Code, Item Name [Spec], or Brand. | Untested |
| **IB_013** | Functional | P0 | Search by Item Code returns the matching row | 1. Enter a known Item Code in the search input<br>2. Press Search(F3) | Keyword: `101A00056` | The specific row with that Item Code is displayed. | Untested |
| **IB_014** | Functional | P0 | Search by Item Name (partial) returns matching rows | 1. Enter a partial item name in the search input<br>2. Press Search(F3) | Keyword: `Hộp mực` | All rows containing "Hộp mực" in the Item Name [Spec] column are shown. | Untested |
| **IB_015** | Functional | P1 | Search with no matching results shows empty state | 1. Enter a keyword that matches no item<br>2. Press Search(F3) | Keyword: `[nonexistent_value]` | Table shows zero rows and an appropriate "no results" message. | Untested |
| **IB_016** | Functional | P2 | Clearing the search field restores all rows | 1. Enter a keyword and search<br>2. Clear the search field<br>3. Press Search(F3) or Enter | N/A | Table restores the full inventory list. | Untested |
| **IB_017** | Functional | P2 | Search by Brand name returns matching rows | 1. Enter a brand name in the search input<br>2. Press Search(F3) | Keyword: `[valid_brand_name]` | Only rows where the Brand column matches the keyword are shown. | Untested |
| **IB_018** | Security | P2 | Search with special characters does not crash or execute scripts | 1. Enter special characters in the search input<br>2. Press Search(F3) | Keyword: `<script>alert(1)</script>` | Page remains stable. No script executes. Table shows no results or an appropriate message. | Untested |
| **IB_019** | Functional | P2 | Option button opens display or filter settings | 1. Click the "Option" button | N/A | A settings panel appears allowing configuration of visible columns, filter criteria, or display preferences. | Untested |

---

## Sorting

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **IB_020** | Functional | P1 | Sort by Item Code ascending | 1. Click the Item Code column header ▼ | N/A | Rows are sorted by Item Code in ascending alphanumeric order. Sort indicator updates. | Untested |
| **IB_021** | Functional | P1 | Sort by Item Code descending | 1. Click the Item Code column header ▼ twice | N/A | Rows are sorted by Item Code in descending order. | Untested |
| **IB_022** | Functional | P1 | Sort by Inventory Qty ascending | 1. Click the Inventory Qty column header ▼ | N/A | Rows are sorted by Inventory Qty from lowest to highest. Numeric sort (not lexicographic). | Untested |
| **IB_023** | Functional | P1 | Sort by Inventory Qty descending | 1. Click the Inventory Qty column header ▼ twice | N/A | Rows are sorted by Inventory Qty from highest to lowest. | Untested |
| **IB_024** | Functional | P1 | Sort by Amount (Inv. Qty × Purchase Price) descending | 1. Click the Amount column header ▼ twice | N/A | Rows are sorted by Amount from highest to lowest. Numeric sort. | Untested |
| **IB_025** | Functional | P2 | Sort by Item Name [Spec] ascending | 1. Click the Item Name [Spec] column header ▼ | N/A | Rows are sorted alphabetically by Item Name in ascending order. | Untested |
| **IB_026** | Functional | P2 | Sort by Bundle Item Status | 1. Click the Bundle Item Status column header ▼ | N/A | Rows are grouped/sorted by Bundle Item Status value (e.g., "Not in Use" grouped together). | Untested |
| **IB_027** | Functional | P2 | Sort by Purchase Price (Tax Status) groups Exclude and Include | 1. Click the Purchase Price (Tax Status) column header ▼ | N/A | Rows are sorted or grouped so that "Exclude" and "Include" rows are separated. | Untested |
| **IB_028** | Functional | P2 | Sorting resets when a new search is performed | 1. Sort by Inventory Qty<br>2. Enter a new keyword and search | N/A | Search results are displayed in default order or maintain the current sort. No crash occurs. | Untested |

---

## Data Accuracy

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **IB_029** | Functional | P0 | Amount column equals Inventory Qty × 入库单价 | 1. For any row, verify: Amount = Inventory Qty × 入库单价 | Row: Qty=250, Price=3,100 → Amount=775,000 | Calculated amount matches the displayed Amount value for all rows. | Untested |
| **IB_030** | Functional | P1 | Inventory Qty reflects current stock level | 1. Perform an inventory-affecting transaction (e.g., goods receipt or shipment)<br>2. Navigate to Inventory Balance and search for the item | Item involved in the transaction | The Inventory Qty for that item reflects the updated stock level after the transaction. | Untested |
| **IB_031** | Functional | P1 | Report date shown in header matches the data snapshot date | 1. Navigate to the Inventory Balance page<br>2. Note the date in the top-right header | N/A | The report date (e.g., `05/04/2026`) corresponds to the date of the inventory snapshot. All data reflects stock as of that date. | Untested |
| **IB_032** | Functional | P2 | Item with zero Inventory Qty is included or excluded consistently | 1. Find an item with zero current stock<br>2. Check if it appears in the balance | N/A | Items with zero Inventory Qty either appear consistently (if the system includes zero-stock items) or are excluded consistently — behavior matches the system design. | Untested |
| **IB_033** | Functional | P2 | 入库单价 (purchase unit price) matches the item master data | 1. Note the 入库单价 for a specific item in the Inventory Balance<br>2. Navigate to the item master and check the purchase price | Item Code: `[valid_item_code]` | The 入库单价 shown in the Inventory Balance matches the item's configured purchase price in the item master. | Untested |
| **IB_034** | Functional | P3 | Items with decimal purchase prices display correctly | 1. View a row where 入库单价 has a decimal value | Row: `21,000.5` | Decimal value is displayed accurately without rounding or truncation. Amount calculation uses the full decimal precision. | Untested |

---

## Item Detail Navigation

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **IB_035** | Functional | P1 | Click Item Code link opens item detail or inventory ledger | 1. Click any blue Item Code link (e.g., `101A00056`) | N/A | Item detail view or inventory ledger for that item opens, showing transaction history and stock movements. | Untested |
| **IB_036** | Functional | P2 | Item detail data matches the balance row values | 1. Note the Inventory Qty and Amount for a row<br>2. Click the Item Code link to open the detail | N/A | The detail view shows stock data consistent with the balance row (same item, same quantity, same price). | Untested |
| **IB_037** | Functional | P2 | Navigating back from item detail returns to Inventory Balance | 1. Click an Item Code link<br>2. Use the browser Back button or a Back link | N/A | User returns to the Inventory Balance page. The previous search or sort state is preserved or restored. | Untested |

---

## Export & Output

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **IB_038** | Functional | P1 | Export to Excel downloads a file | 1. Click the "Excel" button | N/A | A `.xlsx` file is downloaded containing all visible rows in the current report view. | Untested |
| **IB_039** | Functional | P2 | Excel export includes all columns | 1. Click "Excel" | N/A | Downloaded file contains columns: Item Code, Item Name [Spec], Brand, Bundle Item Status, Inventory Qty, 入库单价, Amount, Purchase Price (Tax Status). No column is missing. | Untested |
| **IB_040** | Functional | P2 | Excel export respects active search filter | 1. Search for a keyword<br>2. Click "Excel" | Keyword: `[valid_item_name]` | Downloaded file contains only the rows matching the current search filter, not the full inventory. | Untested |
| **IB_041** | Functional | P2 | Excel export respects active sort order | 1. Sort by Inventory Qty descending<br>2. Click "Excel" | N/A | Downloaded file rows are in the same sorted order as displayed on screen. | Untested |
| **IB_042** | Functional | P2 | Print button prints or previews the report | 1. Click the "Print" dropdown<br>2. Select a print option | N/A | Print preview or system print dialog opens with the current visible report data including the title, company name, date, and all rows. | Untested |
| **IB_043** | Functional | P2 | Automated Notification button opens notification settings | 1. Click the "Automated Notification" button | N/A | A dialog or settings panel opens for configuring automated inventory balance notifications (e.g., alert when stock falls below a threshold). | Untested |
| **IB_044** | Functional | P3 | Printed report includes company name and report date in the header | 1. Click "Print" and inspect the print preview | N/A | Printed report header includes the company name and the report date. No sensitive system URLs or credentials appear. | Untested |

---

## Edge Cases

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **IB_045** | Edge Case | P2 | Report with large number of items loads without freezing | 1. Navigate to the Inventory Balance page with all items loaded | N/A | Report loads within acceptable time (≤ 5 seconds). Page remains responsive. No browser freeze or timeout. | Untested |
| **IB_046** | Edge Case | P2 | Items with very high Inventory Qty display correctly | 1. View a row with a very large Inventory Qty | Qty: e.g., `99,999` | Value is formatted with comma separators and fits within the column without overflow. | Untested |
| **IB_047** | Edge Case | P2 | Items with very high Amount value display correctly | 1. View a row with a high Amount | Amount: e.g., `99,999,999` | Value is formatted correctly and fits in the Amount column. Column width adjusts or scrolls as needed. | Untested |
| **IB_048** | Edge Case | P3 | Report is consistent when opened in two browser tabs simultaneously | 1. Open the Inventory Balance page in two browser tabs at the same time | N/A | Both tabs show the same data. No cross-tab interference or data corruption. | Untested |
| **IB_049** | Edge Case | P3 | Report reflects real-time data after inventory update | 1. Record a purchase or sales transaction for an item<br>2. Navigate to the Inventory Balance page and search for that item | N/A | The updated Inventory Qty and Amount are reflected in the report after the transaction is saved. | Untested |
| **IB_050** | Edge Case | P3 | Search with whitespace-only input is treated as empty | 1. Enter only spaces in the search input<br>2. Press Search(F3) | Keyword: `"   "` | System treats the input as empty and returns all rows (or shows a validation message). Does not crash. | Untested |
