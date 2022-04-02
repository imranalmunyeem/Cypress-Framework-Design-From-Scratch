///<reference types = 'cypress'/>

import NewsletterPO from "../../support/pageobjects/Frontend/NewsletterPO";

describe('Newsltter', ()=>{

    const newsletterpo = new NewsletterPO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    });

//------------------------------------------Subscribe Field Verification---------------------------------------------//    
    context('Subscribe button text verification',()=>{
        it('Newsletter field should contain "Newsletter" keyword',()=>{
            newsletterpo.verifyNewsletterFieldText();
        });

        it('Subscribe button should contain "Subscribe" keyword',()=>{
            newsletterpo.verifySubscribeButtonText();
        });
    });

//------------------------------------------Subscribe Feature Verification---------------------------------------------//    
    context('Subscribe feature verification',()=>{
        it('Subscription should be successful with valid email',()=>{
            newsletterpo.inputEmail('nforget32@gmail.com');
            newsletterpo.clickOnSubscribe();
        });
    
        it('Subscription should not be successful with invalid email address',()=>{
            newsletterpo.inputEmail('%$$@com');
            newsletterpo.clickOnSubscribe();
        });
    });
});