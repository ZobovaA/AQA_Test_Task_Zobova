const Page =require('./page');

class Login extends Page {
    get btnLgn () { return $('.btn-lg') }
    get inputUsername () { return $('#identification') }
    get inputPassword () { return $('#password') }
    open (path: string) {
        return super.open('login')
    }
}


