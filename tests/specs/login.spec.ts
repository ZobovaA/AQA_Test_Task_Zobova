// I. User can login with correct credentials
// 1. Open Login Page
// 2. Fill Username field with correct username
// 3. Fill Password field with correct password
// 4. Click Sign In button
// 5. Assert that User is logged in and Patient Listing page is displayed.

import { loginPage } from "../pageobjects/login.page";
import { patientListPage } from '../pageobjects/patient.list.page';
import { mainMenuPage } from '../pageobjects/main.menu';



describe("Login Page logged in", () => {
    it("should login with valid credentials", async () => {
        await loginPage.open();
        await loginPage.loginFn()
        await loginPage.btnLgn.click();
        await expect(patientListPage.panelHeading).toBeExisting();
        await expect(patientListPage.panelHeading).toHaveTextContaining(
            'Patient Listing');

    });

   
      it("should not login with invalid credentials", async () => {
        await mainMenuPage.logoutFn();
        await loginPage.open();
        await loginPage.loginInvalidFn()
        await loginPage.btnLgn.click();
        await expect(loginPage.formError).toBeExisting();
        await expect(loginPage.formError).toHaveTextContaining(
            'Username or password is incorrect.');
    
    });
});
