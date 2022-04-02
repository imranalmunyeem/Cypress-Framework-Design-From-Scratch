///<reference types = 'cypress'/>

import ShippingAndReturnsPO from "../../support/pageobjects/Frontend/ShippingAndReturnsPO";


describe('Shipping and Return Verification',()=>{

    const shippingandreturnspo = new ShippingAndReturnsPO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('shippingandreturnUrl'));
    });

  //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
        it('Verify URL of the shipping and return page',()=>{
        cy.url().should('include', '/shipping-returns');
        });
     });    
     
//---------------------------------------Page content Verification----------------------------------------//
    context('Shipping and Return page content verification',()=>{
        it('Shipping page header should contain "Shipping & returns" keywords',()=>{
            shippingandreturnspo.verifyShippingPageHeaderText();
        })

        it('Shipping page body text should contain "Put your shipping & returns information here. You can edit this in the admin site." keywords',()=>{
            shippingandreturnspo.verifyShippingPageBodyText();
        });
    });
});