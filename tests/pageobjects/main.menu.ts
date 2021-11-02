// 1. Добавить пейдж мейн меню
// 2. В нем добавить элементы - лого, кнопку сеттингс и логаут меню айтем
// 3. В него добавить функцию  logout.
// В ней - кликнуть по сеттингу и потом по меню логаут
// 5. Добавить в начале меню if.
// В нем если мы видим лого (isExisting метод) -  тогда делать логаут.
// 6. Добавить mainMenu.logout() и в первый тестю Прогнать тесты.
// 7. Добавить beforeEach в котором всегда делать логаут перед тестом.

class MainMenuPage {


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
