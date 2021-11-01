import { Page } from "./page";

class LoginPage extends Page {
    get btnLgn() {
        return $(".btn-lg");
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
}

export const loginPage = new LoginPage();
