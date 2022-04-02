class NewsletterPO{
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