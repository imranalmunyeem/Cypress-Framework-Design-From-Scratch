///<reference types = 'cypress'/>

import NewsletterPO from "../../support/pageobjects/NewsletterPO";

describe('Newsltter', ()=>{
    it('Navigate to the website',()=>{
        cy.visit('/');
    })

    it('Subscription should be successful with valid email',()=>{
        const newsletterpo = new NewsletterPO();
        newsletterpo.inputEmail('nforget32@gmail.com');
        newsletterpo.clickOnSubscribe();
    })

    it('Subscription should not be successful with in invalid email',()=>{
        const newsletterpo = new NewsletterPO();
        newsletterpo.inputEmail('%$$@com');
        newsletterpo.clickOnSubscribe();
    })
})