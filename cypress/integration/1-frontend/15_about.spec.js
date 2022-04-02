///<reference types = 'cypress'/>

import AboutPO from "../../support/pageobjects/Frontend/AboutPO";

describe('Shipping and Return Verification',()=>{

    const aboutpo = new AboutPO

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('aboutusUrl'));
    });

  //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
        it('Verify URL of the About us of use page',()=>{
            cy.url().should('include', '/about-us');
            });
        });    
     
//---------------------------------------Page content Verification----------------------------------------//
    context('About us page content verification',()=>{
        it('About us page header should contain "Conditions of Use" keywords',()=>{
            aboutpo.verifyAboutPageHeaderText();
        })

        it('About us page body text should contain "Put your "About Us" information here. You can edit this in the admin site." keywords',()=>{
            aboutpo.verifyAboutPageBodyText();
        });
    });
});