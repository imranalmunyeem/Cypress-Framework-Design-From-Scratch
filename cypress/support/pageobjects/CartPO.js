class CartPO{

    //............................Cart....................................//
    clickOnCart(){
        const cartButton = cy.get('.product-box-add-to-cart-button');
        cartButton.should('be.visible');
        cartButton.click();
    }

    clickOnShoppingCart(){
        const shoppingCart = cy.get('.cart-label');
        shoppingCart.should('be.visible');
        shoppingCart.click();
    }

    goToCart(){
        const goToCartLink = cy.get('https://demo.nopcommerce.com/cart')
        goToCartLink.click();
    }

    inputQty(){
        const qtyField = cy.get('#itemquantity11233');
        qtyField.should('be.visible');
        qtyField.clear();
        qtyField.type();
    }

    //..........................Wrap,Gift,coupon.......................//
    selectGiftWrappingNO(){
        const giftWrappingFieldNO = cy.get('#checkout_attribute_1');
        giftWrappingFieldNO.should('be.visible');
        giftWrappingFieldNO.select('Yes [+$10.00]').should('have.value',2)
    }

    selectGiftWrappingYES(){
        const giftWrappingFieldYES = cy.get('#checkout_attribute_1');
        giftWrappingFieldYES.should('be.visible');
        giftWrappingFieldYES.select('No').should('have.value',1)
    }

    inputDiscountCode(discountcode){
        const discountCodefield = cy.get('#discountcouponcode');
        discountCodefield.should('be.visible');
        discountCodefield.clear();
        discountCodefield.type(discountcode);
        
    }

    clickOnApplyCoupon(){
        const couponButton = cy.get('#applydiscountcouponcode');
        couponButton.should('be.visible');
        couponButton.click();
    }

    inputGiftCard(giftcard){
        const giftcardField = cy.get('#giftcardcouponcode');
        giftcardField.should('be.visible');
        giftcardField.clear();
        giftcardField.type(giftcard);
    }

    clickOnAddGiftCard(){
        const giftcardButton = cy.get('#applygiftcardcouponcode');
        giftcardButton.should('be.visible');
        giftcardButton.click();
    };

    //........................AgreeTerm.............//
    checkAgreeTermBox(){
        const agreeTermBox = cy.get('#termsofservice');
        agreeTermBox.should('be.visible');
        agreeTermBox.should('be.checked');
    }

    //.................chekout......................//
    clickOnChekout(){
        const checkoutButton = cy.get('#checkout');
        checkoutButton.should('be.visible');
        checkoutButton.click();
    }

    //........Update,Continue,Estimate Shopping......//

}
export default CartPO;