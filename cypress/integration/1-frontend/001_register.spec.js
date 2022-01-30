import RegisterPO from '../../support/pageobjects/RegisterPO';
/// <reference types="cypress" />

describe('Registration', () => {
  it('Navigate to Registration Page', ()=>{
       cy.visit(Cypress.env('registrationUrl'));
       cy.url().should('include','register');
  })

  it('Input Fields', ()=>{
    const registerpo = new RegisterPO();
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
  })

  })

