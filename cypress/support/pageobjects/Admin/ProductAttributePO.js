class ProductAttributePO{
    //-----------------------------------Add Attribute----------------------------------------------//
    inputAttributeName(attribute){
        const attributeNameField = cy.get('#Name');
        attributeNameField.should('be.visible');
        attributeNameField.clear();
        attributeNameField.type(attribute);
        return this;
    }

    clickOnSave(){
        const saveButton = cy.get('[name="save"]');
        saveButton.should('be.visible');
        saveButton.click();
    }

    verifyAddAttributeSuccessAlert(){
        const attributeSuccessAlert = cy.get('.alert');
        attributeSuccessAlert.should('be.visible');
        attributeSuccessAlert.should('contain','The new attribute has been added successfully.');
    }

    verifyAddAttributeUnsuccessAlert(){
        const attributeUnsuccessAlert = cy.get('#Name-error');
        attributeUnsuccessAlert.should('be.visible');
        attributeUnsuccessAlert.should('contain','Please provide a name.');
    }

    verifyAddSpecificGroupAttributeSuccessAlert(){
        const specificGroupAttributeSuccessAlert = cy.get('.alert');
        specificGroupAttributeSuccessAlert.should('be.visible');
        specificGroupAttributeSuccessAlert.should('contain','The new attribute group has been added successfully.');
    }

    //-----------------------------------Add Checkout Attribute----------------------------------------------//
    selectDropdownList1(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('Drop-down listDrop-down list');
    }

    selectRadioButton2(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('Radio button list');
    }

    selectCheckbox3(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('Checkboxes');
    }

    selectTextbox4(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('Textbox');
    }

    selectMultilineTextbox5(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('Multiline textbox');
    }

    selectDatePicker6(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('Date picker');
    }

    selectFileUpload7(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('File upload');
    }

    selectColorSquares8(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('Color squares');
    }

    selectReadOnlyCheckboxes9(){
        const controlTypeDropdown = cy.get('#AttributeControlTypeId');
        controlTypeDropdown.select('Read-only checkboxes');
    }

    checkRequired(){
        const requiredCheckboxField = cy.get('#IsRequired');
        requiredCheckboxField.should('be.visible');
        requiredCheckboxField.check();
    }

    UncheckRequired(){
        const requiredUncheckboxField = cy.get('#IsRequired');
        requiredUncheckboxField.should('be.visible');
        requiredUncheckboxField.uncheck();
    }

    inputDisplayOrder(displayorder){
        const displayOrderField = cy.get(':nth-child(4) > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value');
        displayOrderField.should('be.visible');
        displayOrderField.clear();
        displayOrderField.type(displayorder);
        return this;
    }

}    
export default ProductAttributePO;