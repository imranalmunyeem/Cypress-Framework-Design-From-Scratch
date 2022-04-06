///<reference types = 'cypress'/>

import ProductTagsPO from "../../support/pageobjects/Admin/ProductTagsPO";

describe('Products Tags Page',()=>{
    //--------------------------------------Object of Page object Class--------------------------------//
    const producttagspo = new ProductTagsPO;
     
    //---------------------------------------Login to Admin -------------------------------------------//
     beforeEach('Run before all the it blocks',()=>{
        cy.adminLogin('admin@yourstore.com', 'admin');
     });

   //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
        it('Verify the title of the Product Tags page',()=>{
            cy.visit(Cypress.env('productTagsUrl'));
            cy.title().should('eq', 'Product tags / nopCommerce administration');
        });

        it('Verify URL of the Product Tags page',()=>{
            cy.visit(Cypress.env('productTagsUrl'));
            cy.url().should('include', '/Admin/Product/ProductTags');
        });      
   });

      //---------------------------------------Search Product Tags Verification----------------------------------------//
    context('Search Product Tags verification',()=>{
     it('Search should provide correct result with valid and existing values',()=>{
      cy.visit(Cypress.env('productTagsUrl'));
      producttagspo.inputTagName('cool');
      producttagspo.clickOnSearch();

   });

     it('Search should not provide correct result with invalid and non-existing values',()=>{
      cy.visit(Cypress.env('productTagsUrl'));
      cy.visit(Cypress.env('productTagsUrl'));
      producttagspo.inputTagName('Invalid');
      producttagspo.clickOnSearch();
      producttagspo.verifySearchUnsuccess();
      });
   });

})