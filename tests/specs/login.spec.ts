// I. User can login with correct credentials
// 1. Open Login Page
// 2. Fill Username field with correct username
// 3. Fill Password field with correct password
// 4. Click Sign In button
// 5. Assert that User is logged in and Patient Listing page is displayed.

import { loginPage } from "../pageobjects/login.page";
import { patientListPage } from '../pageobjects/patient.list.page'

describe("Login Page logged in", () => {
    it("should login with valid credentials", async () => {
        await loginPage.open();
        await loginPage.inputUsername.setValue("hr.doctor@hospitalrun.io");
        await loginPage.inputPassword.setValue("HRt3st12");
        await loginPage.btnLgn.click();
        await expect(patientListPage.panelHeading).toBeExisting();
        await expect(patientListPage.panelHeading).toHaveTextContaining(
            'Patient Listing');
    });
});
