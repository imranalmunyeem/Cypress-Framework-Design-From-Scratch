///<reference types ='cypress'/>
//.....................................Frontend Login Command.......................................................//
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


//........................................Frontend Logout Command.......................................................//
Cypress.Commands.add('logout', ()=>{
    const clickOnLogout = cy.get('.ico-logout');
    clickOnLogout.should('be.visible');
    clickOnLogout.click();
})


//.....................................Product Number Counter Command.......................................//
Cypress.Commands.add('productcounter',()=>{
cy.get('.item-grid').find('.product-item').then(list => {
    const productCount = Cypress.$('.product-item').length;
    expect(list).to.have.length(productCount);
   });
});

//-----------------------------------------------ADMIN-----------------------------------------------------//
//--------------------------------------------Admin Login Command-----------------------------------------//
Cypress.Commands.add('loginToAdmin',(email,password)=>{
    cy.visit(Cypress.env('adminLoginUrl'));
    cy.url().should('include','login');
    const adminLogin = ('#Email');
    adminLogin.should('be.visible');
    adminLogin.clear();
    adminLogin.type(email);

    const adminPassword = ('#Password');
    adminPassword.should('be.visible');
    adminPassword.clear();
    adminPassword.type(password);
})