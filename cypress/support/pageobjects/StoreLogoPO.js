class StoreLogoPO{
    clickOnLogo(){
        const nopCommerceLogo = cy.get('.header-logo > a > img');
        nopCommerceLogo.should('be.visible');
        nopCommerceLogo.click();
    }

    verifyLogo(){
        const homePageText = cy.get('.topic-block-title > h2');
        homePageText.should('be.visible');
        homePageText.should('contain','Welcome to our store');       
    }
}
export default StoreLogoPO;