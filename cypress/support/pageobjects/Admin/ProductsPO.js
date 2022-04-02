class ProductsPO{

    inputProductName(name){
        const productName = cy.get('#Name');
        productName.should('be.visible');
        productName.clear();
        productName.type(name);
        return this;
    }

    inputShortDescription(shortdescription){
        const shortDescription = cy.get('#ShortDescription');
        shortDescription.should('be.visible');
        shortDescription.clear();
        shortDescription.type(shortdescription);
        return this;
    }

    // inputFullDescription(fulldescription){
    //     //     cy.get('iframe#mce_0_ifr').within(($frame) => {
    //     //     const body = $frame.contents().find('#FullDescription_ifr')
    //     //     cy.wrap(body).clear().type(fulldescription)
    //     // })
    //    const iframe = cy.frameLoaded('iframe#mce_0_ifr');
    //    iframe.iframe('iframe#mce_0_ifr').find('#FullDescription_ifr').type(fulldescription)
    // }

    inputSku(SKU){
        const sku = cy.get('#Sku');
        sku.should('be.visible');
        sku.clear();
        sku.type(SKU)
    }

    //----------------------Category Selection-----------------------------//
    selectProductCategory(product){
        cy.get(':nth-child(2) > .col-md-9 > .k-widget > .k-multiselect-wrap > .k-input').type(product);
        return this;
    }

//-------------------------------Manufacturers-------------------------------------------//
selectManufacturerApple1(manufacturer){
    const manufacturerDropdown = cy.get('#SelectedManufacturerIds');
    manufacturerDropdown.type(manufacturer);
}

// selectManufacturerHP2(){
//     const manufacturerDropdown = cy.get('#SelectedManufacturerIds');
//     manufacturerDropdown.select('HP').should('have.value', '2')
// }

// selectManufacturerNike3(){
//     const manufacturerDropdown = cy.get('#SelectedManufacturerIds');
//     manufacturerDropdown.select('Nike').should('have.value', '3')
// }
//------------------------------------Published-Checkbox------------------------------------//
uncheckPublished(){
    const publishedCheckboxField = cy.get('#Published');
    publishedCheckboxField.should('be.visible');
    publishedCheckboxField.uncheck();
    }

checkPublished(){
    const publishedCheckboxField = cy.get('#Published');
    publishedCheckboxField.should('be.visible');
    publishedCheckboxField.check();
    }
 
//-------------------------------------Products Tag------------------------------------------//
inputProductTag(tag){
    const productTagField = cy.get('.tag-editor');
    productTagField.should('be.visible');
    productTagField.type(tag);
    return this;
}    

//--------------------------------------GTIN---------------------------------------------------//
inputGTIN(gtin){
    const GTINField = cy.get('#Gtin');
    GTINField.should('be.visible');
    GTINField.clear();
    GTINField.type(gtin);
    return this;
}

//-----------------------------Manufacturer Part Number-----------------------------------------//
inputManufacturerPartNumber(manufacturerPartNumber){
    const manufacturerPartNumberField = cy.get('#ManufacturerPartNumber');
    manufacturerPartNumberField.should('be.visible');
    manufacturerPartNumberField.clear();
    manufacturerPartNumberField.type(manufacturerPartNumber);
    return this;
}

//-------------------------------Product Type-----------------------------------------------------//
selectSimpleProductType(){
    const productTypeDropdown = cy.get('#ProductTypeId');
    productTypeDropdown.should('be.visible');
    productTypeDropdown.select('Simple');
}

selectGroupedProductType(){
    const productTypeDropdown = cy.get('#ProductTypeId');
    productTypeDropdown.should('be.visible');
    productTypeDropdown.select('Grouped (product with variants)');
}

//---------------------------------------Customer Roles--------------------------------------------//
selectCustomerRole(role){
    const customerRoleDropdown = cy.get(':nth-child(14) > .col-md-9 > .row > .col-md-4 > .k-widget > .k-multiselect-wrap > .k-input');
    customerRoleDropdown.should('be.visible');
    customerRoleDropdown.clear();
    customerRoleDropdown.type(role);
}

//-------------------------------------Save--------------------------------------------------//
clickOnSave(){
    const saveButton = cy.get('[name="save"]');
    saveButton.should('be.visible');
    saveButton.click();
}

//-------------------------------------Success Alert------------------------------------------//
verifyProductAdditionSuccessAlert(){
    const productAdditionSuccessAlert = cy.get('.alert');
    productAdditionSuccessAlert.should('be.visible');
    productAdditionSuccessAlert.should('contain','The new product has been added successfully.');
}

//------------------------------------Unsuccess Alert------------------------------------------//
verifyProductAdditionUnsuccessAlert(){
    const productAdditionUnsuccessAlert = cy.get('#Name-error');
    productAdditionUnsuccessAlert.should('be.visible');
    productAdditionUnsuccessAlert.should('contain','Please provide a name.');
}
}

export default ProductsPO;