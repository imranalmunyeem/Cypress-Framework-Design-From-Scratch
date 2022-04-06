///<reference types = 'cypress'/>

import AdminLoginPO from "../../support/pageobjects/Admin/AdminLoginPO";


describe('Admin Login Area',()=>{
    const adminloginpo = new AdminLoginPO();

    before(function(){
        cy.fixture('/admin/adminLoginData.json').then(function(data){
            globalThis.data = data;
        });
    });

    beforeEach('Run before all it block',()=>{
        cy.visit(Cypress.env('adminLoginUrl'));
    });

    it('Login should be successful with valid credentials',()=>{   
        adminloginpo.inputEmail(data.email);
        adminloginpo.inputPassword(data.password);
        adminloginpo.clickOnLogin();
        adminloginpo.clickOnLogout();
    })

    it('Login should not be successful with invalid credentials',()=>{
        adminloginpo.inputEmail(data.invalid_email);
        adminloginpo.inputPassword(data.password);
        adminloginpo.clickOnLogin();
        const loginMessage = cy.get('.message-error');
        loginMessage.should('contain','Login was unsuccessful. Please correct the errors and try again.No customer account found');
    })

    it('Login should not be successful without credentials',()=>{
        cy.get('#Email').clear();
        cy.get('#Password').clear();
        adminloginpo.clickOnLogin();
        const emptyInputErrorMessage = cy.get('#Email-error');
        emptyInputErrorMessage.should('contain','Please enter your email');
    })

})
