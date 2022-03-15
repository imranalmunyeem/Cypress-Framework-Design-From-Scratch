///<reference types = 'cypress'/>
describe('Admin Login Area',()=>{

    it('Login should be successful with valid credentials',()=>{
        cy.adminLogin('admin@yourstore.com', 'admin');
        cy.adminLogout();
    })

    it('Login should not be successful with invalid credentials',()=>{
        cy.adminLogin('invalid@yourstore.com', 'invalid');
        const loginMessage = cy.get('.message-error');
        loginMessage.should('contain','Login was unsuccessful. Please correct the errors and try again.No customer account found');
    })

})