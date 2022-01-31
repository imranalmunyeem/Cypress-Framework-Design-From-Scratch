///<reference types = 'cypress'/>

import SocialareaPO from "../../support/pageobjects/SocialareaPO";

 describe('Social Area',()=>{
     it ('Verify Social Area text', ()=>{
       cy.visit('/');
       const socialareapo = new SocialareaPO
       socialareapo.verifySocialArea();
     })

     it('Navigation to Facebook should be successful',()=>{
        cy.visit(Cypress.env('facebookUrl'));
        cy.url().should('include', 'facebook.com/nopCommerce')
     })

     it('Navigation to Youtube should be successful',()=>{
        cy.visit(Cypress.env('youtubeUrl'));
        cy.url().should('include', 'youtube.com/user/nopCommerce')

     })

     it('Navigation to Twitter should be successful',()=>{
        cy.visit(Cypress.env('twitterUrl'));
        cy.url().should('include', 'twitter.com/nopCommerce')

     })

     it('Navigation to Rss Feed should be successful',()=>{
        cy.visit(Cypress.env('rssUrl'));
        cy.url().should('include', 'nopcommerce.com/news/rss/1')

     })


 })