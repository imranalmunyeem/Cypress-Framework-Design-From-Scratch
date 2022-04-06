///<reference types ='cypress'/>

import LoginPO from "../../support/pageobjects/Frontend/LoginPO";

describe('Login', ()=>{

  const loginpo = new LoginPO();

  before(function(){
    cy.fixture('/frontend/userLoginData.json').then(function(data){
        globalThis.data = data;
    });
});

  beforeEach('Will run before each it block',()=>{
    cy.visit(Cypress.env('loginUrl'));
});

  //---------------------------------------URL & Title Verification----------------------------------------//
  context('Url and title verification',()=>{
    it('Verify the title of the login page',()=>{
     cy.title().should('eq', 'nopCommerce demo store. Login');
  });
  
    it('Verify URL of the login page',()=>{
     cy.url().should('include', 'login');
     });
  });
  
  //---------------------------------------Login Field Verification----------------------------------------//
  context('Login fields verification',()=>{
    it('Email and Password fields should contain "Email and Password" keywords',()=>{
      loginpo.verifyEmailField();
      loginpo.verifyPasswordField();
    });

    it('Login button should contain "Login" keywords',()=>{
      loginpo.verifyLoginButtonText();
    });
  });

  //---------------------------------------Login Verification----------------------------------------//
  context('Login feature verification',()=>{
    it('Login should be successful with valid credentials', ()=>{
      loginpo.inputEmail(data.email);
      loginpo.inputPassword(data.password);
      loginpo.clickOnLogin();
    });

    it('Login should not be successful with invalid credentials', ()=>{
      loginpo.inputEmail(data.invalid_email);
      loginpo.inputPassword(data.invalid_password);
      loginpo.clickOnLogin();
        cy.get('#Email-error').should('contain','Wrong email');
      });

    it('Login should not be successful with empty field', ()=>{
      loginpo.clickOnLogin();
      });
  });

  //------------------------------------------Logout Verification ------------------------------------//
  context('Logout feature verification',()=>{
    it('Logging out should be successful after clicking on it', ()=>{
      loginpo.inputEmail(data.email);
      loginpo.inputPassword(data.password);
      loginpo.clickOnLogin();
      loginpo.clickOnLogout();
      loginpo.verifyLogout();
    });
  });
});