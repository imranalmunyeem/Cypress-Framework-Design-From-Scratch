class ManufacturersPO{
    //-------------------------------------Search Verification----------------------------------------------//
    searchByManufacturerName(manufacturer){
        const manufacturerName = cy.get('#SearchManufacturerName');
        manufacturerName.should('be.visible');
        manufacturerName.clear();
        manufacturerName.type(manufacturer);
        return this;
    }

    clickOnSearch(){
        const searchIcon = cy.get('#search-manufacturers');
        searchIcon.should('be.visible');
        searchIcon.click();
    }

    verifySearchSuccess(){
        const searchSuccess = cy.get('.odd > :nth-child(3) > .fas');
        searchSuccess.should('be.visible');
    }

    verifySearchUnsuccess(){
        const searchUnsuccess = cy.get('.dataTables_empty');
        searchUnsuccess.should('be.visible');
        searchUnsuccess.should('contain','No data available in table');
    }

    //-------------------------------------Add manufacturer Verification----------------------------------------------//
    inputManufacturerName(manufacturer){
        const manufacturerNameField = cy.get('#Name');
        manufacturerNameField.should('be.visible');
        manufacturerNameField.clear();
        manufacturerNameField.type(manufacturer);
        return this;
    }

    inputDisplayOrder(displayorder){
        const displayOrderField = cy.get(':nth-child(6) > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value');
        displayOrderField.should('be.visible');
        displayOrderField.clear();
        displayOrderField.type(displayorder);
        return this;
    }

    clickOnSave(){
        const saveButton = cy.get('[name="save"]');
        saveButton.should('be.visible');
        saveButton.click();
    }

    verifyAddManufacturerSuccessAlert(){
        const addManufacturerSuccessAlert = cy.get('.alert');
        addManufacturerSuccessAlert.should('be.visible');
        addManufacturerSuccessAlert.should('contain','The new manufacturer has been added successfully.')
    }

    verifyAddManufacturerUnsuccessAlert(){
        const addManufacturerUnsuccessAlert = cy.get('#Name-error');
        addManufacturerUnsuccessAlert.should('be.visible');
        addManufacturerUnsuccessAlert.should('contain','Please provide a name.')
    }


}
export default ManufacturersPO;