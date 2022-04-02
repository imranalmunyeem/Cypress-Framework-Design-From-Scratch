class PrivacyNoticePO{
    verifyPrivacyNoticePageHeaderText(){
        const privacyNoticePageHeaderText = cy.get('h1');
        privacyNoticePageHeaderText.should('be.visible');
        privacyNoticePageHeaderText.should('contain','Privacy notice');
    }

    verifyPrivacyNoticePageBodyText(){
        const privacyNoticePageBodyText = cy.get('p');
        privacyNoticePageBodyText.should('be.visible');
        privacyNoticePageBodyText.should('contain','Put your privacy policy information here. You can edit this in the admin site.');
    }
}
export default PrivacyNoticePO;