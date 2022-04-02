class ShippingAndReturnsPO{
    verifyShippingPageHeaderText(){
        const shippingPageHeaderText = cy.get('h1');
        shippingPageHeaderText.should('be.visible');
        shippingPageHeaderText.should('contain','Shipping & returns');
    }

    verifyShippingPageBodyText(){
        const shippingPageBodyText = cy.get('p');
        shippingPageBodyText.should('be.visible');
        shippingPageBodyText.should('contain','Put your shipping & returns information here. You can edit this in the admin site.');
    }
}
export default ShippingAndReturnsPO;