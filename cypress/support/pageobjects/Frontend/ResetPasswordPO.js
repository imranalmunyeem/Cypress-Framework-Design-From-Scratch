class ResetPasswordPO{
     //---------------------------------------Reset Password Fields Verification----------------------------------------//
    verifyHeaderTextField(){
        const headerTextField = cy.get('h1');
        headerTextField.should('be.visible');
        headerTextField.should('contain','Password recovery');
    }
     
    verifyEmailField(){
        const emailField = cy.get('label');
        emailField.should('be.visible');
        emailField.should('contain','Your email address:');
    }

    verifyRecoverButtonText(){
        const reoverButtonTextField = cy.get('.buttons > .button-1');
        reoverButtonTextField.should('be.visible');
        reoverButtonTextField.should('contain','Recover');
    }
  //---------------------------------------Required(*) Verification----------------------------------------//
  verifyRequiredEmailSign(){
      const requiredEmailSign = cy.get('.required');
      requiredEmailSign.should('be.visible');
      requiredEmailSign.should('contain','*');
  }
  
  //---------------------------------------Reset feature Verification----------------------------------------//
  inputResetEmail(email){
      const resetEmailField = cy.get('#Email');
      resetEmailField.should('be.visible');
      resetEmailField.clear();
      resetEmailField.type(email);
      return this;
  }

  clickOnRecover(){
      const recoverButton = cy.get('.buttons > .button-1');
      recoverButton.should('be.visible');
      recoverButton.click();
  }

  verifyNotFoundEmailAlert(){
      const notFoundEmailAlert = cy.get('.content');
      notFoundEmailAlert.should('be.visible');
      notFoundEmailAlert.should('contain','Email not found.');
  }

  verifyEmptyEmailFieldAlert(){
      const emptyEmailFieldAlert = cy.get('#Email-error');
      emptyEmailFieldAlert.should('be.visible');
      emptyEmailFieldAlert.should('contain','Enter your email');
  }
}
export default ResetPasswordPO;