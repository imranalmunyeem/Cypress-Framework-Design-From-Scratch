class SearchPO{
    searchProduct(product){
        const searchBox = cy.get('#small-searchterms');
        searchBox.should('be.visible');
        searchBox.clear();
        searchBox.type(product);
    }

    clickOnSearch(){
        const searchButton = cy.get('#small-search-box-form > .button-1');
        searchButton.click();
    }
}
export default SearchPO;