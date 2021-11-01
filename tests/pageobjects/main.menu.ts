// 1. Добавить пейдж мейн меню
// 2. В нем добавить элементы - лого, кнопку сеттингс и логаут меню айтем
// 3. В него добавить функцию  logout.
// В ней - кликнуть по сеттингу и потом по меню логаут

class MainMenuPage {
    get logo() {
        return $(".sidebar-nav-logo");
    }

    get settingsBtn() {
        return $(".settings-trigger");
    }

    get logout() {
        return $(".logout");
    }

    async logoutFn() {
        await this.settingsBtn.click();
        await this.logout.click();
    }
}

export const mainMenuPage = new MainMenuPage();
