///<reference types = 'cypress'/>

import SearchPO from "../../support/pageobjects/Frontend/SearchPO";

describe('Search', ()=>{

    const searchpo = new SearchPO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    });

//---------------------------------------Search button Verification----------------------------------------//
    context('Search field verification',()=>{
        it('Search button should contain "Search" keyword',()=>{
            searchpo.verifySearchButtonText();
        });
    });

//---------------------------------------Search feature Verification----------------------------------------//    
    context('Search Page',()=>{
        it('Search should provide the exact result for existing products',()=>{         
            searchpo.searchProduct('Apple iCam');
            searchpo.clickOnSearch();
            cy.get('.item-grid').should('contain','Apple iCam'); //verify search result
        });
    
        it('Search should not provide any result for non existing products',()=>{       
            searchpo.searchProduct('invalid');
            searchpo.clickOnSearch();
            cy.get('.no-result').should('contain','No products were found that matched your criteria.'); //verify search result
        });

        it('Search should not provide any result for empty field',()=>{       
            searchpo.clickOnSearch();
        });
    });
});