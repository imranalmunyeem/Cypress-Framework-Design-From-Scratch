///<reference types ='cypress'/>

describe('Login', ()=>{
    it('Login should be successful with valid credentials', ()=>{
      cy.login('nforget32@gmail.com', '123456');   //running from custom command
      cy.get('.topic-block-title > h2').should('contain','Welcome to our store'); //Login Confirmation
      cy.logout();
    })

    it('Login should not be successful with invalid credentials', ()=>{
        cy.login('wrongemail', 'wrongpassword');  //running from custom command
        cy.get('#Email-error').should('contain','Wrong email');
      })

    it('Login should not be successful with empty field', ()=>{
        cy.visit(Cypress.env('loginUrl'));
        cy.get('form > .buttons > .button-1').click();
        cy.get('#Email-error').should('contain','Please enter your email');
      })
  

})