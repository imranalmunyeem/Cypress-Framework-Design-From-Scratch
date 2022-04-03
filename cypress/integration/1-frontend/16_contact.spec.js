///<reference types ='cypress'/>

import ContactPO from "../../support/pageobjects/Frontend/ContactPO";

describe('Login', ()=>{

  const contactpo = new ContactPO();

  beforeEach('Will run before each it block',()=>{
    cy.visit(Cypress.env('contactusUrl'));
});

  //---------------------------------------URL & Title Verification----------------------------------------//
  context('Url and title verification',()=>{
    it('Verify the title of the contact page',()=>{
     cy.title().should('eq', 'nopCommerce demo store. Contact Us');
  });
  
    it('Verify URL of the contact page',()=>{
     cy.url().should('include', '/contactus');
     });
  });
  
  //---------------------------------------Contact Field Verification----------------------------------------//
  context('Contact fields verification',()=>{
    it('Your name field should contain "your name" keywords',()=>{
      contactpo.verifyYourNameField();
    });

    it('Your email field should contain "your email" keywords',()=>{
        contactpo.verifyYourEmailField();
      });

    it('Enquiry fields should contain "Enquiry" keywords',()=>{
        contactpo.verifyEnquiryField();
      });  

    it('Submit button should contain "Submit" keyword',()=>{
      contactpo.verifySubmitButtonText();
    });
  });

  //---------------------------------------Required(*) Verification----------------------------------------//
context('Required fields verification',()=>{
    it('Required fields should contain "Required(*) signs"',()=>{
      contactpo.verifyRequiredYourNameField();
      contactpo.verifyRequiredEmailField();
      contactpo.verifyRequiredEnquiryField();
    });
  }); 

  //---------------------------------------Contact Verification----------------------------------------//
  context('Contact feature verification',()=>{
    it('Contact form should be submitted successfully with valid inputs', ()=>{
      contactpo.inputName('Tester');
      contactpo.inputEmail('nforget32@gmail.com');
      contactpo.inputEnquiry('Test Purposes');
      contactpo.clickOnSubmit();
    });

    it('Contact form should not be submitted successfully with invalid email address', ()=>{
        contactpo.inputName('Tester');
        contactpo.inputEmail('!@#$@gmail.com');
        contactpo.inputEnquiry('Test Purposes');
        contactpo.clickOnSubmit();
        contactpo.verifyInvalidEmailAlert();
      });

    it('Contact form should not be submitted successfully with empty input field', ()=>{
        contactpo.clickOnSubmit();
        contactpo.verifyEmptyInputFieldsAlert();
      });
  });
});