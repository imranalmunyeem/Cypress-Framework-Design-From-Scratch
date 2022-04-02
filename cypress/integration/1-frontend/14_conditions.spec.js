///<reference types = 'cypress'/>

import ConditionsPO from "../../support/pageobjects/Frontend/ConditionsPO";


describe('Shipping and Return Verification',()=>{

    const conditionspo = new ConditionsPO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('conditionsUrl'));
    });

  //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
        it('Verify URL of the Conditions of use page',()=>{
            cy.url().should('include', '/conditions-of-use');
            });
        });    
     
//---------------------------------------Page content Verification----------------------------------------//
    context('Privacy Notice page content verification',()=>{
        it('Conditions of use page header should contain "Conditions of Use" keywords',()=>{
            conditionspo.verifyConditionsPageHeaderText();
        })

        it('Conditions of use page body text should contain "Put your conditions of use information here. You can edit this in the admin site." keywords',()=>{
            conditionspo.verifyConditionsPageBodyText();
        });
    });
});