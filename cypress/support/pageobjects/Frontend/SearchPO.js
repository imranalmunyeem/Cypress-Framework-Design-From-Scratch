class SearchPO{
//---------------------------------------Search fields Verification----------------------------------------//
    verifySearchHeaderText(){
        const searchHeaderText = cy.get('h1');
        searchHeaderText.should('be.visible');
        searchHeaderText.should('contain','Search');
    }

    verifySearchButtonText(){
        const searchButtonText =cy.get('#small-search-box-form > .button-1');
        searchButtonText.should('be.visible');
        searchButtonText.should('contain','Search');
    }    
//---------------------------------------Search feature Verification----------------------------------------//     
    searchProduct(product){
        const searchBox = cy.get('#small-searchterms');
        searchBox.should('be.visible');
        searchBox.clear();
        searchBox.type(product);
        return this;
    }

    clickOnSearch(){
        const searchButton = cy.get('#small-search-box-form > .button-1');
        searchButton.should('be.visible');
        searchButton.click();
    }

    verifyEmptyFieldsAlert(){
        const emptyFieldAlert = cy.get('.warning');
        emptyFieldAlert.should('be.visible');
        emptyFieldAlert.should('contain','Search term minimum length is 3 characters');
    }
 
    //--------------------------------------Advance Search-------------------------------------------------//
    checkAdvanceSearch(){
        const advanceSearch =cy.get('#advs');
        advanceSearch.should('be.visible');
        advanceSearch.check();
    }

    selectComputers1(){
        cy.get('#cid').select('Computers');
    }

    selectDesktops2(){
        cy.get('#cid').select('Computers >> Desktops')
    }

    selectNotebooks3(){
        cy.get('#cid').select('Computers >> Notebooks')
    }

    selectSoftware4(){
        cy.get('#cid').select('Computers >> Software')
    }

    selectElectronics5(){
        cy.get('#cid').select('Electronics')
    }

    selectCameraAndPhotos6(){
        cy.get('#cid').select('Electronics >> Camera & photo')
    }

    selectCellphones7(){
        cy.get('#cid').select('Electronics >> Cell phones')
    }

    selectOthers8(){
        cy.get('#cid').select('Electronics >> Others')
    }

    selectApparels9(){
        cy.get('#cid').select('Apparel')
    }

    selectShoes10(){
        cy.get('#cid').select('Apparel >> Shoes')
    }

    selectClothing11(){
        cy.get('#cid').select('Apparel >> Clothing')
    }

    selectAccessories12(){
        cy.get('#cid').select('Apparel >> Accessories')
    }

    selectDigitaldownloads13(){
        cy.get('#cid').select('Digital downloads')
    }

    selectBooks14(){
        cy.get('#cid').select('Books')
    }

    selectJewelry15(){
        cy.get('#cid').select('Jewelry')
    }

    selectGiftCards16(){
        cy.get('#cid').select('Gift Cards')
    }
}
export default SearchPO;