class WishPO{
    clickOnWishButton(){
        const wishButton = cy.get('.add-to-wishlist-button');
        wishButton.click();
    }
}
export default WishPO;