class ProductTagsPO{
    //--------------------------------------Search Product Tags-----------------------------------------------------//
    inputTagName(tag){
        const tagField = cy.get('#SearchTagName');
        tagField.should('be.visible');
        tagField.clear();
        tagField.type(tag);
        return this;
    }

    clickOnSearch(){
        const searchIcon = cy.get('#search-product-tags');
        searchIcon.should('be.visible');
        searchIcon.click();
    }

    verifySearchUnsuccess(){
        const searchUnsuccessMessage = cy.get('.dataTables_empty');
        searchUnsuccessMessage.should('be.visible');
        searchUnsuccessMessage.should('contain','No data available in table');
    }
}
export default ProductTagsPO;