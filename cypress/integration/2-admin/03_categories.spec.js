///<reference types = 'cypress'/>

import CategoriesPO from "../../support/pageobjects/Admin/CategoriesPO";

 describe('Category page', ()=>{
    //--------------------------------------Object of Page object Class--------------------------------//
    const categoriespo = new CategoriesPO();
     
    //---------------------------------------Login to Admin -------------------------------------------//
     beforeEach('Run before all the it blocks',()=>{
        cy.adminLogin('admin@yourstore.com', 'admin');
     });

   //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
     it('Verify the title of the add catrgory page',()=>{
      cy.visit(Cypress.env('createCategoryUrl'));
      cy.title().should('eq', 'Add a new category / nopCommerce administration');
   });

     it('Verify URL of the add category page',()=>{
      cy.visit(Cypress.env('createCategoryUrl'));
      cy.url().should('include', '/Admin/Category/Create');
      });
   });

   //-------------------------------Add new category in Basic Mode----------------------------------// 
    context('Add category verification',()=>{
     it('Add a new basic category should be successful',()=>{
        cy.visit(Cypress.env('createCategoryUrl'));
        categoriespo.inputCategoryName('Test category');
        categoriespo.selectComputers1();
        categoriespo.selectDesktops2();
        categoriespo.selectNotebooks3();
        categoriespo.selectSoftware4();
        categoriespo.selectElectronics5();
        categoriespo.selectCameraAndPhotos6();
        categoriespo.selectCellphones7();
        categoriespo.selectOthers8();
        categoriespo.selectApparels9();
        categoriespo.selectShoes10();
        categoriespo.selectClothing11();
        categoriespo.selectAccessories12();
        categoriespo.selectDigitaldownloads13();
        categoriespo.selectBooks14();
        categoriespo.selectJewelry15();
        categoriespo.selectGiftCards16();
        categoriespo.inputDisplayOrderQuantity(10);
        categoriespo.clickOnSave();
        categoriespo.verifySuccessAlert();
   });

     it('Adding a new basic category should not be successful with empty input fields',()=>{
       cy.visit(Cypress.env('createCategoryUrl'));
       categoriespo.clickOnSave();
       categoriespo.verifyEmptySubmissionAlert();
   });
});

   //-------------------------------Edit added category in Basic Mode----------------------------------//
   context('Edit category verification',()=>{
     it('Editing category should be successful',()=>{
      cy.visit(Cypress.env('categoryListUrl'));
      categoriespo.clickOnEditButton();
      categoriespo.inputCategoryName('Edited Categorie');
      categoriespo.clickOnSave();
      categoriespo.verifyEditAlert();
   });
});

   //--------------------------------------------Delete-------------------------------------------------//
   context('Edit category verification',()=>{
     it('Deleting a category should not be successful without selecting any category',()=>{
      cy.visit(Cypress.env('categoryListUrl'));
      categoriespo.clickOnDeleteFromSelectionPage();
      categoriespo.verifyDeleteAlertTitle();
      categoriespo.selectYesFromAlert();
      categoriespo.verifyDeleteUnsuccessAlert();
   });

     it('Deleting a category should be successful by selecting any category',()=>{
      cy.visit(Cypress.env('categoryListUrl'));
      categoriespo.clickOnEditButton();
      categoriespo.clickOnDeleteFromCategoryPage();
      categoriespo.clickOnConfirmDelete();
      categoriespo.verifyDeleteSuccessAlert();
   });
});

   //--------------------------------------------Export-------------------------------------------------//
   context('Export Verification',()=>{
      it('Exporting should be successful after clicking on it directly',()=>{
         cy.visit(Cypress.env('categoryListUrl'));
         categoriespo.clickOnExport();
      });

      it('Exporting as CSV should be successful',()=>{
         cy.visit(Cypress.env('categoryListUrl'));
         categoriespo.exportToXML();
      });

      it('Exporting as Excel should be successful',()=>{
         cy.visit(Cypress.env('categoryListUrl'));
         categoriespo.exportToExcel();
      });
   });

      //--------------------------------------------Export-------------------------------------------------//
   context('Export Verification',()=>{
      it('Exporting should be successful after clicking on it directly',()=>{
         cy.visit(Cypress.env('categoryListUrl'));
         categoriespo.clickOnExport();
      });

      it('Exporting as CSV should be successful',()=>{
         cy.visit(Cypress.env('categoryListUrl'));
         categoriespo.exportToXML();
      });

      it('Exporting as Excel should be successful',()=>{
         cy.visit(Cypress.env('categoryListUrl'));
         categoriespo.exportToExcel();
      });
   });

      //--------------------------------------------Import-------------------------------------------------//
   context('Export Verification',()=>{
      it('Importing should be successful after clicking on it',()=>{
         cy.visit(Cypress.env('categoryListUrl'));
         categoriespo.clickOnImport();
         categoriespo.UploadFile();
      });
   });

      //--------------------------------------------Functionalities-------------------------------------------------//
      context('Forward-Backward, Order, Visible Items Quantity Verification',()=>{
         it('Forwaed-backward features should be worked successfully after clicking on them',()=>{
            cy.visit(Cypress.env('categoryListUrl'));
            categoriespo.clickOnForward();
            categoriespo.clickOnBackward();
         });

         it('Selecting show items quantity should be worked successfully after clicking on them',()=>{
            cy.visit(Cypress.env('categoryListUrl'));
            categoriespo.selectShowItemsQuantity7();
            categoriespo.selectShowItemsQuantity20();
            categoriespo.selectShowItemsQuantity50();
            categoriespo.selectShowItemsQuantity100();    
         });

         it('Reload should be worked successfully after clicking on it',()=>{
            cy.visit(Cypress.env('categoryListUrl'));
            categoriespo.reload();
         });
      }); 

      //--------------------------------------------Search-------------------------------------------------//
      context('Search Verification',()=>{
         it('Search should show the correct result with valid existing data',()=>{
            cy.visit(Cypress.env('categoryListUrl'));
            categoriespo.searchByCategoryName('Computers');
            categoriespo.clickOnSearch();
            categoriespo.verifyDisplayCategory();
         });

         it.only('Search should throw "not available" message with searching by non-existing data',()=>{
            cy.visit(Cypress.env('categoryListUrl'));
            categoriespo.searchByCategoryName('none');
            categoriespo.clickOnSearch();
            categoriespo.verifyNonExistCategorySearch();
         });
      });      
});