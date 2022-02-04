///<reference types = 'cypress'/>

describe('Admin Login Area',()=>{
    it('Login should be successful with valid credentials',()=>{
        cy.loginToAdmin('admin@yourstore.com', 'admin');
    })
})