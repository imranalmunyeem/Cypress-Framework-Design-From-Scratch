class CategoriesPO{
    clickOnBasicMode(){
        const basicMode = cy.get('.onoffswitch-switch');
        basicMode.click();
    }

    categoryInfo(){
        const category = cy.get('#category-info > .card-header > .card-title');
        category.should('be.visible');    
    }

    inputCategoryName(name){
        const categoryName = cy.get('#Name');
        categoryName.should('be.visible');
        categoryName.clear();
        categoryName.type(name);
    }

    //----------------------Category Selection-----------------------------//
    selectComputers1(){
        cy.get('#ParentCategoryId').select('Computers');
    }

    selectDesktops2(){
        cy.get('#ParentCategoryId').select('Computers >> Desktops')
    }

    selectNotebooks3(){
        cy.get('#ParentCategoryId').select('Computers >> Notebooks')
    }

    selectSoftware4(){
        cy.get('#ParentCategoryId').select('Computers >> Software')
    }

    selectElectronics5(){
        cy.get('#ParentCategoryId').select('Electronics')
    }

    selectCameraAndPhotos6(){
        cy.get('#ParentCategoryId').select('Electronics >> Camera & photo')
    }

    selectCellphones7(){
        cy.get('#ParentCategoryId').select('Electronics >> Cell phones')
    }

    selectOthers8(){
        cy.get('#ParentCategoryId').select('Electronics >> Others')
    }

    selectApparels9(){
        cy.get('#ParentCategoryId').select('Apparel')
    }

    selectShoes10(){
        cy.get('#ParentCategoryId').select('Apparel >> Shoes')
    }

    selectClothing11(){
        cy.get('#ParentCategoryId').select('Apparel >> Clothing')
    }

    selectAccessories12(){
        cy.get('#ParentCategoryId').select('Apparel >> Accessories')
    }

    selectDigitaldownloads13(){
        cy.get('#ParentCategoryId').select('Digital downloads')
    }

    selectBooks14(){
        cy.get('#ParentCategoryId').select('Books')
    }

    selectJewelry15(){
        cy.get('#ParentCategoryId').select('Jewelry')
    }

    selectGiftCards16(){
        cy.get('#ParentCategoryId').select('Gift Cards')
    }

    //--------------------------------Display Order----------------------------------//
    inputDisplayOrderQuantity(quantity){
        const displayOrderField = cy.get(':nth-child(8) > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value');
        displayOrderField.should('be.visible');
        displayOrderField.type(quantity);
        return this;
    }

    //-------------------------------------Save Added categorie------------------------//
    clickOnSave(){
        const saveButton = cy.get('[name="save"]');
        saveButton.should('be.visible');
        saveButton.click();
    }

    //--------------------------------------Success Alert------------------------------//
    verifySuccessAlert(){
        const successAlert = cy.get('.alert');
        successAlert.should('be.visible');
        successAlert.should('contain','The new category has been added successfully.');
    }

    //---------------------------------Empty Input Field Alert-------------------------------//
    verifyEmptySubmissionAlert(){
        const emptySubmissionAlert = cy.get('#Name-error');
        emptySubmissionAlert.should('be.visible');
        emptySubmissionAlert.should('contain','Please provide a name.');
    }

    //---------------------------------------Edit Category-------------------------------------//
    clickOnEditButton(){
        const editButton = cy.get(':nth-child(2) > .button-column > .btn');
        editButton.should('be.visible');
        editButton.click();
    }

    //--------------------------------------Successful Edit Alert-------------------------------//
    verifyEditAlert(){
        const editAlert = cy.get('.alert')
        editAlert.should('be.visible');
        editAlert.should('contain','The category has been updated successfully.');
    }

    //---------------------------------------Delete --------------------------------//
    clickOnDeleteFromSelectionPage(){
        const deleteButton = cy.get('#delete-selected');
        deleteButton.should('be.visible');
        deleteButton.click();
    }

    verifyDeleteAlertTitle(){
        const alertTitle = cy.get('#delete-selected-action-confirmation-title');
        alertTitle.should('be.visible');
        alertTitle.should('contain', 'Are you sure?')
    }

    selectYesFromAlert(){
        const yes = cy.get('#delete-selected-action-confirmation-submit-button');
        yes.should('be.visible');
        yes.click();
    }

    SelectNoFromAlert(){
        const no = cy.get('.modal-footer > .btn-default');
        no.should('be.visible');
        no.click();
    }

    verifyDeleteUnsuccessAlert(){
        const deleteUnsuccessAlertButton = cy.get('#nothingSelectedAlert-info');
        deleteUnsuccessAlertButton.should('be.visible');
        deleteUnsuccessAlertButton.should('contain','Please select at least one record.');
    }

    clickOnDeleteFromCategoryPage(){
        const deleteFromCategory = cy.get('#category-delete');
        deleteFromCategory.should('be.visible');
        deleteFromCategory.click();
    }

    clickOnConfirmDelete(){
        const confirmDeleteButton = cy.get('.modal-footer > .btn-danger');
        confirmDeleteButton.should('be.visible');
        confirmDeleteButton.click();
    }

    verifyDeleteSuccessAlert(){
        const deleteSucessAlert = cy.get('.alert');
        deleteSucessAlert.should('be.visible');
        deleteSucessAlert.should('contain','The category has been deleted successfully.');
    }

//--------------------------------------Export-------------------------------//
clickOnExport(){
    const exportButton = cy.get('div.float-right > .btn-group > :nth-child(1)');
    exportButton.should('be.visible');
    exportButton.click();
}

exportToXML(){
    const exportDropdown = cy.get('.dropdown-toggle');
    exportDropdown.should('be.visible');
    exportDropdown.click();
    const exportToXMLLink = cy.get('.dropdown-menu > :nth-child(1) > a');
    exportToXMLLink.should('be.visible');
    exportToXMLLink.click();
}

exportToExcel(){
    const exportDropdown = cy.get('.dropdown-toggle');
    exportDropdown.should('be.visible');
    exportDropdown.click();
    const exportToExcelLink = cy.get('.dropdown-menu > :nth-child(2) > a');
    exportToExcelLink.should('be.visible');
    exportToExcelLink.click();
}

//--------------------------------------Import------------------------------------------//
clickOnImport(){
    const importButton = cy.get('.bg-olive');
    importButton.should('be.visible');
    importButton.click();
}

UploadFile(){
    const filePath = 'images/category.png'
    const chooseFileButton = cy.get('#importexcelfile');
    chooseFileButton.attachFile('filePath')
}

//--------------------------------Forward-Backward-----------------------------------------//
clickOnForward(){
    const forwardIcon = cy.get('#categories-grid_next > .page-link > .k-icon');
    forwardIcon.should('be.visible');
    forwardIcon.click();
}

clickOnBackward(){
    const backwardIcon = cy.get('#categories-grid_previous > .page-link > .k-icon');
    backwardIcon.should('be.visible');
    backwardIcon.click();
}

//--------------------------------Show Item Quantity-----------------------------------------//
selectShowItemsQuantity7(){
    const itemsQuantity = cy.get('.custom-select');
    itemsQuantity.select('7');
}

selectShowItemsQuantity20(){
    const itemsQuantity = cy.get('.custom-select');
    itemsQuantity.select('20');
}

selectShowItemsQuantity50(){
    const itemsQuantity = cy.get('.custom-select');
    itemsQuantity.select('50');
}

selectShowItemsQuantity100(){
    const itemsQuantity = cy.get('.custom-select');
    itemsQuantity.select('100');
}

//--------------------------------Show Item Quantity-----------------------------------------//\
reload(){
    const reloadButton = cy.get('.dt-buttons > .btn');
    reloadButton.should('be.visible');
    reloadButton.click();
}

//----------------------------------------Search------------------------------------------------//
searchByCategoryName(name){
    const categoryName = cy.get('#SearchCategoryName');
    categoryName.should('be.visible');
    categoryName.clear();
    categoryName.type(name);
}

clickOnSearch(){
    const searchIcon = cy.get('#search-categories');
    searchIcon.should ('be.visible');
    searchIcon.click();
}

verifyDisplayCategory(){
    const displayCateory = cy.get('.odd > :nth-child(3)');
    displayCateory.should('be.visible');
}

verifyNonExistCategorySearch(){
    const nonExistCategoryMessage = cy.get('.dataTables_empty');
    nonExistCategoryMessage.should('be.visible');
    nonExistCategoryMessage.should('contain','No data available in table');
}
}
export default CategoriesPO;