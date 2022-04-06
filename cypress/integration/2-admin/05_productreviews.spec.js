///<reference types = 'cypress'/>

import ProductReviewsPO from "../../support/pageobjects/Admin/ProductReviewsPO";


describe('Product Reviews Page',()=>{
    //--------------------------------------Object of Page object Class--------------------------------//
    const productreviewspo = new ProductReviewsPO();
     
    //---------------------------------------Login to Admin -------------------------------------------//
     beforeEach('Run before all the it blocks',()=>{
        cy.adminLogin('admin@yourstore.com', 'admin');
     });

   //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
        it('Verify the title of the Product Reviews page',()=>{
            cy.visit(Cypress.env('productReviewsUrl'));
            cy.title().should('eq', 'Product reviews / nopCommerce administration');
        });

        it('Verify URL of the Product Reviews page',()=>{
            cy.visit(Cypress.env('productReviewsUrl'));
            cy.url().should('include', '/Admin/ProductReview/List');
        });      
   });

      //---------------------------------------Search Product Reviews Verification----------------------------------------//
    context('Search Product Reviews verification',()=>{
     it('Search should provide correct result with valid and existing values',()=>{
      cy.visit(Cypress.env('productReviewsUrl'));
        productreviewspo.inputCreatedFromDate('02/01/2022');
        productreviewspo.inputCreatedToDate('05/04/2022');
        //productreviewspo.inputMessage('');
        productreviewspo.inputProductName('Apple MacBook Pro 13-inch');
        productreviewspo.selectDisapproved();
        productreviewspo.selectApproved();
        productreviewspo.selectAll();
        productreviewspo.clickOnSearch();
   });

     it('Search should not provide correct result with invalid and non-existing values',()=>{
      cy.visit(Cypress.env('productReviewsUrl'));
      productreviewspo.inputCreatedFromDate('02/01/2022');
      productreviewspo.inputCreatedToDate('05/04/2022');
      //productreviewspo.inputMessage('');
      productreviewspo.inputProductName('Apple MacBook Pro 13-inch');
      productreviewspo.selectDisapproved();
      productreviewspo.selectApproved();
      productreviewspo.selectAll();
      productreviewspo.clickOnSearch();
      productreviewspo.verifySearchUnsuccess();
      });
   });

})