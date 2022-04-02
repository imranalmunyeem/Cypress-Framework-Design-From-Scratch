///<reference types = 'cypress'/>

import PrivacyNoticePO from "../../support/pageobjects/Frontend/PrivacyNoticePO";


describe('Shipping and Return Verification',()=>{

    const privacynoticepo = new PrivacyNoticePO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('privacyUrl'));
    });

  //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
        it('Verify URL of the shipping and Privacy Notice page',()=>{
            cy.url().should('include', '/privacy-notice');
            });
        });    
     
//---------------------------------------Page content Verification----------------------------------------//
    context('Privacy Notice page content verification',()=>{
        it('Privacy Notice page header should contain "Privacy notice" keywords',()=>{
            privacynoticepo.verifyPrivacyNoticePageHeaderText();
        })

        it('Privacy Notice page body text should contain "Put your privacy policy information here. You can edit this in the admin site." keywords',()=>{
            privacynoticepo.verifyPrivacyNoticePageBodyText();
        });
    });
});