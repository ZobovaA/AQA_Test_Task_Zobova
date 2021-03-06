import { Page } from "./page";
import { patientListPage } from "../pageobjects/patient.list.page";

class LoginPage extends Page {
    get btnLgn() {
        return $(".btn-lg");
    }

    get logoSidebar() {
        return $(".sidebar-nav-logo");
    }

    get logoSignin() {
        return $(".signin-logo");
    }
    
    get inputUsername() {
        return $("#identification");
    }
    get inputPassword() {
        return $("#password");
    }

    get formError(){
        return $('.form-signin-alert');
    }

    open() {
        return super.open("login");
    }

    async loginFn() {
        await this.inputUsername.setValue("hr.doctor@hospitalrun.io");
        await this.inputPassword.setValue("HRt3st12");
        await loginPage.btnLgn.click();
        await expect(patientListPage.panelHeading).toBeExisting();
    }

    async loginInvalidFn() {
        await this.inputUsername.setValue("test");
        await this.inputPassword.setValue("test");
    }
}

export const loginPage = new LoginPage();
