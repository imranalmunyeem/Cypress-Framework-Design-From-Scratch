class AdminLogin{
inputEmail(){
    const adminEmail = cy.get('#Email');
    adminEmail.should('be.visible');
    adminEmail.clear();
    adminEmail.type(email);
}

inputPassword(){
    const adminPassword = cy.get('#Password');
    adminPassword.should('be.visible');
    adminPassword.clear();
    adminPassword.type(password);
}

clickOnLogin(){
    const loginButton = cy.get('.button-1');
    loginButton.should('be.visible');
    loginButton.click();
}
}
export default AdminLogin;