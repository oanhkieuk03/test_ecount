# Manual Test Cases for Ecount Login Page

| ID | Category | Priority | Title | Steps | Tests data | Expected result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC_001** | Functional | P0 | Successful login with valid credentials | 1. Access https://login.ecount.com/<br>2. Enter valid Company Code<br>3. Enter valid User ID<br>4. Enter valid Password<br>5. Click "Login" button | Code: 913356<br>ID: NANCY<br>Pass: @Valid123 | User logs in successfully and is redirected to the Home/Dashboard page. | Untested |
| **TC_002** | Functional | P0 | Login with invalid Company Code | 1. Enter an incorrect Company Code<br>2. Enter valid ID and Password<br>3. Click "Login" | Code: 000000<br>ID: NANCY<br>Pass: @Valid123 | System displays error: "Company code does not exist" (or similar). | Untested |
| **TC_003** | Functional | P0 | Login with invalid User ID | 1. Enter valid Company Code<br>2. Enter an incorrect User ID<br>3. Enter valid Password<br>4. Click "Login" | Code: 913356<br>ID: WrongUser<br>Pass: @Valid123 | System displays error: "Invalid ID or Password". | Untested |
| **TC_004** | Functional | P0 | Login with invalid Password | 1. Enter valid Company Code and User ID<br>2. Enter an incorrect Password<br>3. Click "Login" | Code: 913356<br>ID: NANCY<br>Pass: WrongPass123 | System displays error: "Invalid ID or Password". | Untested |
| **TC_005** | Validation | P1 | Login with empty fields | 1. Leave Company Code, ID, and Password empty<br>2. Click "Login" | N/A | System highlights empty fields and prompts: "Please enter [Field Name]". | Untested |
| **TC_006** | UI/UX | P2 | Password visibility/masking | 1. Enter characters into the Password field | Pass: 123456 | Password characters are masked (shown as dots or asterisks). | Untested |
| **TC_007** | Functional | P1 | "Save [Code, ID]" functionality | 1. Enter Code and ID<br>2. Check "Save [Code, ID]"<br>3. Login successfully<br>4. Logout and return to login page | Code: 913356<br>ID: NANCY | Company Code and ID are pre-filled automatically. | Untested |
| **TC_008** | Functional | P2 | "Clock In" checkbox functionality | 1. Enter valid credentials<br>2. Check "Clock In"<br>3. Click "Login" | N/A | User logs in and the system records the "Clock In" time automatically. | Untested |
| **TC_009** | UI/UX | P2 | Switch to QR Login tab | 1. Click on the "QR Login" tab | N/A | The UI switches to show a QR code for mobile app login. | Untested |
| **TC_010** | Functional | P1 | Forgot login information link | 1. Click on "Forgot your login information?" link | N/A | User is redirected to the "Search Company Code / ID / Password" page. | Untested |
| **TC_011** | UI/UX | P2 | Language selection functionality | 1. Click the language dropdown (e.g., United States)<br>2. Select "Tiếng Việt" | Language: Tiếng Việt | All UI text (labels, buttons) switches to Vietnamese. | Untested |
| **TC_012** | Security | P1 | Max login attempts / Lockout | 1. Enter wrong password 5 times consecutively | N/A | Account is temporarily locked or a CAPTCHA appears for security. | Untested |
| **TC_013** | Edge Case | P2 | Login with Special Characters | 1. Enter ID/Password containing special characters | ID: admin'!@# | System handles input securely without crashing or SQL errors. | Untested |
| **TC_014** | Edge Case | P3 | Browser "Back" button after logout | 1. Login successfully<br>2. Logout<br>3. Click browser "Back" button | N/A | User should NOT be able to access the dashboard; should stay on login page. | Untested |
| **TC_015** | UI/UX | P3 | Responsive layout check | 1. Resize browser window to mobile width | N/A | Login box and elements adjust properly to fit the screen (Responsive). | Untested |
