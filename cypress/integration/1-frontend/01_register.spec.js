/// <reference types="cypress" />

import RegisterPO from "../../support/pageobjects/Frontend/RegisterPO";

describe('Registration', () => {
  const registerpo = new RegisterPO();

  beforeEach('Will run before each it block',()=>{
    cy.visit(Cypress.env('registrationUrl'));
});

//---------------------------------------URL & Title Verification----------------------------------------//
context('Url and title verification',()=>{
  it('Verify the title of the add catrgory page',()=>{
   cy.title().should('eq', 'nopCommerce demo store. Register');
});

  it('Verify URL of the add category page',()=>{
   cy.url().should('include', 'register');
   });
});

//---------------------------------------Input Fields Verification----------------------------------------//
context('Header, Paragraph, Input Fields',()=>{
  it('Header must contain "Register" keyword and header paragraph should contain "Your Personal Details"',()=>{
   registerpo.verifyHeaderText();
   registerpo.verifyHeaderParagraph();
});

   it('Gender, Male, Female fields should contain Gender, Male, Female keywords',()=>{
    registerpo.verifyGenderField();
    registerpo.verifymaleField();
    registerpo.verifyfemaleField();
   });
  
   it('First name and Last name fields should contain "First name and Last name" keywords',()=>{
      registerpo.verifyFistNameField();
      registerpo.verifyLastNameField();
    });

    it('Date of birth field should contain "Date of birth" keywords',()=>{
      registerpo.verifyDateofbirthField();
    });
    
    it('Email field should contain "Email" keywords',()=>{
      registerpo.verifyEmailField();
    });
    
    it('Password header, Password, Confirm password fields should contain "Your Password, Password, Confirm password" keywords',()=>{
      registerpo.verifyPasswordHeaderField();
      registerpo.verifyPasswordField();
      registerpo.verifyConfirmPasswordField();
    });

    it('Register button should contain "Register" keywords',()=>{
      registerpo.verifyRegisterButtonText();
    });
    
});

//---------------------------------------Required(*) Verification----------------------------------------//
context('Required fields verification',()=>{
  it('Required fields should contain "Required(*) signs"',()=>{
    registerpo.verifyRequiredFirstNameField();
    registerpo.verifyRequiredLastNameField();
    registerpo.verifyRequiredEmailField();
    registerpo.verifyRequiredPasswordField();
    registerpo.verifyRequiredConfirmPasswordField();
  });
});  

//---------------------------------------Registration-----------------------------------------------------//
  context('Registration Page',()=>{
   it('Registration should be successful with valid inputs', ()=>{
      registerpo.checkMale();
      //registerpo.checkFemale();
      registerpo.inputFirstName('Automation');
      registerpo.inputLasttName('Tester');
      registerpo.inputDateOfBrith('25', '12', '1995');
      registerpo.inputEmail('nforget32@gmail.com')
      registerpo.inputCompany('Test Company');
      registerpo.uncheckNewsletter();
      //registerpo.checkNewsletter();
      registerpo.inputPassword('123456', '123456');
      registerpo.clickOnRegister();

      const successMessage = cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.result');
      successMessage.should('contain','Your registration completed');
  });

    it('Registration should not be successful with duplicate email address', ()=>{
       registerpo.checkMale();
       //registerpo.checkFemale();
       registerpo.inputFirstName('Automation');
       registerpo.inputLasttName('Tester');
       registerpo.inputDateOfBrith('25', '12', '1995');
       registerpo.inputEmail('nforget32@gmail.com')
       registerpo.inputCompany('Test Company');
       registerpo.uncheckNewsletter();
       //registerpo.checkNewsletter();
       registerpo.inputPassword('123456', '123456');
       registerpo.clickOnRegister();
       registerpo.verifyDuplicateEmailAlert();
   });

   it('Registration should not be successful with invalid email', ()=>{
      registerpo.checkMale();
      //registerpo.checkFemale();
      registerpo.inputFirstName('Automation');
      registerpo.inputLasttName('Tester');
      registerpo.inputDateOfBrith('25', '12', '1995');
      registerpo.inputEmail('!@#$%@gmail.com')
      registerpo.inputCompany('Test Company');
      registerpo.uncheckNewsletter();
      //registerpo.checkNewsletter();
      registerpo.inputPassword('123456', '123456');
      registerpo.clickOnRegister();
      registerpo.verifyInvalidEmailAlert();

  });

  it('Registration should not be successful with empty input fields', ()=>{
    registerpo.clickOnRegister();
    registerpo.verifyEmptyInputFieldsAlert();

});

   it('Registration should not be successful with unmatched passwords', ()=>{
      registerpo.checkMale();
      //registerpo.checkFemale();
      registerpo.inputFirstName('Automation');
      registerpo.inputLasttName('Tester');
      registerpo.inputDateOfBrith('25', '12', '1995');
      registerpo.inputEmail('!@#$%@gmail.com')
      registerpo.inputCompany('Test Company');
      registerpo.uncheckNewsletter();
      //registerpo.checkNewsletter();
      registerpo.inputPassword('123456', '12345678');
      registerpo.clickOnRegister();
      registerpo.verifyUnmatchedPasswordAlert();

  });

});

});

