class WishPO{
    clickOnWishButton(){
        const wishButton = cy.get('.add-to-wishlist-button');
        wishButton.click();
    }

    verifyWishSuccessAlert(){
        const wishSuccessAlert = cy.get('.content');
        wishSuccessAlert.should('be.visible');
        wishSuccessAlert.should('contain','The product has been added to your ');
    }
}
export default WishPO;