Cypress.Commands.add('login', (email, password) => {
    cy.visit(Cypress.env('loginUrl'));
    cy.url().should('include','login');

    const inputEmail = cy.get (#Email);
    inputEmail.clear();
    inputEmail.type(email);

    const inputPassword = cy.get (#Password);
    inputPassword.clear();
    inputPassword.type(password);

    return this;

})
//
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
