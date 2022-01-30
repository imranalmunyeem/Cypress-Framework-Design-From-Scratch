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
    registerpo.inputFirstName('Automation');
    registerpo.inputLasttName('Tester');
    registerpo.inputDateOfBrith('25', '12', '1995');
    registerpo.inputEmail('automation@tester.com')
    registerpo.inputCompany('Test Company');
    registerpo.uncheckNewsletter();
    registerpo.inputPassword('test12345', 'test12345');
    //registerpo.clickOnRegister();
  })

  })

