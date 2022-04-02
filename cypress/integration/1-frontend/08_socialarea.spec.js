///<reference types = 'cypress'/>

import SocialareaPO from "../../support/pageobjects/Frontend/SocialareaPO";


 describe('Social Area',()=>{

   const socialareapo = new SocialareaPO();

   context('Social Area Text Verifiction',()=>{
      it ('Verify Social Area text', ()=>{
         cy.visit('/');
         socialareapo.verifySocialArea();
       });
   })

   context('Social URLs Verification',()=>{
      it('Navigation to Facebook should be successful',()=>{
         cy.visit(Cypress.env('facebookUrl'));
         cy.url().should('include', 'facebook.com/nopCommerce')
      });
 
      it('Navigation to Youtube should be successful',()=>{
         cy.visit(Cypress.env('youtubeUrl'));
         cy.url().should('include', 'youtube.com/user/nopCommerce')
 
      });
 
      it('Navigation to Twitter should be successful',()=>{
         cy.visit(Cypress.env('twitterUrl'));
         cy.url().should('include', 'twitter.com/nopCommerce')
 
      });
 
      it('Navigation to Rss Feed should be successful',()=>{
         cy.request(Cypress.env('rssUrl'));
         cy.url().should('include', 'nopcommerce.com/news/rss/1')
 
      });
   });
 });