class ConditionsPO{
    verifyConditionsPageHeaderText(){
        const conditionsPageHeaderText = cy.get('h1');
        conditionsPageHeaderText.should('be.visible');
        conditionsPageHeaderText.should('contain','Conditions of Use');
    }

    verifyConditionsPageBodyText(){
        const conditionsPageBodyText = cy.get('p');
        conditionsPageBodyText.should('be.visible');
        conditionsPageBodyText.should('contain','Put your conditions of use information here. You can edit this in the admin site.');
    }
}
export default ConditionsPO;