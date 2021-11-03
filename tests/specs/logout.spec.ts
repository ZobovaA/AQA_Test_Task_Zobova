// III. User is able to logout
// 1. Repeat steps from first Test Case
// 2. Click to Cogwheel icon near logo
// 3. Click to Logout link
// 4. Assert that User is logged out and Login Page is displayed

import { loginPage } from "../pageobjects/login.page";
import { patientListPage } from "../pageobjects/patient.list.page";
import { mainMenuPage } from "../pageobjects/main.menu";

describe("User is able to logout ", () => {
    it("logged in with valid credentionals", async () => {
        await loginPage.open();
        await loginPage.loginFn();
        await expect(patientListPage.panelHeading).toHaveTextContaining(
            "Patient Listing"
        );
    });

    it("logged out after logged in", async () => {
        await mainMenuPage.logoutFn();
        await expect(loginPage.inputUsername).toBeExisting();
        await expect(loginPage.inputPassword).toBeExisting();
        await expect(loginPage.logoSignin).toBeExisting();
        
    });
});
