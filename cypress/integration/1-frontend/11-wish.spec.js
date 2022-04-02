///<reference types ='cypress'/>

import SearchPO from "../../support/pageobjects/Frontend/SearchPO";
import WishPO from "../../support/pageobjects/Frontend/WishPO";

describe('Wish Feature', ()=>{

    const searchpo = new SearchPO();
    const wishpo = new WishPO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    });

    context('Wish Feature Verification',()=>{
        it('Adding to wishlist should be successful',()=>{
            searchpo.searchProduct('Fahrenheit 451 by Ray Bradbury');
            searchpo.clickOnSearch();
            wishpo.clickOnWishButton();
            wishpo.verifyWishSuccessAlert();
        });
    });
});