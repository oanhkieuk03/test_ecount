# Manual Test Cases — Purchase List

**Feature:** Purchase List — view, search, filter, create, update, delete purchase records (invoices/vouchers)

---

## Table Display & Layout

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_001** | UI/UX | P0 | Page renders all required columns | 1. Navigate to the Purchase List page | N/A | Table displays all columns: Date-No., Số mua hàng/Purchase No., Số hóa đơn (INV NO), Voucher Status, Progress Status, Customer/Vendor Name, Item Name (Summary), Total Pretax Amount, Total Qty, Transaction Type Name. No column is missing. | Untested |
| **PL_002** | UI/UX | P1 | All toolbar buttons are visible | 1. Navigate to the Purchase List page | N/A | Bottom toolbar shows: New(F2), Email, Change Status, Send, Print, Barcode (Item), e-Approval, Delete Selected, Excel, View History. | Untested |
| **PL_003** | UI/UX | P1 | Filter tab bar renders all status tabs | 1. Navigate to the Purchase List page | N/A | Tab bar displays: All, e-Approval, Unconfirmed, Confirm. Active tab is highlighted. | Untested |
| **PL_004** | UI/UX | P2 | Date range is displayed in the top-right header | 1. Navigate to the Purchase List page | N/A | Top-right area shows the active date range (e.g., `06/03/2026 ~ 05/05/2026`). | Untested |
| **PL_005** | UI/UX | P2 | Row numbers are sequential | 1. Navigate to the Purchase List page | N/A | Each row has a sequential number starting from 1. Numbers continue correctly across pages. | Untested |
| **PL_006** | UI/UX | P2 | Checkbox column present for row selection | 1. Navigate to the Purchase List page | N/A | A checkbox appears at the left of each data row and in the header for select-all. | Untested |
| **PL_007** | UI/UX | P2 | Progress Status is displayed as a colored link | 1. Navigate to the Purchase List page | N/A | Progress Status column shows "Xác nhận" as a blue/orange colored link. Clicking it opens a status detail or history. | Untested |
| **PL_008** | UI/UX | P2 | Voucher Status displays correctly for each row | 1. Navigate to the Purchase List page | N/A | Voucher Status shows the correct text (e.g., "Confirm") for each row. Rows with different statuses show their respective labels. | Untested |
| **PL_009** | UI/UX | P2 | Transaction Type Name column displays tax type | 1. Navigate to the Purchase List page | N/A | Transaction Type Name column shows the tax type (e.g., "Thuế suất 8%") for each row. | Untested |
| **PL_010** | UI/UX | P2 | Total Pretax Amount is formatted with thousand separators | 1. Navigate to the Purchase List page | N/A | Amounts (e.g., `2,424,081`, `23,712,963`) are right-aligned and formatted with comma separators. No truncation for large values. | Untested |
| **PL_011** | UI/UX | P3 | Item Name (Summary) with multiple items shows condensed text | 1. Find a row with multiple items | Row: "và thêm 1 mục nữa" or "and X more" | The cell shows the first item(s) and "and X more". Full list is accessible in the detail view. | Untested |
| **PL_012** | UI/UX | P3 | Horizontal scroll reveals columns beyond the visible viewport | 1. Scroll the table horizontally | N/A | Additional columns are accessible via horizontal scroll. No data is lost. | Untested |

---

## Search & Filter

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_013** | Functional | P0 | Search by keyword returns matching records | 1. Enter a keyword in the search input<br>2. Press Enter or click Search(F3) | Keyword: `[valid_vendor_name]` | Table updates to show only rows matching the keyword. Record count updates accordingly. | Untested |
| **PL_014** | Functional | P0 | Search with no matching results shows empty state | 1. Enter a keyword that matches no records<br>2. Press Search(F3) | Keyword: `[nonexistent_value]` | Table shows zero rows and an appropriate "no results" message. | Untested |
| **PL_015** | Functional | P1 | "All" tab shows all purchase records | 1. Click the "All" tab | N/A | All purchase records are displayed regardless of status. | Untested |
| **PL_016** | Functional | P1 | "Unconfirmed" tab shows only unconfirmed records | 1. Click the "Unconfirmed" tab | N/A | Only records with Unconfirmed status are shown. Confirmed records are hidden. | Untested |
| **PL_017** | Functional | P1 | "Confirm" tab shows only confirmed records | 1. Click the "Confirm" tab | N/A | Only confirmed records are shown. | Untested |
| **PL_018** | Functional | P1 | "e-Approval" tab shows records in approval workflow | 1. Click the "e-Approval" tab | N/A | Only records currently in the e-Approval workflow are shown. | Untested |
| **PL_019** | Functional | P2 | Search combined with status filter narrows results | 1. Click the "Confirm" tab<br>2. Enter a keyword in the search input<br>3. Press Search(F3) | Keyword: `[valid_vendor_name]` | Table shows only Confirmed records that also match the keyword. | Untested |
| **PL_020** | Functional | P2 | Fn button opens advanced search panel | 1. Click the "Fn" button next to the search input | N/A | An expanded filter panel opens with additional criteria (e.g., date range, Vendor Code, Purchase No., INV NO, Transaction Type). | Untested |
| **PL_021** | Functional | P2 | Option button opens display or column settings | 1. Click the "Option" button | N/A | A settings panel appears for configuring visible columns or display preferences. | Untested |
| **PL_022** | Functional | P2 | Search by Purchase No. returns the matching record | 1. Enter a known Purchase No. in the search input<br>2. Press Search(F3) | Keyword: `2026-00164` | The specific record with that Purchase No. is returned. | Untested |
| **PL_023** | Functional | P2 | Search by INV NO returns the matching record | 1. Enter a known INV NO in the search input<br>2. Press Search(F3) | Keyword: `00002159` | The specific record with that invoice number is returned. | Untested |
| **PL_024** | Security | P2 | Search with special characters does not crash or execute scripts | 1. Enter special characters in the search input<br>2. Press Search(F3) | Keyword: `<script>alert(1)</script>` | Page remains stable. No script executes. Table shows no results or an appropriate message. | Untested |

---

## Pagination

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_025** | Functional | P1 | Pagination shows correct total page count | 1. Navigate to the Purchase List page | N/A | Pagination control shows the correct total page count matching the dataset. | Untested |
| **PL_026** | Functional | P1 | Clicking a page number loads that page | 1. Click a page number in the pagination bar | N/A | Table updates to show that page's records. Row numbers continue from the previous page. | Untested |
| **PL_027** | Functional | P1 | Fast-forward arrow navigates to the last page | 1. Click the `»` arrow | N/A | Table jumps to the last page of results. | Untested |
| **PL_028** | Functional | P2 | Entering a page number navigates correctly | 1. Type a page number in the page input<br>2. Press Enter | Page: `2` (where total ≥ 2) | Table loads the specified page. | Untested |
| **PL_029** | Edge Case | P2 | Entering an out-of-range page number does not crash | 1. Type `9999` in the page input<br>2. Press Enter | Page: `9999` | System shows an error or stays on the current page. No crash. | Untested |

---

## Create (New Purchase Record)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_030** | Functional | P0 | Create new purchase record via New(F2) button | 1. Click "New(F2)" | N/A | New purchase record form opens with empty fields ready for input. | Untested |
| **PL_031** | Functional | P0 | Create new purchase record via F2 keyboard shortcut | 1. Press the F2 key | N/A | New purchase record form opens — same behavior as clicking "New(F2)". | Untested |
| **PL_032** | Functional | P0 | Save a new record with all required fields filled | 1. Click "New(F2)"<br>2. Fill in all required fields<br>3. Save | Vendor: `[valid_vendor_code]`<br>Item: `[valid_item]`<br>Qty: `1`<br>Price: `[valid_price]`<br>Transaction Type: `[valid_type]` | New record is saved and appears in the Purchase List. Date-No. and Purchase No. are auto-assigned. | Untested |
| **PL_033** | Validation | P1 | Save with required fields empty shows validation error | 1. Click "New(F2)"<br>2. Leave required fields empty<br>3. Attempt to save | N/A | System highlights required fields and prevents saving. Error message is displayed. | Untested |
| **PL_034** | Validation | P1 | Save with invalid Vendor Code shows error | 1. Click "New(F2)"<br>2. Enter a non-existent Vendor Code<br>3. Attempt to save | Vendor Code: `[invalid_code]` | System shows an error: vendor code does not exist. Record is not saved. | Untested |
| **PL_035** | Validation | P1 | Save with invalid INV NO format shows error | 1. Click "New(F2)"<br>2. Enter an INV NO in an incorrect format<br>3. Attempt to save | INV NO: `!!!invalid!!!` | System shows an appropriate format validation error. Record is not saved. | Untested |
| **PL_036** | Functional | P2 | New record defaults to "Unconfirmed" status | 1. Create and save a new purchase record | Valid data | New record appears in the list under the "Unconfirmed" tab with Voucher Status = Unconfirmed. | Untested |
| **PL_037** | Functional | P2 | Auto-generated Date-No. is unique per date | 1. Create two records on the same date | N/A | Each saved record receives a unique Date-No. (e.g., `02/04/2026 -1`, `02/04/2026 -2`). No duplicates. | Untested |
| **PL_038** | Functional | P2 | Auto-generated Purchase No. increments sequentially | 1. Create two new records in sequence | N/A | Purchase No. increments (e.g., `2026-00164`, `2026-00165`). No gaps or duplicates. | Untested |
| **PL_039** | Functional | P2 | New record with multiple items saves all item lines | 1. Click "New(F2)"<br>2. Add 3 items with quantities and prices<br>3. Save | 3 valid items | All 3 items are saved. Item Name (Summary) shows "and X more". Total Pretax Amount = sum of all lines. | Untested |
| **PL_040** | Functional | P2 | Total Pretax Amount is calculated correctly on save | 1. Create a record with multiple items<br>2. Save | Item A: qty 2 × 100,000<br>Item B: qty 1 × 500,000 | Total Pretax Amount = 700,000. Value in the list row matches the sum. | Untested |
| **PL_041** | Functional | P2 | Transaction Type Name is saved and displayed correctly | 1. Create a new record and select a Transaction Type (e.g., "Thuế suất 8%")<br>2. Save | Transaction Type: `Thuế suất 8%` | The selected Transaction Type appears in the Transaction Type Name column for the new row. | Untested |

---

## Read (View Purchase Record Detail)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_042** | Functional | P0 | Click Date-No. link opens purchase record detail | 1. Click any blue Date-No. link (e.g., `02/04/2026 -2`) | N/A | Detail view opens showing all fields: vendor info, item lines, quantities, prices, INV NO, Voucher Status, Progress Status, Transaction Type. | Untested |
| **PL_043** | Functional | P1 | Detail view data matches the list row values | 1. Note values in a row (Vendor Name, Item, Amount, Qty, INV NO)<br>2. Click the Date-No. link | N/A | All values in the detail view match those shown in the list row. No data mismatch. | Untested |
| **PL_044** | Functional | P2 | Item Name (Summary) "and X more" shows all items in detail | 1. Find a row showing "và thêm X mục nữa" or "and X more"<br>2. Open the detail | Row with multiple items | Detail view displays all item lines, not just the summary. | Untested |
| **PL_045** | Functional | P2 | INV NO in the list matches the document in the detail | 1. Note the INV NO for a row<br>2. Open the detail | N/A | The INV NO displayed in the detail matches the Số hóa đơn (INV NO) shown in the list. | Untested |
| **PL_046** | Functional | P2 | Progress Status link in the list opens a status detail or history | 1. Click a "Xác nhận" link in the Progress Status column | N/A | A status detail popup or audit history panel opens for that record. | Untested |

---

## Update (Edit & Change Status)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_047** | Functional | P0 | Edit an existing purchase record and save changes | 1. Open a purchase record via the Date-No. link<br>2. Modify a field (e.g., quantity, INV NO)<br>3. Save | Modified value: `[updated_value]` | Changes are saved. Updated values are reflected immediately in the Purchase List row. | Untested |
| **PL_048** | Functional | P0 | Change Status of selected record to "Confirmed" | 1. Select one or more rows via checkboxes<br>2. Click "Change Status"<br>3. Select "Confirmed" | N/A | Selected records' Voucher Status changes to Confirmed. They appear under the "Confirm" tab. | Untested |
| **PL_049** | Validation | P1 | Change Status without selecting any row shows warning | 1. Ensure no rows are checked<br>2. Click "Change Status" | N/A | System warns: "Please select at least one record." No status change dialog opens. | Untested |
| **PL_050** | Functional | P1 | Change Status for multiple records simultaneously | 1. Select 3 rows via checkboxes<br>2. Click "Change Status" → "Confirmed" | N/A | All 3 records change to Confirmed status simultaneously. List updates accordingly. | Untested |
| **PL_051** | Functional | P2 | Edit a Confirmed record prompts a re-confirmation warning | 1. Open a Confirmed record via the Date-No. link<br>2. Modify a field and attempt to save | N/A | System warns the user that editing a confirmed record may affect accounting entries. User must confirm to proceed. | Untested |
| **PL_052** | Functional | P2 | e-Approval submits selected records for approval | 1. Select one or more records<br>2. Click "e-Approval" | N/A | Selected records enter the e-Approval workflow. Their status updates and they appear under the "e-Approval" tab. | Untested |
| **PL_053** | Functional | P2 | Update INV NO on an existing Unconfirmed record | 1. Open an Unconfirmed record<br>2. Update the Số hóa đơn (INV NO) field<br>3. Save | New INV NO: `[updated_inv_no]` | New INV NO is saved and displayed in the Số hóa đơn (INV NO) column in the list. | Untested |
| **PL_054** | Functional | P2 | Update Transaction Type on an existing record | 1. Open a record<br>2. Change the Transaction Type<br>3. Save | New type: `[valid_transaction_type]` | Updated Transaction Type appears in the Transaction Type Name column in the list. | Untested |

---

## Delete

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_055** | Functional | P0 | Delete a single selected purchase record | 1. Select one row via checkbox<br>2. Click "Delete Selected"<br>3. Confirm deletion | N/A | Record is deleted and no longer appears in the Purchase List. | Untested |
| **PL_056** | Functional | P0 | Delete multiple selected records at once | 1. Select multiple rows via checkboxes<br>2. Click "Delete Selected"<br>3. Confirm deletion | N/A | All selected records are deleted simultaneously. List updates to remove those rows. | Untested |
| **PL_057** | Validation | P1 | Delete without selecting any row shows warning | 1. Ensure no rows are checked<br>2. Click "Delete Selected" | N/A | System warns: "Please select at least one record." No deletion occurs. | Untested |
| **PL_058** | Functional | P1 | Delete confirmation dialog can be cancelled | 1. Select a row<br>2. Click "Delete Selected"<br>3. Click "Cancel" in the confirmation dialog | N/A | No records are deleted. The record remains in the list unchanged. | Untested |
| **PL_059** | Security | P1 | Confirmed record cannot be deleted without reverting status | 1. Select a Confirmed record<br>2. Click "Delete Selected" | N/A | System prevents deletion and shows an error: confirmed records must be unconfirmed before deletion. | Untested |
| **PL_060** | Functional | P2 | Deleted record does not appear under any filter tab | 1. Delete a record<br>2. Switch through all filter tabs | N/A | The deleted record is absent from all tabs including "All". | Untested |
| **PL_061** | Functional | P2 | Record linked to an accounting entry cannot be deleted | 1. Select a record that has been posted to accounting (Voucher Status = Confirmed with accounting entry)<br>2. Click "Delete Selected" | N/A | System prevents deletion and shows an appropriate error message. | Untested |

---

## Export & Output

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_062** | Functional | P1 | Export to Excel downloads a file | 1. Click the "Excel" button | N/A | A `.xlsx` file is downloaded containing all visible rows matching the current filter/search. | Untested |
| **PL_063** | Functional | P2 | Excel export respects active status filter | 1. Apply the "Confirm" tab filter<br>2. Click "Excel" | N/A | Downloaded file contains only Confirmed records, not all records. | Untested |
| **PL_064** | Functional | P2 | Excel export respects active search keyword | 1. Search for a specific vendor<br>2. Click "Excel" | Keyword: `[valid_vendor_name]` | Downloaded file contains only rows matching the keyword. | Untested |
| **PL_065** | Functional | P2 | Print dropdown opens print options | 1. Click the "Print" dropdown<br>2. Select a print option | N/A | Print preview or system print dialog opens with the current visible list data. | Untested |
| **PL_066** | Functional | P2 | Send dropdown shows available send options | 1. Click the "Send" dropdown arrow | N/A | A dropdown appears with available send methods (e.g., email, fax). | Untested |
| **PL_067** | Functional | P2 | Email button opens compose dialog for selected record | 1. Select one record<br>2. Click "Email" | N/A | An email compose dialog opens pre-filled with the selected record's information. | Untested |
| **PL_068** | Functional | P2 | View History shows audit trail for selected record | 1. Select one record<br>2. Click "View History" | N/A | A history/audit panel opens showing creation, modifications, and status changes with timestamps and actor names. | Untested |
| **PL_069** | Functional | P2 | Barcode (Item) generates barcodes for selected record | 1. Select one record<br>2. Click "Barcode (Item)" | N/A | Barcodes for the item(s) in the selected record are generated and displayed or downloaded. | Untested |

---

## Edge Cases & Security

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PL_070** | Edge Case | P2 | Select-all checkbox selects all rows on current page | 1. Click the header checkbox | N/A | All rows on the current page are checked. Bulk actions apply to all selected. | Untested |
| **PL_071** | Edge Case | P2 | Deselecting select-all unchecks all rows | 1. Click the header checkbox to select all<br>2. Click again to deselect | N/A | All row checkboxes are unchecked. | Untested |
| **PL_072** | Edge Case | P2 | Large dataset across many pages loads without performance issues | 1. Set date range to a period with a high volume of records | N/A | List loads within acceptable time (≤ 5 seconds). Pagination works correctly. No browser freeze. | Untested |
| **PL_073** | Edge Case | P2 | Very long Vendor Name is truncated gracefully | 1. View a row with an extremely long Customer/Vendor Name | N/A | Name is truncated with `...` in the cell. Full name is accessible in the detail view. Row layout is not broken. | Untested |
| **PL_074** | Edge Case | P2 | Total Pretax Amount with large values displays correctly | 1. View a row with a high Total Pretax Amount | Row: `23,712,963` | Amount is formatted with comma separators and fits within the column without overflow. | Untested |
| **PL_075** | Edge Case | P2 | Duplicate INV NO entry is handled correctly | 1. Create a new record and enter an INV NO that already exists<br>2. Attempt to save | INV NO: `[existing_inv_no]` | System warns about the duplicate INV NO (or allows with a warning depending on business rules). Does not silently overwrite. | Untested |
| **PL_076** | Security | P1 | User without create permission cannot open New(F2) form | 1. Log in as a read-only user<br>2. Click "New(F2)" | N/A | Button is disabled or an authorization error is shown. The form does not open. | Untested |
| **PL_077** | Security | P1 | User without delete permission cannot delete records | 1. Log in as a read-only user<br>2. Select a row and click "Delete Selected" | N/A | "Delete Selected" is disabled or an authorization error is shown. No record is deleted. | Untested |
| **PL_078** | Security | P2 | User without edit permission cannot save changes | 1. Log in as a read-only user<br>2. Open a record detail<br>3. Attempt to modify and save | N/A | Save action is blocked. An authorization error is shown. No changes are persisted. | Untested |
| **PL_079** | Edge Case | P3 | Item Name (Summary) with many items does not break cell layout | 1. View a row where the purchase record contains 5+ items | N/A | Cell shows first item and "and X more" without overflowing or breaking the row height. Full list in detail. | Untested |
| **PL_080** | Edge Case | P3 | Concurrent edit by two users triggers a conflict warning | 1. Open the same record in two browser sessions<br>2. User A edits and saves<br>3. User B attempts to save different changes | N/A | User B receives a conflict/overwrite warning. No data is silently lost. | Untested |
