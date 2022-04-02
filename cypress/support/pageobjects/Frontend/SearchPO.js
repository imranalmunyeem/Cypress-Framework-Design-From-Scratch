class SearchPO{
//---------------------------------------Reset fields Verification----------------------------------------//
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
}
export default SearchPO;