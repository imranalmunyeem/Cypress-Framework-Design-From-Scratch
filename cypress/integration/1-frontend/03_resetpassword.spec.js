///<reference types = 'cypress'/>

import ResetPasswordPO from "../../support/pageobjects/Frontend/ResetPasswordPO";

 describe('Reset Password Page',()=>{
    
    const resetpasswordpo = new ResetPasswordPO();

    beforeEach('Will run before each it block',()=>{
        cy.visit(Cypress.env('resetLoginPassword'));
    });
    
      //---------------------------------------URL & Title Verification----------------------------------------//
      context('Url and title verification',()=>{
        it('Verify the title of the reset password page',()=>{
         cy.title().should('eq', 'nopCommerce demo store. Password Recovery');
      });
      
        it('Verify the URL of the reset password page',()=>{
         cy.url().should('include', 'passwordrecovery');
         });
      });

        //---------------------------------------Reset fields Verification----------------------------------------//
  context('Reset password fields verification',()=>{
    it('Header text field should contain "Password recovery" keyword',()=>{
      resetpasswordpo.verifyHeaderTextField();
    });

    it('Email field should contain "Your email address:" keywords',()=>{
      resetpasswordpo.verifyEmailField();
    });

    it('Recover button should contain "Recover" keyword',()=>{
        resetpasswordpo.verifyRecoverButtonText();
      });
  });

  //---------------------------------------Required(*) Verification----------------------------------------//
context('Required field verification',()=>{
    it('Required fields should contain "Required(*) signs"',()=>{
      resetpasswordpo.verifyRequiredEmailSign();
    });
  });

   //---------------------------------------Reset feature Verification----------------------------------------//
context('Reset feature verification',()=>{
    it('Resetting should be successful with existing email address"',()=>{
      resetpasswordpo.inputResetEmail('nforget32@gmail.com');
      resetpasswordpo.clickOnRecover();
    });

    it('Resetting should not be successful with non-existing email address"',()=>{
        resetpasswordpo.inputResetEmail('nforget32111@gmail.com');
        resetpasswordpo.clickOnRecover();
        resetpasswordpo.verifyNotFoundEmailAlert();
      });

    it.only('Resetting should not be successful with empty email field submission"',()=>{
        resetpasswordpo.clickOnRecover();
        resetpasswordpo.verifyEmptyEmailFieldAlert();
      });
  }); 
 })