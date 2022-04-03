///<reference types = 'cypress'/>

import SearchPO from "../../support/pageobjects/Frontend/SearchPO";

describe('Search', ()=>{

    const searchpo = new SearchPO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    });

//---------------------------------------Search button Verification----------------------------------------//
    context('Search field verification',()=>{
        it('Search header  should contain "Search" keyword',()=>{
            searchpo.verifySearchHeaderText();
        });

        it('Search button should contain "Search" keyword',()=>{
            searchpo.verifySearchButtonText();
        });
    });

//---------------------------------------Basic Search feature Verification----------------------------------------//    
    context('Basic Search Verification',()=>{
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
            searchpo.verifyEmptyFieldsAlert();
        });
    });
 
//---------------------------------------Advance Search feature Verification----------------------------------------//    
context('Advance Search Verification',()=>{
    it('Advance Search should provide the exact result for existing products',()=>{         
        searchpo.searchProduct('Apple iCam');
        searchpo.checkAdvanceSearch();
        searchpo.selectComputers1();
        searchpo.selectDesktops2();
        searchpo.selectNotebooks3();
        searchpo.selectSoftware4();
        searchpo.selectElectronics5();
        searchpo.selectCameraAndPhotos6();
        searchpo.selectCellphones7();
        searchpo.selectOthers8();
        searchpo.selectApparels9();
        searchpo.selectShoes10();
        searchpo.selectClothing11();
        searchpo.selectAccessories12();
        searchpo.selectDigitaldownloads13();
        searchpo.selectBooks14();
        searchpo.selectJewelry15();
        searchpo.selectGiftCards16();
        searchpo.clickOnSearch();
    });

    it('Search should not provide any result for non existing products',()=>{       
        searchpo.searchProduct('invalid');
        searchpo.clickOnSearch();
        cy.get('.no-result').should('contain','No products were found that matched your criteria.'); //verify search result
    });

});    
});