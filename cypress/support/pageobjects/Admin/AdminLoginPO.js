class AdminLoginPO{
inputEmail(email){
    const adminEmail = cy.get('#Email');
    adminEmail.should('be.visible');
    adminEmail.clear();
    adminEmail.type(email);
 }

inputPassword(password){
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

clickOnLogout(){
    const logout = cy.get('.navbar-nav > :nth-child(3) > .nav-link');
    logout.click();
}
}
export default AdminLoginPO;