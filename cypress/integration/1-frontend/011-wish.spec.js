///<reference types ='cypress'/>

import SearchPO from "../../support/pageobjects/SearchPO";
import WishPO from "../../support/pageobjects/WishPO";

describe('Wish Feature', ()=>{
    it('Navigate to the website', ()=>{
        cy.visit('/');

    })

    it('Search a Product',()=>{
        const searchpo = new SearchPO();
        searchpo.searchProduct('Build your own computer');
        searchpo.clickOnSearch();

    })

    it('Add to wishlist',()=>{
        const wishpo = new WishPO();
        wishpo.clickOnWishButton();
    })
})