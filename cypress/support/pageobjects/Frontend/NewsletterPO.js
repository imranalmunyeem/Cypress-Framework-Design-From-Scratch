class NewsletterPO{
//------------------------------------------Subscribe Field Verification---------------------------------------------//    
    verifySubscribeButtonText(){
        const subscribeButtonText = cy.get('#newsletter-subscribe-button');
        subscribeButtonText.should('be.visible');
        subscribeButtonText.should('contain','Subscribe');
    }

    verifyNewsletterFieldText(){
        const newsletterFieldText = cy.get('.newsletter > .title > strong');
        newsletterFieldText.should('be.visible');
        newsletterFieldText.should('contain','Newsletter');
    }

//------------------------------------------Subscribe Feature Verification---------------------------------------------//    
    inputEmail(email){
      const inputEmail = cy.get('#newsletter-email');
        inputEmail.should('be.visible');
        inputEmail.clear();
        inputEmail.type(email);
    };

    clickOnSubscribe(){
        const subscribeButton = cy.get('#newsletter-subscribe-button')
        subscribeButton.should('be.visible');
        subscribeButton.click();
    }
}

export default NewsletterPO;