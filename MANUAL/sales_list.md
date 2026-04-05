# Manual Test Cases — Sales List

**Feature:** Sales List — view, search, filter, create, update, delete sales orders

---

## Table Display & Layout

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_001** | UI/UX | P0 | Sales List page renders all required columns | 1. Navigate to the Sales List page | N/A | Table displays all columns: Date, Creation Date, Date-No., Invoice Date (Ngày hóa đơn), PIC Code, Sales No., Invoice No. (Số hóa đơn), Customer/Vendor Code, Customer/Vendor Name, Item Name (Summary), Receivable Amount. No column is missing or truncated beyond the visible viewport. | Untested |
| **SL_002** | UI/UX | P1 | All action buttons are visible in the toolbar | 1. Navigate to the Sales List page | N/A | Bottom toolbar shows: New(F2), Email, Change Status, Send, Print, Barcode (Item), e-Approval, Delete Selected, Excel, View History. | Untested |
| **SL_003** | UI/UX | P1 | Filter tabs render correctly | 1. Navigate to the Sales List page | N/A | Tab bar shows: All, e-Approval, Unconfirmed, Confirm, Xác nhận (confirmed), Đơn hàng chờ ký (INV pending), Confirm (do not issue invoice). Active tab is highlighted. | Untested |
| **SL_004** | UI/UX | P2 | Date range is displayed in header | 1. Navigate to the Sales List page | N/A | Top-right area shows the active date range (e.g., `01/03/2026 ~ 05/04/2026`). | Untested |
| **SL_005** | UI/UX | P2 | Row numbers are displayed correctly | 1. Navigate to the Sales List page | N/A | Each row has a sequential row number in the leftmost column starting from 1. Numbers continue correctly across pages. | Untested |
| **SL_006** | UI/UX | P2 | Checkbox column is present for row selection | 1. Navigate to the Sales List page | N/A | A checkbox appears at the left of each data row and in the table header for select-all. | Untested |
| **SL_007** | UI/UX | P3 | Responsive layout on wide screen | 1. Open Sales List at full browser width | N/A | All columns are visible and properly aligned. Horizontal scrollbar appears if content overflows. | Untested |

---

## Search & Filter

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_008** | Functional | P0 | Search by keyword returns matching records | 1. Enter a keyword in the search input<br>2. Press Enter or click Search(F3) | Keyword: `[valid_customer_name]` | Table updates to show only rows matching the keyword. Result count changes accordingly. | Untested |
| **SL_009** | Functional | P0 | Search with no results shows empty state | 1. Enter a keyword that matches no records<br>2. Press Enter or click Search(F3) | Keyword: `[nonexistent_value]` | Table shows zero rows and an appropriate "no results" message. | Untested |
| **SL_010** | Functional | P1 | Filter by "All" tab shows all records | 1. Click the "All" tab | N/A | Table shows all sales orders regardless of status. | Untested |
| **SL_011** | Functional | P1 | Filter by "Unconfirmed" tab shows only unconfirmed orders | 1. Click the "Unconfirmed" tab | N/A | Table shows only rows with Unconfirmed status. Rows with other statuses are hidden. | Untested |
| **SL_012** | Functional | P1 | Filter by "Confirmed" tab shows only confirmed orders | 1. Click the "Confirm" tab | N/A | Table shows only rows with Confirmed status. | Untested |
| **SL_013** | Functional | P1 | Filter by "INV pending" tab shows only pending invoice orders | 1. Click the "Đơn hàng chờ ký (INV pending)" tab | N/A | Table shows only rows awaiting invoice signature. | Untested |
| **SL_014** | Functional | P1 | Filter by "e-Approval" tab shows orders in e-Approval flow | 1. Click the "e-Approval" tab | N/A | Table shows only rows currently in the e-Approval workflow. | Untested |
| **SL_015** | Functional | P2 | Search combined with status filter narrows results | 1. Click the "Confirmed" tab<br>2. Enter a keyword in the search input<br>3. Press Search(F3) | Keyword: `[valid_customer_name]` | Table shows only confirmed rows that also match the keyword. | Untested |
| **SL_016** | Functional | P2 | Fn button opens additional search/filter options | 1. Click the "Fn" button next to the search input | N/A | An expanded search or filter panel opens with additional criteria fields (e.g., date range, PIC Code, Sales No.). | Untested |
| **SL_017** | Functional | P2 | Option button opens display/column settings | 1. Click the "Option" button | N/A | A settings panel or dialog appears allowing the user to configure visible columns or display preferences. | Untested |
| **SL_018** | Functional | P2 | Search field accepts special characters without crashing | 1. Enter special characters in the search input<br>2. Press Search(F3) | Keyword: `<script>alert(1)</script>` | Page remains stable. No script executes. Table shows no results or appropriate message. | Untested |

---

## Pagination

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_019** | Functional | P1 | Pagination shows correct total page count | 1. Navigate to Sales List | N/A | Pagination control shows the total number of pages (e.g., `/ 4`) matching the actual dataset. | Untested |
| **SL_020** | Functional | P1 | Navigate to next page loads new records | 1. Click page "2" in the pagination bar | N/A | Table updates to show the next page of records. Row numbers continue from where page 1 ended. | Untested |
| **SL_021** | Functional | P1 | Navigate to last page using fast-forward arrow | 1. Click the `»` arrow in the pagination bar | N/A | Table jumps to the last page of results. | Untested |
| **SL_022** | Functional | P2 | Enter a specific page number navigates correctly | 1. Type a page number into the page input box<br>2. Press Enter | Page: `3` (where total pages ≥ 3) | Table loads the specified page. | Untested |
| **SL_023** | Functional | P2 | Enter an invalid page number does not crash | 1. Type an out-of-range number in the page input<br>2. Press Enter | Page: `999` | System shows an error or stays on the current page. Does not crash. | Untested |

---

## Create (New Sales Order)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_024** | Functional | P0 | Create new sales order via New(F2) button | 1. Click "New(F2)" button | N/A | New sales order form/dialog opens with empty fields ready for input. | Untested |
| **SL_025** | Functional | P0 | Create new sales order via keyboard shortcut F2 | 1. Press the F2 key | N/A | New sales order form opens — same behavior as clicking "New(F2)". | Untested |
| **SL_026** | Functional | P0 | Save a new sales order with all required fields filled | 1. Click "New(F2)"<br>2. Fill in all required fields<br>3. Save the record | Customer Code: `[valid_code]`<br>Item: `[valid_item]`<br>Qty: `1`<br>Price: `[valid_price]` | New record is saved and appears in the Sales List. A Date-No. is auto-assigned. | Untested |
| **SL_027** | Validation | P1 | Save new order with required fields empty shows validation error | 1. Click "New(F2)"<br>2. Leave required fields empty<br>3. Attempt to save | N/A | System highlights missing required fields and prevents saving. Error message is displayed. | Untested |
| **SL_028** | Validation | P1 | Save new order with invalid Customer/Vendor Code shows error | 1. Click "New(F2)"<br>2. Enter a non-existent Customer Code<br>3. Attempt to save | Customer Code: `[invalid_code]` | System shows an error indicating the customer/vendor code does not exist. | Untested |
| **SL_029** | Functional | P2 | Newly created order defaults to "Unconfirmed" status | 1. Create and save a new sales order | Valid data | New order appears in the list with "Unconfirmed" status and is visible under the "Unconfirmed" tab filter. | Untested |
| **SL_030** | Functional | P2 | Auto-generated Date-No. is unique | 1. Create two new sales orders on the same date | N/A | Each saved order receives a unique Date-No. (e.g., `03/04/2026 -1`, `03/04/2026 -2`). No duplicate Date-No. is assigned. | Untested |
| **SL_031** | Functional | P2 | Creation Date is set to current date and time automatically | 1. Click "New(F2)" and save a new order | N/A | The Creation Date column shows the current date and time matching the system clock. | Untested |

---

## Read (View Sales Order Detail)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_032** | Functional | P0 | Click Date-No. link opens order detail | 1. Click any blue Date-No. link in the table (e.g., `03/04/2026 -5`) | N/A | Order detail view opens showing full information for the selected sales order. | Untested |
| **SL_033** | Functional | P1 | Detail view shows all field data matching the list row | 1. Note the values in a list row<br>2. Click the Date-No. link to open detail | N/A | Detail view displays the same Date, Customer/Vendor Name, Item, PIC Code, and amounts as shown in the list. | Untested |
| **SL_034** | Functional | P2 | Click Sales No. opens related sales record | 1. Click a value in the Sales No. column (if linked) | N/A | The related sales record or detail opens. No navigation error occurs. | Untested |

---

## Update (Edit & Change Status)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_035** | Functional | P0 | Edit an existing sales order and save changes | 1. Open an existing sales order via the Date-No. link<br>2. Modify a field (e.g., Item Name or Quantity)<br>3. Save | Modified value: `[updated_value]` | Changes are saved. The updated value is reflected in the Sales List row. | Untested |
| **SL_036** | Functional | P0 | Change Status of a selected order to "Confirmed" | 1. Select one or more rows using the checkboxes<br>2. Click "Change Status"<br>3. Select "Confirmed" | N/A | Selected orders' status changes to Confirmed. They appear under the "Confirm" tab filter. | Untested |
| **SL_037** | Functional | P1 | Change Status without selecting any row shows warning | 1. Ensure no rows are selected<br>2. Click "Change Status" | N/A | System displays a warning prompting the user to select at least one record. Status dialog does not open. | Untested |
| **SL_038** | Functional | P1 | Change Status of multiple orders simultaneously | 1. Select 3 rows using checkboxes<br>2. Click "Change Status" → "Confirmed" | N/A | All 3 selected orders change to Confirmed status simultaneously. | Untested |
| **SL_039** | Functional | P2 | Edit a Confirmed order prompts a re-confirmation warning | 1. Open a Confirmed order via Date-No. link<br>2. Modify a field and save | N/A | System warns the user that editing will affect the confirmed status. If confirmed, the change is saved and status may revert to Unconfirmed. | Untested |
| **SL_040** | Functional | P2 | e-Approval button triggers approval workflow | 1. Select one or more rows<br>2. Click "e-Approval" | N/A | Selected orders enter the e-Approval workflow. Status updates accordingly and they appear under the "e-Approval" tab. | Untested |

---

## Delete

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_041** | Functional | P0 | Delete a selected sales order | 1. Select one row using the checkbox<br>2. Click "Delete Selected"<br>3. Confirm deletion in the dialog | N/A | Selected order is deleted and no longer appears in the Sales List. | Untested |
| **SL_042** | Functional | P0 | Delete multiple selected orders at once | 1. Select multiple rows using checkboxes<br>2. Click "Delete Selected"<br>3. Confirm deletion | N/A | All selected orders are deleted simultaneously. List updates to remove those rows. | Untested |
| **SL_043** | Functional | P1 | Delete without selecting any row shows warning | 1. Ensure no rows are checked<br>2. Click "Delete Selected" | N/A | System displays a warning: "Please select at least one record." No deletion occurs. | Untested |
| **SL_044** | Functional | P1 | Delete confirmation dialog can be cancelled | 1. Select a row<br>2. Click "Delete Selected"<br>3. Click "Cancel" in the confirmation dialog | N/A | No records are deleted. The order remains in the list. | Untested |
| **SL_045** | Security | P1 | Confirmed order cannot be deleted directly | 1. Select an order with "Confirmed" status<br>2. Click "Delete Selected" | N/A | System prevents deletion and shows an error message indicating confirmed orders must be unconfirmed before deletion. | Untested |
| **SL_046** | Functional | P2 | Deleted order does not appear in any filter tab | 1. Delete an order<br>2. Switch through all filter tabs (All, Unconfirmed, Confirmed, etc.) | N/A | The deleted order does not appear under any filter tab. | Untested |

---

## Export & Output

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_047** | Functional | P1 | Export to Excel downloads a file | 1. Click the "Excel" button | N/A | A `.xlsx` or `.xls` file is downloaded containing all visible rows matching the current filter/search. | Untested |
| **SL_048** | Functional | P2 | Export to Excel respects active filter | 1. Apply the "Unconfirmed" tab filter<br>2. Click "Excel" | N/A | Downloaded file contains only Unconfirmed orders, not all records. | Untested |
| **SL_049** | Functional | P2 | Print button opens print preview | 1. Click the "Print" dropdown arrow<br>2. Select a print option | N/A | Print preview or print dialog opens with the current visible list data. | Untested |
| **SL_050** | Functional | P2 | Send button shows send options | 1. Click the "Send" dropdown arrow | N/A | A dropdown appears with available send options (e.g., email, fax). | Untested |
| **SL_051** | Functional | P2 | Email button sends email for selected order | 1. Select one row<br>2. Click "Email" | N/A | An email compose dialog opens pre-filled with information from the selected sales order. | Untested |
| **SL_052** | Functional | P2 | View History shows audit log for selected order | 1. Select one row<br>2. Click "View History" | N/A | A history/audit log panel opens showing creation, modification, and status change events for the selected order. | Untested |
| **SL_053** | Functional | P3 | Barcode (Item) generates a barcode for selected order | 1. Select one row<br>2. Click "Barcode (Item)" | N/A | A barcode or QR code is generated for the item(s) in the selected order. | Untested |

---

## Edge Cases & Security

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SL_054** | Edge Case | P2 | Large dataset (many pages) loads without performance issues | 1. Navigate to a date range with many records (e.g., full year) | N/A | List loads within acceptable time. Pagination works correctly. No browser freeze. | Untested |
| **SL_055** | Edge Case | P2 | Select-all checkbox selects all rows on current page | 1. Click the header checkbox | N/A | All rows on the current page are selected. "Delete Selected", "Change Status" apply to all of them. | Untested |
| **SL_056** | Edge Case | P2 | Deselecting select-all unchecks all rows | 1. Click the header checkbox to select all<br>2. Click it again | N/A | All row checkboxes are unchecked. | Untested |
| **SL_057** | Security | P1 | User without delete permission cannot delete records | 1. Log in as a user with read-only or limited permissions<br>2. Navigate to Sales List<br>3. Attempt to click "Delete Selected" | N/A | "Delete Selected" button is disabled or an authorization error is shown. No record is deleted. | Untested |
| **SL_058** | Security | P1 | User without create permission cannot create new orders | 1. Log in as a read-only user<br>2. Click "New(F2)" | N/A | Button is disabled or an authorization error is shown. The create form does not open. | Untested |
| **SL_059** | Edge Case | P3 | Concurrent edit by two users shows a conflict warning | 1. Open the same sales order in two browser sessions<br>2. User A edits and saves<br>3. User B attempts to save different changes | N/A | User B receives a conflict warning indicating the record was already modified. No data is silently overwritten. | Untested |
| **SL_060** | Edge Case | P3 | Very long Customer/Vendor Name is truncated gracefully | 1. View a record with an extremely long Customer/Vendor Name | N/A | The name is truncated with an ellipsis (`...`) in the table cell and does not break the row layout. Full name is accessible in the detail view. | Untested |
