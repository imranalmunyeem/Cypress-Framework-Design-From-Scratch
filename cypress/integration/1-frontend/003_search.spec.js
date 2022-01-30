///<reference types = 'cypress'/>

import SearchPO from "../../support/pageobjects/SearchPO";

describe('Search', ()=>{
    it('Navigate to website',()=>{
        cy.visit('/');
    })

    it('Search should provide the exact result for existing products',()=>{       
        const searchpo = new SearchPO();
        searchpo.searchProduct('Apple iCam');
        searchpo.clickOnSearch();
        cy.get('.item-grid').should('contain','Apple iCam'); //verify search result
    })

    it('Search should not provide any result for non existing products',()=>{       
        const searchpo = new SearchPO();
        searchpo.searchProduct('invalid');
        searchpo.clickOnSearch();
        cy.get('.no-result').should('contain','No products were found that matched your criteria.'); //verify search result
    })
})