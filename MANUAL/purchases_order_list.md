# Manual Test Cases — Purchase Order List

**Feature:** Purchase Order List — view, search, filter, create, update, delete purchase orders

---

## Table Display & Layout

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_001** | UI/UX | P0 | Page renders all required columns | 1. Navigate to the Purchase Order List page | N/A | Table displays all columns: Date-No., Customer/Vendor Name, PIC Name, Item Name [Spec Name], Delivery Date, Total Purchase Order Amount, Progress Status, Cc., Created Slip, Print. No column header is missing. | Untested |
| **POL_002** | UI/UX | P1 | All toolbar buttons are visible | 1. Navigate to the Purchase Order List page | N/A | Bottom toolbar shows: New(F2), Email, Change Status, Send, Print, Barcode (Item), Generate Other Slips, e-Approval, Delete Selected, Excel, View History. | Untested |
| **POL_003** | UI/UX | P1 | Filter tab bar renders all status tabs | 1. Navigate to the Purchase Order List page | N/A | Tab bar displays: All, e-Approval, Unconfirmed, Confirm, Đang xử lý, Đã hoàn tất. Active tab is highlighted. | Untested |
| **POL_004** | UI/UX | P2 | Date range is displayed in the top-right header | 1. Navigate to the Purchase Order List page | N/A | Top-right area shows the active date range (e.g., `06/03/2026 ~ 05/05/2026`). | Untested |
| **POL_005** | UI/UX | P2 | Row numbers are sequential | 1. Navigate to the Purchase Order List page | N/A | Each row is numbered sequentially from 1. Numbers continue correctly across pages. | Untested |
| **POL_006** | UI/UX | P2 | Checkbox column is present for row selection | 1. Navigate to the Purchase Order List page | N/A | A checkbox appears at the left of each data row and in the header for select-all. | Untested |
| **POL_007** | UI/UX | P2 | Progress Status is displayed as a colored indicator | 1. Navigate to the Purchase Order List page | N/A | "Đang xử lý" appears as a blue/orange link; "Đã hoàn tất" appears as orange text. Colors distinguish statuses visually. | Untested |
| **POL_008** | UI/UX | P2 | "Created Slip" column shows View button for eligible rows | 1. Navigate to the Purchase Order List page | N/A | Rows with a linked slip show an orange "View" button in the Created Slip column. Rows without a linked slip show an empty cell. | Untested |
| **POL_009** | UI/UX | P2 | "Print" column shows a Print link for each row | 1. Navigate to the Purchase Order List page | N/A | Each row has a "Print" link in the rightmost visible column. Clicking it prints or previews that individual order. | Untested |
| **POL_010** | UI/UX | P3 | Item Name [Spec Name] with multiple items shows condensed summary | 1. Find a row where the order contains multiple items | Row: "Hộp mực G73, 1000g - Biasdo and 1 more" | The cell shows the first item and "and X more". Full list is accessible in the detail view. | Untested |

---

## Search & Filter

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_011** | Functional | P0 | Search by keyword returns matching records | 1. Enter a keyword in the search input<br>2. Press Enter or click Search(F3) | Keyword: `[valid_vendor_name]` | Table updates to show only rows matching the keyword. Record count updates accordingly. | Untested |
| **POL_012** | Functional | P0 | Search with no matching results shows empty state | 1. Enter a keyword that matches no records<br>2. Press Search(F3) | Keyword: `[nonexistent_value]` | Table shows zero rows and an appropriate "no results" message. | Untested |
| **POL_013** | Functional | P1 | "All" tab shows all purchase orders | 1. Click the "All" tab | N/A | All purchase orders are displayed regardless of Progress Status. | Untested |
| **POL_014** | Functional | P1 | "Unconfirmed" tab shows only unconfirmed orders | 1. Click the "Unconfirmed" tab | N/A | Only orders with Unconfirmed status are shown. | Untested |
| **POL_015** | Functional | P1 | "Confirm" tab shows only confirmed orders | 1. Click the "Confirm" tab | N/A | Only confirmed orders are shown. | Untested |
| **POL_016** | Functional | P1 | "Đang xử lý" tab shows only in-progress orders | 1. Click the "Đang xử lý" tab | N/A | Only orders with Processing status are shown. | Untested |
| **POL_017** | Functional | P1 | "Đã hoàn tất" tab shows only finished orders | 1. Click the "Đã hoàn tất" tab | N/A | Only fully completed purchase orders are shown. | Untested |
| **POL_018** | Functional | P1 | "e-Approval" tab shows orders in approval workflow | 1. Click the "e-Approval" tab | N/A | Only orders currently in the e-Approval workflow are shown. | Untested |
| **POL_019** | Functional | P2 | Search combined with status filter narrows results | 1. Click the "Đang xử lý" tab<br>2. Enter a keyword in the search input<br>3. Press Search(F3) | Keyword: `[valid_vendor_name]` | Table shows only Processing orders that also match the keyword. | Untested |
| **POL_020** | Functional | P2 | Fn button opens advanced search or filter panel | 1. Click the "Fn" button | N/A | An expanded filter panel opens with additional criteria (e.g., date range, Vendor Code, PIC Name, Delivery Date). | Untested |
| **POL_021** | Functional | P2 | Option button opens display or column settings | 1. Click the "Option" button | N/A | A settings panel appears allowing configuration of visible columns or display preferences. | Untested |
| **POL_022** | Security | P2 | Search with special characters does not crash or execute scripts | 1. Enter special characters in the search input<br>2. Press Search(F3) | Keyword: `<script>alert(1)</script>` | Page remains stable. No script executes. Table shows no results or an appropriate message. | Untested |

---

## Pagination

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_023** | Functional | P1 | Pagination shows correct total page count | 1. Navigate to the Purchase Order List page | N/A | Pagination control displays the correct total (e.g., `/ 3`) matching the dataset. | Untested |
| **POL_024** | Functional | P1 | Clicking a page number loads that page | 1. Click page "2" in the pagination bar | N/A | Table updates to show page 2 records. Row numbers continue from the end of page 1. | Untested |
| **POL_025** | Functional | P1 | Fast-forward arrow navigates to the last page | 1. Click the `»` arrow | N/A | Table jumps to the last page of results. | Untested |
| **POL_026** | Functional | P2 | Entering a specific page number navigates correctly | 1. Type a page number in the page input box<br>2. Press Enter | Page: `2` (where total ≥ 2) | Table loads the specified page. | Untested |
| **POL_027** | Edge Case | P2 | Entering an out-of-range page number does not crash | 1. Type `9999` in the page input<br>2. Press Enter | Page: `9999` | System shows an error or stays on the current page. Does not crash. | Untested |

---

## Create (New Purchase Order)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_028** | Functional | P0 | Create new purchase order via New(F2) button | 1. Click "New(F2)" | N/A | New purchase order form opens with empty fields ready for input. | Untested |
| **POL_029** | Functional | P0 | Create new purchase order via F2 keyboard shortcut | 1. Press the F2 key | N/A | New purchase order form opens — same behavior as clicking "New(F2)". | Untested |
| **POL_030** | Functional | P0 | Save a new purchase order with all required fields filled | 1. Click "New(F2)"<br>2. Fill in all required fields<br>3. Save | Vendor Code: `[valid_vendor_code]`<br>Item: `[valid_item]`<br>Qty: `1`<br>Price: `[valid_price]`<br>Delivery Date: `[future_date]` | New order is saved and appears in the Purchase Order List. A Date-No. is auto-assigned. Status defaults to Unconfirmed. | Untested |
| **POL_031** | Validation | P1 | Save with required fields empty shows validation error | 1. Click "New(F2)"<br>2. Leave required fields empty<br>3. Attempt to save | N/A | System highlights required fields and prevents saving. Error message is displayed. | Untested |
| **POL_032** | Validation | P1 | Save with invalid Vendor Code shows error | 1. Click "New(F2)"<br>2. Enter a non-existent Vendor Code<br>3. Attempt to save | Vendor Code: `[invalid_code]` | System shows an error indicating the vendor code does not exist. Order is not saved. | Untested |
| **POL_033** | Validation | P2 | Save with a past Delivery Date shows warning | 1. Click "New(F2)"<br>2. Enter a Delivery Date in the past<br>3. Save | Delivery Date: `[past_date]` | System warns the user or saves with a notice. No crash occurs. Behavior is clearly communicated. | Untested |
| **POL_034** | Functional | P2 | New order defaults to "Unconfirmed" status | 1. Create and save a new purchase order | Valid data | New order appears under the "Unconfirmed" tab with no Created Slip linked. | Untested |
| **POL_035** | Functional | P2 | Auto-generated Date-No. is unique per date | 1. Create two purchase orders on the same date | N/A | Each order gets a unique Date-No. (e.g., `03/04/2026 -1`, `03/04/2026 -2`). No duplicates. | Untested |
| **POL_036** | Functional | P2 | New order with multiple items saves all lines | 1. Click "New(F2)"<br>2. Add 3 different items with quantities and prices<br>3. Save | 3 valid items | All 3 items are saved. Item Name [Spec Name] column shows first item and "and X more". Total Purchase Order Amount is the sum. | Untested |
| **POL_037** | Functional | P2 | Total Purchase Order Amount is calculated correctly | 1. Create a new order with items and unit prices<br>2. Save | Item A: qty 2 × price 100,000<br>Item B: qty 1 × price 500,000 | Total Purchase Order Amount = 700,000. Value in the list row matches. | Untested |

---

## Read (View Purchase Order Detail)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_038** | Functional | P0 | Click Date-No. link opens purchase order detail | 1. Click any blue Date-No. link (e.g., `03/04/2026 -2`) | N/A | Detail view opens showing all fields: vendor info, item lines, quantities, prices, delivery date, status, PIC Name, Cc. | Untested |
| **POL_039** | Functional | P1 | Detail view data matches the list row values | 1. Note values in a row (Vendor Name, Item, Amount, Delivery Date)<br>2. Click the Date-No. link | N/A | All values in the detail view match those shown in the list row. No data mismatch. | Untested |
| **POL_040** | Functional | P2 | "View" button in Created Slip column opens the linked slip | 1. Click the orange "View" button in the Created Slip column of an eligible row | N/A | The linked slip (e.g., goods receipt, delivery note) is opened or displayed. | Untested |
| **POL_041** | Functional | P2 | "Print" link in Print column prints or previews the order | 1. Click the "Print" link in the Print column of any row | N/A | A print preview dialog or the system print dialog opens for that specific purchase order. | Untested |
| **POL_042** | Functional | P2 | Item Name [Spec Name] "and X more" shows all items in detail | 1. Find a row showing "and X more" in Item Name<br>2. Open the detail | Row with "and 1 more" | Detail view displays all item lines, not just the summary. | Untested |

---

## Update (Edit & Change Status)

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_043** | Functional | P0 | Edit an existing purchase order and save changes | 1. Open a purchase order via the Date-No. link<br>2. Modify a field (e.g., quantity, delivery date)<br>3. Save | Modified value: `[updated_value]` | Changes are saved. Updated values reflect immediately in the Purchase Order List row. | Untested |
| **POL_044** | Functional | P0 | Change Status to "Confirmed" | 1. Select one or more rows via checkboxes<br>2. Click "Change Status"<br>3. Select "Confirmed" | N/A | Selected orders' status changes to Confirmed. They appear under the "Confirm" tab. | Untested |
| **POL_045** | Functional | P1 | Change Status to "Đang xử lý" (Processing) | 1. Select a Confirmed order<br>2. Click "Change Status"<br>3. Select "Đang xử lý" | N/A | Order status updates to Processing. Appears under the "Đang xử lý" tab. | Untested |
| **POL_046** | Functional | P1 | Change Status to "Đã hoàn tất" (Finished) | 1. Select an eligible order<br>2. Click "Change Status"<br>3. Select "Đã hoàn tất" | N/A | Order status updates to Finished. Appears under the "Đã hoàn tất" tab. Created Slip "View" button becomes active if a slip was generated. | Untested |
| **POL_047** | Validation | P1 | Change Status without selecting any row shows warning | 1. Ensure no rows are checked<br>2. Click "Change Status" | N/A | System warns: "Please select at least one record." No status change dialog opens. | Untested |
| **POL_048** | Functional | P1 | Change Status for multiple orders simultaneously | 1. Select 3 rows via checkboxes<br>2. Click "Change Status" → "Confirmed" | N/A | All 3 orders change to Confirmed status simultaneously. List updates accordingly. | Untested |
| **POL_049** | Functional | P2 | Edit a Processing order prompts a confirmation warning | 1. Open an order with status "Đang xử lý"<br>2. Modify a field and attempt to save | N/A | System warns the user that editing an in-progress order may affect linked operations. User must confirm to proceed. | Untested |
| **POL_050** | Functional | P2 | e-Approval submits selected orders for approval workflow | 1. Select one or more orders<br>2. Click "e-Approval" | N/A | Selected orders enter the e-Approval workflow. Status updates and they appear under the "e-Approval" tab. | Untested |
| **POL_051** | Functional | P2 | Generate Other Slips creates linked documents | 1. Select one or more orders<br>2. Click "Generate Other Slips"<br>3. Choose a document type | N/A | A linked document (e.g., goods receipt, invoice) is created and linked to the selected order(s). The "View" button in Created Slip column becomes active. | Untested |
| **POL_052** | Functional | P2 | Cc. field is editable in order detail | 1. Open an order detail<br>2. Edit the Cc. field<br>3. Save | Cc.: `[valid_user_or_email]` | Cc. value is saved and shown in the list's Cc. column. | Untested |

---

## Delete

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_053** | Functional | P0 | Delete a single selected purchase order | 1. Select one row via checkbox<br>2. Click "Delete Selected"<br>3. Confirm deletion | N/A | Order is deleted and no longer appears in the list. | Untested |
| **POL_054** | Functional | P0 | Delete multiple selected orders at once | 1. Select multiple rows via checkboxes<br>2. Click "Delete Selected"<br>3. Confirm deletion | N/A | All selected orders are deleted simultaneously. List updates to remove those rows. | Untested |
| **POL_055** | Validation | P1 | Delete without selecting any row shows warning | 1. Ensure no rows are checked<br>2. Click "Delete Selected" | N/A | System warns: "Please select at least one record." No deletion occurs. | Untested |
| **POL_056** | Functional | P1 | Delete confirmation dialog can be cancelled | 1. Select a row<br>2. Click "Delete Selected"<br>3. Click "Cancel" in the confirmation dialog | N/A | No records are deleted. The order remains in the list unchanged. | Untested |
| **POL_057** | Security | P1 | Finished order cannot be deleted without reverting status | 1. Select an order with status "Đã hoàn tất"<br>2. Click "Delete Selected" | N/A | System prevents deletion and shows an error: finished orders must be reverted before deletion. | Untested |
| **POL_058** | Functional | P2 | Order with a linked Created Slip cannot be deleted | 1. Select an order that has a Created Slip linked (orange "View" button)<br>2. Click "Delete Selected" | N/A | System prevents deletion and shows an error indicating the linked slip must be removed first. | Untested |
| **POL_059** | Functional | P2 | Deleted order does not appear under any filter tab | 1. Delete an order<br>2. Switch through all filter tabs | N/A | The deleted order is absent from all tabs including "All". | Untested |

---

## Export & Output

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_060** | Functional | P1 | Export to Excel downloads a file | 1. Click the "Excel" button | N/A | A `.xlsx` file is downloaded containing all visible rows matching the current filter/search. | Untested |
| **POL_061** | Functional | P2 | Excel export respects active status filter | 1. Apply the "Đang xử lý" tab filter<br>2. Click "Excel" | N/A | Downloaded file contains only Processing orders, not all records. | Untested |
| **POL_062** | Functional | P2 | Print dropdown opens print options | 1. Click the "Print" dropdown in the toolbar<br>2. Select a print option | N/A | Print preview or system print dialog opens with the current visible list data. | Untested |
| **POL_063** | Functional | P2 | Row-level Print link prints a single order | 1. Click the "Print" link in the Print column of a specific row | N/A | Print preview for that individual purchase order opens. Other orders are not included. | Untested |
| **POL_064** | Functional | P2 | Send dropdown shows available send options | 1. Click the "Send" dropdown arrow | N/A | A dropdown appears with send methods (e.g., email, fax). | Untested |
| **POL_065** | Functional | P2 | Email button opens compose dialog for selected order | 1. Select one order<br>2. Click "Email" | N/A | An email compose dialog opens pre-filled with the selected order's information. | Untested |
| **POL_066** | Functional | P2 | View History shows audit trail for selected order | 1. Select one order<br>2. Click "View History" | N/A | A history/audit panel opens showing creation, modifications, and status changes with timestamps and actor names. | Untested |
| **POL_067** | Functional | P2 | Barcode (Item) generates barcodes for selected order | 1. Select one order<br>2. Click "Barcode (Item)" | N/A | Barcodes for the item(s) in the selected order are generated and displayed or downloaded. | Untested |
| **POL_068** | Functional | P2 | Generate Other Slips dropdown lists available document types | 1. Click the "Generate Other Slips" dropdown arrow in the toolbar | N/A | A list of linked document types appears (e.g., Goods Receipt, Invoice). | Untested |
| **POL_069** | Functional | P2 | "View" button in Created Slip column opens the linked slip | 1. Click the orange "View" button on an eligible row (status "Đã hoàn tất") | N/A | The linked slip or related document detail opens correctly. | Untested |

---

## Edge Cases & Security

| ID | Category | Priority | Title | Steps | Test Data | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POL_070** | Edge Case | P2 | Select-all checkbox selects all rows on current page | 1. Click the header checkbox | N/A | All rows on the current page are checked. Bulk actions apply to all of them. | Untested |
| **POL_071** | Edge Case | P2 | Deselecting select-all unchecks all rows | 1. Click the header checkbox to select all<br>2. Click again to deselect | N/A | All row checkboxes are unchecked. | Untested |
| **POL_072** | Edge Case | P2 | Large dataset across many pages loads without freezing | 1. Set date range to a period with a high volume of orders | N/A | List loads within acceptable time (≤ 5 seconds). Pagination works correctly. No browser freeze or timeout. | Untested |
| **POL_073** | Edge Case | P2 | Very long Vendor Name is truncated gracefully | 1. View a row with an extremely long Customer/Vendor Name | N/A | Name is truncated with `...` in the cell. Full name is accessible in the detail view. Row layout is not broken. | Untested |
| **POL_074** | Edge Case | P2 | Total Purchase Order Amount with large values displays correctly | 1. View a row with a high Total Purchase Order Amount | Row: `25,610,000` | Amount is formatted with thousand separators and fits within the column without overflow. | Untested |
| **POL_075** | Security | P1 | User without create permission cannot open New(F2) form | 1. Log in as a read-only user<br>2. Click "New(F2)" | N/A | Button is disabled or an authorization error is shown. The create form does not open. | Untested |
| **POL_076** | Security | P1 | User without delete permission cannot delete records | 1. Log in as a read-only user<br>2. Select a row and click "Delete Selected" | N/A | "Delete Selected" is disabled or an authorization error is shown. No record is deleted. | Untested |
| **POL_077** | Security | P2 | User without edit permission cannot save changes in detail view | 1. Log in as a read-only user<br>2. Open an order detail<br>3. Attempt to modify and save | N/A | Save action is blocked. An authorization error is shown. No changes are persisted. | Untested |
| **POL_078** | Edge Case | P3 | Concurrent edit by two users triggers a conflict warning | 1. Open the same order in two browser sessions<br>2. User A edits and saves<br>3. User B attempts to save different changes | N/A | User B receives a conflict warning. No data is silently overwritten. | Untested |
| **POL_079** | Edge Case | P3 | Item with very long Spec Name does not break table layout | 1. View a row where Item Name [Spec Name] contains a very long product specification string | N/A | Cell truncates or wraps the text without breaking the row height or column alignment. Full spec is visible in detail view. | Untested |
