///<reference types = 'cypress'/>

import NewsPO from "../../support/pageobjects/Frontend/NewsPO";

describe('News Page',()=>{

    const newspo = new NewsPO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('newsUrl'));
    });

    context('News Page Content Verification',()=>{
        it('Header text should contain the "News" keyword',()=>{
            newspo.verifyNewsHeaderText();
        });

        it('Every paragraph should contain the correct news names',()=>{
            newspo.verifyFirstNewsName();
            newspo.verifySecondNewsName();
            newspo.verifyThirdNewsName();
        });

        it('Every news should contain the correct publication date',()=>{
            newspo.verifyFirstNewsPublicationDate();
            newspo.verifySecondNewsPublicationDate();
            newspo.verifyThirdNewsPublicationDate();
        });

    context('First News Verification',()=>{
        it('First news should be navigated to the correct',()=>{
            cy.visit('https://demo.nopcommerce.com/new-online-store-is-open');
            cy.url().should('include', '/new-online-store-is-open');
        });
    });

    context('Second News Verification',()=>{
        it('Second news should be navigated to the correct',()=>{
            cy.visit('https://demo.nopcommerce.com/nopcommerce-new-release');
            cy.url().should('include', '/nopcommerce-new-release');
        });
    });

    context('Third News Verification',()=>{
        it('Third news should be navigated to the correct',()=>{
            cy.visit('https://demo.nopcommerce.com/about-nopcommerce');
            cy.url().should('include', '/about-nopcommerce');
        });
    });

    context('Comment form Verification',()=>{
        it('Comment form should be submitted successfully with proper inputs',()=>{
            cy.visit('https://demo.nopcommerce.com/about-nopcommerce');
            newspo.inputTitle('Test title');
            newspo.inputComment('Test Comment');
            newspo.clickOnNewComment();
            newspo.verifyCommentSuccessAlert();
        });

        it('Comment form should not be submitted successfully with empty input fields',()=>{
            cy.visit('https://demo.nopcommerce.com/about-nopcommerce');
            newspo.clickOnNewComment();
            newspo.verifyCommentUnsuccessAlert();
        });

        it('Input fields validation of comment form',()=>{
            cy.visit('https://demo.nopcommerce.com/about-nopcommerce');
            newspo.verifyCommentFormHeaderText();
            newspo.clickOnNewComment();
            newspo.verifyTitleFieldText();
            newspo.verifyCommentFieldText();
            newspo.verifyNewCommentButtonText();
        });

        it('Comment section should contain the "comment" keyword',()=>{
            cy.visit('https://demo.nopcommerce.com/about-nopcommerce');
            newspo.verifyCommentSectionHeaderText();
        });
    });

    });
});