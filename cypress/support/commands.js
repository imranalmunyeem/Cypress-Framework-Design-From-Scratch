Cypress.Commands.add('login', (email, password) => {
    cy.visit(Cypress.env('loginUrl'));
    cy.url().should('include','login');

    const inputEmail = cy.get ('#Email');
    inputEmail.should('be.visible');
    inputEmail.clear();
    inputEmail.type(email);

    const inputPassword = cy.get ('#Password');
    inputPassword.should('be.visible');
    inputPassword.clear();
    inputPassword.type(password);

    const loginButton = cy.get('form > .buttons > .button-1');
    loginButton.should('be.visible');
    loginButton.click();

})

Cypress.Commands.add('logout', ()=>{
    const clickOnLogout = cy.get('.ico-logout');
    clickOnLogout.should('be.visible');
    clickOnLogout.click();
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
