class LoginPO{
 //---------------------------------------Login Field Verification----------------------------------------//
    verifyEmailField(){
        const emailField = cy.get(':nth-child(1) > label');
        emailField.should('be.visible');
        emailField.should('contain','Email:');
    }

    verifyPasswordField(){
        const passwordField = cy.get(':nth-child(2) > label');
        passwordField.should('be.visible');
        passwordField.should('contain','Password:');
    }

    verifyLoginButtonText(){
        const loginButtonTextField = cy.get('form > .buttons > .button-1');
        loginButtonTextField.should('be.visible');
        loginButtonTextField.should('contain','Log in');
    }
  //---------------------------------------Login Verification----------------------------------------//    
    inputEmail(email){
        const emailField = cy.get ('#Email');
        emailField.should('be.visible');
        emailField.clear();
        emailField.type(email);
        return this;
    }

    inputPassword(password){
        const passwordField = cy.get ('#Password');
        passwordField.should('be.visible');
        passwordField.clear();
        passwordField.type(password);
        return this;
    }

    clickOnLogin(){
        const loginButton = cy.get('form > .buttons > .button-1');
        loginButton.should('be.visible');
        loginButton.click();
    }

//------------------------------------------Logout Verification ------------------------------------//
    clickOnLogout(){
        const clickOnLogout = cy.get('.ico-logout');
        clickOnLogout.should('be.visible');
        clickOnLogout.click();
    }

    verifyLogout(){
        const logoutVerification = cy.get('.ico-login');
        logoutVerification.should('contain','Log in');
    }
}
export default LoginPO;