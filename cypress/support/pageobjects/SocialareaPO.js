class SocialareaPO{
    verifySocialArea(){
        const areaText = cy.get('.social > .title');
        areaText.should('be.visible');
        areaText.should('contain','Follow us');
    }
}
export default SocialareaPO;