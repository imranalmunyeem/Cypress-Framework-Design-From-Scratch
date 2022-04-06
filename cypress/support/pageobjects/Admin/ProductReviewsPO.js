class ProductReviewsPO{
    //------------------------------------Search Product Reviews---------------------------------------------//
    inputCreatedFromDate(from_date){
        const createdFromField = cy.get('#CreatedOnFrom');
        createdFromField.should('be.visible');
        createdFromField.clear();
        createdFromField.type(from_date);
        return this;
    }

    inputCreatedToDate(to_date){
        const createdToField = cy.get('#CreatedOnTo');
        createdToField.should('be.visible');
        createdToField.clear();
        createdToField.type(to_date);
        return this;
    }
    
    inputMessage(message){
        const messageField = cy.get('#SearchText');
        messageField.should('be.visible');
        messageField.clear();
        messageField.type(message);
        return this;
    }

    selectApproved(){
        const dropdownField = cy.get('#SearchApprovedId');
        dropdownField.select('Approved only');
    }

    selectDisapproved(){
        const dropdownField = cy.get('#SearchApprovedId');
        dropdownField.select('Disapproved only');
    }

    selectAll(){
        const dropdownField = cy.get('#SearchApprovedId');
        dropdownField.select('All');
    }

    inputProductName(product){
        const productName = cy.get('#search-product-name');
        productName.should('be.visible');
        productName.clear();
        productName.type(product);
        return this;
    }

    clickOnSearch(){
        const searchIcon = cy.get('#search-productreviews');
        searchIcon.should('be.visible');
        searchIcon.click();
    }

    verifySearchUnsuccess(){
        const searchUnsuccessMessage = cy.get('.dataTables_empty');
        searchUnsuccessMessage.should('be.visible');
        searchUnsuccessMessage.should('contain','No data available in table');
    }
}
export default ProductReviewsPO;