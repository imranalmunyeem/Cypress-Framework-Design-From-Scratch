///<reference types = 'cypress'/>

import SearchPO from "../../support/pageobjects/Frontend/SearchPO";
import CartPO from "../../support/pageobjects/Frontend/CartPO";



describe('Cart',()=>{
    it('Navigate to the website',()=>{
        cy.visit('/');
    })

    it('Search for product',()=>{
        const searchpo = new SearchPO();
        const inputProduct = searchpo.searchProduct('Fahrenheit 451 by Ray Bradbury');
        searchpo.clickOnSearch();
    })

    it('Add to cart',()=>{
        const cartpo = new CartPO();
        cartpo.clickOnCart();
        cartpo.clickOnShoppingCart();
        //cartpo.goToCart();
        cartpo.inputQty('2');
        cartpo.selectGiftWrappingNO();
        //cartpo.selectGiftWrappingYES();
        cartpo.inputDiscountCode('1234');
        cartpo.clickOnApplyCoupon();
        cartpo.inputGiftCard('test');
        cartpo.clickOnAddGiftCard();
        cartpo.checkAgreeTermBox();
        cartpo.clickOnChekout();
    })

 
})