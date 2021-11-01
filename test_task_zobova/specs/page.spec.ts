const LoginPage = require('../pageobjects/LoginPage');


describe('Login Page logged in', () => {
    it('should login with valid credentials', async () => {
        await Login.open()
        await Login.inputUsername.setValue('hr.doctor@hospitalrun.io');
        await Login.inputPassword.setValue('HRt3st12');
        await Login.btnLgn.click( );
               

     
    })

})


