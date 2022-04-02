class AboutPO{
    verifyAboutPageHeaderText(){
        const aboutPageHeaderText = cy.get('h1');
        aboutPageHeaderText.should('be.visible');
        aboutPageHeaderText.should('contain','About us');
    }

    verifyAboutPageBodyText(){
        const aboutPageBodyText = cy.get('p');
        aboutPageBodyText.should('be.visible');
        aboutPageBodyText.should('contain','Put your "About Us" information here. You can edit this in the admin site.');
    }
}
export default AboutPO;