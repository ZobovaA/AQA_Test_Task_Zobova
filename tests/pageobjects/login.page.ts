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

    
    open() {
        return super.open("login");
    }
}

export const loginPage = new LoginPage()