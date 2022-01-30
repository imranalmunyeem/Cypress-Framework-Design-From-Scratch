///<reference types ='cypress'/>

describe('Login', ()=>{
    it('Login should be successful with valid credentials', ()=>{
      cy.login('tester@mailinator.com', 'test12345');  
    })

    it('Login should not be successful with invalid credentials', ()=>{
        cy.login();  
      })
  

})