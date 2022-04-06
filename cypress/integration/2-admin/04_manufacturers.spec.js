///<reference types = 'cypress'/>

import ManufacturersPO from "../../support/pageobjects/Admin/ManufacturersPO";

describe('Manufacturer Page',()=>{
    //--------------------------------------Object of Page object Class--------------------------------//
    const manufacturerspo = new ManufacturersPO;
     
    //---------------------------------------Login to Admin -------------------------------------------//
     beforeEach('Run before all the it blocks',()=>{
        cy.adminLogin('admin@yourstore.com', 'admin');
     });

   //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
        it('Verify the title of the manufacturer page',()=>{
            cy.visit(Cypress.env('manufacturerListUrl'));
            cy.title().should('eq', 'Manufacturers / nopCommerce administration');
        });

        it('Verify URL of the manufacturer page',()=>{
            cy.visit(Cypress.env('manufacturerListUrl'));
            cy.url().should('include', '/Admin/Manufacturer/List');
        });

        it('Verify URL of the create manufacturer page',()=>{
            cy.visit(Cypress.env('createManufacturerUrl'));
            cy.url().should('include', '/Admin/Manufacturer/Create');
        });
      
   });

      //---------------------------------------Search Manufacturer Verification----------------------------------------//
    context('Search Manufacturer verification',()=>{
     it('Search should provide correct result with valid and existing manufacturer name',()=>{
      cy.visit(Cypress.env('manufacturerListUrl'));
      manufacturerspo.searchByManufacturerName('HP');
      manufacturerspo.clickOnSearch();
      manufacturerspo.verifySearchSuccess();
   });

     it('Search should not provide correct result with invalid and non-existing manufacturer name',()=>{
      cy.visit(Cypress.env('manufacturerListUrl'));
      manufacturerspo.searchByManufacturerName('None');
      manufacturerspo.clickOnSearch();
      manufacturerspo.verifySearchUnsuccess();
      });
   });

    //---------------------------------------Add Manufacturer Verification----------------------------------------//
    context('Add Manufacturer verification',()=>{
     it('Adding manufacturer should be successful with valid input fields',()=>{
      cy.visit(Cypress.env('createManufacturerUrl'));
      manufacturerspo.inputManufacturerName('Asus')
      //manufacturerspo.inputDisplayOrder('2');
      manufacturerspo.clickOnSave();
      manufacturerspo.verifyAddManufacturerSuccessAlert();
      
   });

     it('Adding manufacturer should not be successful with empty input fields',()=>{
      cy.visit(Cypress.env('createManufacturerUrl'));
      manufacturerspo.clickOnSave();
      manufacturerspo.verifyAddManufacturerUnsuccessAlert();
      });
   });
})