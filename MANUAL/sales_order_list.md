# Manual Test Cases — Sales Order List

**Feature:** Sales Order List — view, search, filter, create, update, delete sales orders

---

## Table Display & Layout

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_001** | UI/UX | P0 | Page renders all required columns | 1. Navigate to the Sales Order List page | N/A | Table displays all columns: Date, Creation Date, Sales Order No., Progress Status, Technician, Customer/Vendor Code, Customer/Vendor Name, PIC Name, Item Name (Summary), Total Sales Order Qty, Delivery Date, and at least one more column (scrollable). No column header is missing. | Untested |
| **SOL_002** | UI/UX | P1 | All toolbar buttons are visible | 1. Navigate to the Sales Order List page | N/A | Bottom toolbar shows: New(F2), Email, Change Status, Send, Print, Barcode (Item), Generate Other Slips, e-Approval, Delete Selected, Excel, View History. | Untested |
| **SOL_003** | UI/UX | P1 | Filter tab bar renders all status tabs | 1. Navigate to the Sales Order List page | N/A | Tab bar displays: All, e-Approval, Unconfirmed, Confirm, Đang xử lý (processing), Giao hàng đã hoàn tất (Goods ready), Kế toán đã xuất hoá đơn (Invoice issue), Đã hoàn tất (finished). Active tab is highlighted. | Untested |
| **SOL_004** | UI/UX | P2 | Date range shown in top-right header | 1. Navigate to the Sales Order List page | N/A | Top-right area shows the current date range (e.g., `01/03/2026 ~ 05/04/2026`). | Untested |
| **SOL_005** | UI/UX | P2 | Row numbers are sequential | 1. Navigate to the Sales Order List page | N/A | Each row is numbered sequentially starting from 1. Numbers continue correctly across pages. | Untested |
| **SOL_006** | UI/UX | P2 | Checkbox column is present for row selection | 1. Navigate to the Sales Order List page | N/A | A checkbox appears at the left of each data row and in the header row for select-all. | Untested |
| **SOL_007** | UI/UX | P2 | Progress Status is displayed as a colored link | 1. Navigate to the Sales Order List page | N/A | The Progress Status column shows the status as a colored link (e.g., blue for "Đang xử lý (processing)"). Clicking the link opens the detail or a status history popup. | Untested |
| **SOL_008** | UI/UX | P3 | Horizontal scroll reveals additional columns | 1. Navigate to the Sales Order List page<br>2. Scroll the table horizontally | N/A | Additional columns beyond the visible viewport are accessible via horizontal scroll. No data is lost. | Untested |

---

## Search & Filter

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_009** | Functional | P0 | Search by keyword returns matching records | 1. Enter a keyword in the search input field<br>2. Press Enter or click Search(F3) | Keyword: `[valid_customer_name]` | Table updates to show only rows matching the keyword. Record count updates accordingly. | Untested |
| **SOL_010** | Functional | P0 | Search with no matching results shows empty state | 1. Enter a keyword that matches no records<br>2. Press Enter or click Search(F3) | Keyword: `[nonexistent_value]` | Table shows zero rows and an appropriate message indicating no results found. | Untested |
| **SOL_011** | Functional | P1 | "All" tab shows all records regardless of status | 1. Click the "All" tab | N/A | All sales orders are displayed regardless of Progress Status. | Untested |
| **SOL_012** | Functional | P1 | "Unconfirmed" tab shows only unconfirmed orders | 1. Click the "Unconfirmed" tab | N/A | Only orders with Unconfirmed status are shown. Orders with other statuses are hidden. | Untested |
| **SOL_013** | Functional | P1 | "Confirm" tab shows only confirmed orders | 1. Click the "Confirm" tab | N/A | Only confirmed orders are shown. | Untested |
| **SOL_014** | Functional | P1 | "Đang xử lý (processing)" tab shows only in-progress orders | 1. Click the "Đang xử lý (processing)" tab | N/A | Only orders with "Processing" status are shown. | Untested |
| **SOL_015** | Functional | P1 | "Giao hàng đã hoàn tất (Goods ready)" tab shows only goods-ready orders | 1. Click the "Giao hàng đã hoàn tất (Goods ready)" tab | N/A | Only orders where goods delivery is complete are shown. | Untested |
| **SOL_016** | Functional | P1 | "Kế toán đã xuất hoá đơn (Invoice issue)" tab shows invoiced orders | 1. Click the "Kế toán đã xuất hoá đơn (Invoice issue)" tab | N/A | Only orders where an invoice has been issued by accounting are shown. | Untested |
| **SOL_017** | Functional | P1 | "Đã hoàn tất (finished)" tab shows only finished orders | 1. Click the "Đã hoàn tất (finished)" tab | N/A | Only fully completed orders are shown. | Untested |
| **SOL_018** | Functional | P1 | "e-Approval" tab shows orders in approval workflow | 1. Click the "e-Approval" tab | N/A | Only orders currently in the e-Approval workflow are shown. | Untested |
| **SOL_019** | Functional | P2 | Search combined with status filter narrows results | 1. Click the "Đang xử lý (processing)" tab<br>2. Enter a keyword in the search input<br>3. Press Search(F3) | Keyword: `[valid_customer_name]` | Table shows only processing orders that also match the keyword. | Untested |
| **SOL_020** | Functional | P2 | Fn button opens advanced search options | 1. Click the "Fn" button next to the search input | N/A | An expanded filter panel opens with additional criteria (e.g., date range, PIC Name, Customer/Vendor Code, Delivery Date). | Untested |
| **SOL_021** | Functional | P2 | Option button opens display or column settings | 1. Click the "Option" button | N/A | A settings panel appears allowing the user to configure visible columns or display preferences. | Untested |
| **SOL_022** | Security | P2 | Search input with special characters does not crash or execute scripts | 1. Enter special characters in the search field<br>2. Press Search(F3) | Keyword: `<script>alert(1)</script>` | Page remains stable. No script executes. Table shows no results or an appropriate message. | Untested |

---

## Pagination

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_023** | Functional | P1 | Pagination shows correct total page count | 1. Navigate to the Sales Order List page | N/A | Pagination control shows the total number of pages (e.g., `/ 8`) matching the dataset. | Untested |
| **SOL_024** | Functional | P1 | Clicking a page number loads that page | 1. Click page "2" in the pagination bar | N/A | Table updates to show the records for page 2. Row numbers continue from the end of page 1. | Untested |
| **SOL_025** | Functional | P1 | Fast-forward arrow navigates to the last page | 1. Click the `»` arrow | N/A | Table jumps to the last page of results. | Untested |
| **SOL_026** | Functional | P2 | Entering a specific page number navigates correctly | 1. Type a page number into the page input box<br>2. Press Enter | Page: `5` (where total ≥ 5) | Table loads the specified page. | Untested |
| **SOL_027** | Edge Case | P2 | Entering an out-of-range page number does not crash | 1. Type `9999` in the page input<br>2. Press Enter | Page: `9999` | System shows an error or remains on the current page. Does not crash. | Untested |

---

## Create (New Sales Order)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_028** | Functional | P0 | Create new sales order via New(F2) button | 1. Click "New(F2)" | N/A | New sales order form opens with empty fields ready for data entry. | Untested |
| **SOL_029** | Functional | P0 | Create new sales order via F2 keyboard shortcut | 1. Press the F2 key | N/A | New sales order form opens — same behavior as clicking "New(F2)". | Untested |
| **SOL_030** | Functional | P0 | Save a new sales order with all required fields filled | 1. Click "New(F2)"<br>2. Fill in all required fields<br>3. Save | Customer Code: `[valid_code]`<br>Item: `[valid_item]`<br>Qty: `1`<br>Price: `[valid_price]`<br>Delivery Date: `[future_date]` | New order is saved. It appears in the Sales Order List with an auto-assigned Sales Order No. and status "Unconfirmed". | Untested |
| **SOL_031** | Validation | P1 | Save new order with required fields empty shows validation error | 1. Click "New(F2)"<br>2. Leave required fields empty<br>3. Attempt to save | N/A | System highlights required fields and prevents saving. Error message is displayed. | Untested |
| **SOL_032** | Validation | P1 | Save new order with invalid Customer/Vendor Code shows error | 1. Click "New(F2)"<br>2. Enter a non-existent Customer/Vendor Code<br>3. Attempt to save | Customer Code: `[invalid_code]` | System shows an error indicating the code does not exist. Order is not saved. | Untested |
| **SOL_033** | Validation | P2 | Save new order with a past Delivery Date | 1. Click "New(F2)"<br>2. Enter a Delivery Date in the past<br>3. Save | Delivery Date: `[past_date]` | System either warns the user or saves the order. No crash occurs. Behavior is clearly communicated. | Untested |
| **SOL_034** | Functional | P2 | New order defaults to "Unconfirmed" status | 1. Create and save a new sales order | Valid data | New order appears in the list with Progress Status = "Unconfirmed" and is visible under the "Unconfirmed" tab. | Untested |
| **SOL_035** | Functional | P2 | Auto-generated Sales Order No. is unique | 1. Create two new orders in sequence | N/A | Each saved order receives a unique Sales Order No. (e.g., `20260403012`, `20260403013`). No duplicates. | Untested |
| **SOL_036** | Functional | P2 | Creation Date is set to current date and time | 1. Save a new order and observe the Creation Date column | N/A | Creation Date matches the current system date and time. | Untested |
| **SOL_037** | Functional | P2 | New order with multiple items saves all item lines | 1. Click "New(F2)"<br>2. Add 3 different items<br>3. Save | 3 valid items with quantities | All 3 items are saved. Total Sales Order Qty reflects the combined count. Item Name (Summary) shows a condensed list. | Untested |

---

## Read (View Sales Order Detail)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_038** | Functional | P0 | Click Date link opens sales order detail | 1. Click any blue Date link (e.g., `03/04/2026`) in the table | N/A | Detail view opens for that order, showing all fields including items, quantities, customer info, and status history. | Untested |
| **SOL_039** | Functional | P0 | Click Sales Order No. opens the same order detail | 1. Click the Sales Order No. value in the table | N/A | The same order detail view opens as when clicking the Date link. | Untested |
| **SOL_040** | Functional | P1 | Detail view data matches the list row values | 1. Note values in a row (Customer, Item, Qty, Delivery Date)<br>2. Click the Date or Sales Order No. to open detail | N/A | All values in the detail view match those shown in the list row. No data mismatch. | Untested |
| **SOL_041** | Functional | P2 | Item Name (Summary) with "and X more" shows all items in detail | 1. Find a row where Item Name shows "and 1 more" or "and X more"<br>2. Open the detail | Row with summary like "Hộp mực máy in ... and 3 more" | Detail view shows all items, not just the summary. | Untested |

---

## Update (Edit & Change Status)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_042** | Functional | P0 | Edit an existing sales order and save changes | 1. Open a sales order via the Date or Sales Order No. link<br>2. Modify a field (e.g., quantity, delivery date)<br>3. Save | Modified value: `[updated_value]` | Changes are saved. Updated values are reflected immediately in the Sales Order List. | Untested |
| **SOL_043** | Functional | P0 | Change Status of selected order to "Confirmed" | 1. Select one or more rows via checkboxes<br>2. Click "Change Status"<br>3. Select "Confirmed" | N/A | Selected orders' status changes to Confirmed. They appear under the "Confirm" tab filter. | Untested |
| **SOL_044** | Functional | P1 | Change Status to "Đang xử lý (processing)" | 1. Select a Confirmed order<br>2. Click "Change Status"<br>3. Select "Đang xử lý (processing)" | N/A | Order status updates to Processing. It appears under the "Đang xử lý (processing)" tab. | Untested |
| **SOL_045** | Functional | P1 | Change Status to "Giao hàng đã hoàn tất (Goods ready)" | 1. Select an In-Progress order<br>2. Click "Change Status"<br>3. Select "Giao hàng đã hoàn tất (Goods ready)" | N/A | Order status updates to Goods Ready. | Untested |
| **SOL_046** | Functional | P1 | Change Status to "Đã hoàn tất (finished)" | 1. Select an eligible order<br>2. Click "Change Status"<br>3. Select "Đã hoàn tất (finished)" | N/A | Order status updates to Finished and appears under the "Đã hoàn tất (finished)" tab. | Untested |
| **SOL_047** | Validation | P1 | Change Status without selecting any row shows warning | 1. Ensure no rows are selected<br>2. Click "Change Status" | N/A | System displays a warning prompting the user to select at least one record. No status change dialog opens. | Untested |
| **SOL_048** | Functional | P1 | Change Status for multiple orders simultaneously | 1. Select 3 rows via checkboxes<br>2. Click "Change Status" → "Confirmed" | N/A | All 3 orders change to Confirmed status simultaneously. List updates accordingly. | Untested |
| **SOL_049** | Functional | P2 | Edit a Processing order prompts a confirmation warning | 1. Open an order with status "Đang xử lý (processing)"<br>2. Modify a field and attempt to save | N/A | System warns the user that editing an in-progress order may affect downstream operations. User must confirm to proceed. | Untested |
| **SOL_050** | Functional | P2 | e-Approval button submits selected orders for approval | 1. Select one or more orders<br>2. Click "e-Approval" | N/A | Selected orders are submitted to the e-Approval workflow. Their status changes and they appear under the "e-Approval" tab. | Untested |
| **SOL_051** | Functional | P2 | Generate Other Slips creates related documents | 1. Select one or more orders<br>2. Click "Generate Other Slips"<br>3. Choose a document type from the dropdown | N/A | Related slip/document (e.g., delivery note, invoice) is generated and linked to the selected order(s). | Untested |

---

## Delete

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_052** | Functional | P0 | Delete a single selected sales order | 1. Select one row via checkbox<br>2. Click "Delete Selected"<br>3. Confirm deletion in the dialog | N/A | Selected order is deleted and no longer appears in the Sales Order List. | Untested |
| **SOL_053** | Functional | P0 | Delete multiple selected orders at once | 1. Select multiple rows via checkboxes<br>2. Click "Delete Selected"<br>3. Confirm deletion | N/A | All selected orders are deleted simultaneously. List updates to remove those rows. | Untested |
| **SOL_054** | Validation | P1 | Delete without selecting any row shows warning | 1. Ensure no rows are checked<br>2. Click "Delete Selected" | N/A | System displays a warning: "Please select at least one record." No deletion occurs. | Untested |
| **SOL_055** | Functional | P1 | Delete confirmation dialog can be cancelled | 1. Select a row<br>2. Click "Delete Selected"<br>3. Click "Cancel" in the confirmation dialog | N/A | No records are deleted. The order remains in the list unchanged. | Untested |
| **SOL_056** | Security | P1 | In-progress or finished order cannot be deleted without reverting status | 1. Select an order with status "Đang xử lý (processing)" or "Đã hoàn tất (finished)"<br>2. Click "Delete Selected" | N/A | System prevents deletion and displays an error message indicating that only orders in an eligible status can be deleted. | Untested |
| **SOL_057** | Functional | P2 | Deleted order does not appear under any filter tab | 1. Delete an order<br>2. Switch through all filter tabs | N/A | The deleted order does not appear under any tab, including "All". | Untested |
| **SOL_058** | Functional | P2 | Order with related documents (Other Slips) cannot be deleted | 1. Select an order that has linked slips generated<br>2. Click "Delete Selected" | N/A | System prevents deletion and shows an error indicating linked documents must be removed first. | Untested |

---

## Export & Output

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_059** | Functional | P1 | Export to Excel downloads a file | 1. Click the "Excel" button | N/A | A `.xlsx` file is downloaded containing all visible rows matching the current filter/search. | Untested |
| **SOL_060** | Functional | P2 | Excel export respects active status filter | 1. Apply the "Đang xử lý (processing)" tab filter<br>2. Click "Excel" | N/A | Downloaded file contains only Processing orders, not all records. | Untested |
| **SOL_061** | Functional | P2 | Print button opens print options | 1. Click the "Print" dropdown<br>2. Select a print option | N/A | Print preview or system print dialog opens with the current visible list. | Untested |
| **SOL_062** | Functional | P2 | Send dropdown shows available send methods | 1. Click the "Send" dropdown arrow | N/A | A dropdown appears with available options (e.g., email, fax, messenger). | Untested |
| **SOL_063** | Functional | P2 | Email button opens compose dialog for selected order | 1. Select one order<br>2. Click "Email" | N/A | An email compose dialog opens pre-filled with the selected order's information. | Untested |
| **SOL_064** | Functional | P2 | View History shows audit trail for selected order | 1. Select one order<br>2. Click "View History" | N/A | A history panel opens showing all events: creation, status changes, edits, with timestamps and actor names. | Untested |
| **SOL_065** | Functional | P2 | Barcode (Item) generates item barcode for selected order | 1. Select one order<br>2. Click "Barcode (Item)" | N/A | A barcode or QR code for the item(s) in the selected order is generated and displayed or downloaded. | Untested |
| **SOL_066** | Functional | P2 | Generate Other Slips dropdown shows available document types | 1. Click the "Generate Other Slips" dropdown arrow | N/A | A list of linked document types appears (e.g., Delivery Note, Invoice, Purchase Order). | Untested |

---

## Edge Cases & Security

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SOL_067** | Edge Case | P2 | Select-all checkbox selects all rows on current page | 1. Click the header checkbox | N/A | All rows on the current page are checked. Bulk actions (Delete, Change Status) apply to all. | Untested |
| **SOL_068** | Edge Case | P2 | Deselecting select-all unchecks all rows | 1. Click the header checkbox to select all<br>2. Click it again to deselect | N/A | All row checkboxes are unchecked. | Untested |
| **SOL_069** | Edge Case | P2 | Large dataset across many pages loads without freezing | 1. Set date range to a period with a high volume of orders (e.g., full year) | N/A | List loads within acceptable time (≤ 5 seconds). Pagination works correctly. No browser freeze or timeout. | Untested |
| **SOL_070** | Edge Case | P2 | Very long Customer/Vendor Name is truncated gracefully | 1. View a row with an extremely long Customer/Vendor Name | N/A | Name is truncated with `...` in the cell. Full name is visible in the order detail view. Row layout is not broken. | Untested |
| **SOL_071** | Edge Case | P3 | Item Name (Summary) with many items shows condensed display | 1. View a row where the order contains 5+ items | N/A | Summary shows first item(s) followed by "and X more". Full list is shown in the detail view. | Untested |
| **SOL_072** | Security | P1 | User without create permission cannot open New(F2) form | 1. Log in as a user with read-only permissions<br>2. Click "New(F2)" | N/A | Button is disabled or an authorization error is shown. The create form does not open. | Untested |
| **SOL_073** | Security | P1 | User without delete permission cannot delete records | 1. Log in as a user with read-only permissions<br>2. Select a row and click "Delete Selected" | N/A | "Delete Selected" is disabled or an authorization error is shown. No record is deleted. | Untested |
| **SOL_074** | Security | P2 | User without edit permission cannot save changes in detail view | 1. Log in as a read-only user<br>2. Open an order detail<br>3. Attempt to modify and save | N/A | Save button is disabled or an authorization error is shown. No changes are persisted. | Untested |
| **SOL_075** | Edge Case | P3 | Concurrent edit by two users triggers a conflict warning | 1. Open the same order in two browser sessions<br>2. User A edits and saves<br>3. User B attempts to save different changes | N/A | User B receives a conflict/overwrite warning. No data is silently lost. | Untested |
