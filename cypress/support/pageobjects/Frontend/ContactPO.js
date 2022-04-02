class ContactPO{
    //---------------------------------------Contat Field Verification----------------------------------------//
    verifyYourNameField(){
        const yourNameField = cy.get(':nth-child(1) > label');
        yourNameField.should('be.visible');
        yourNameField.should('contain','Your name:');
    }

    verifyYourEmailField(){
        const emailField = cy.get(':nth-child(2) > label');
        emailField.should('be.visible');
        emailField.should('contain','Your email:');
    }

    verifyEnquiryField(){
        const enquiryField = cy.get(':nth-child(3) > label');
        enquiryField.should('be.visible');
        enquiryField.should('contain','Enquiry:');
    }

    verifySubmitButtonText(){
        const submitButtonText = cy.get('.buttons > .button-1');
        submitButtonText.should('be.visible');
        submitButtonText.should('contain','Submit');
    }
  //---------------------------------------Contact Verification----------------------------------------//    
    inputName(name){
        const nameField = cy.get('#FullName');
        nameField.should('be.visible');
        nameField.clear();
        nameField.type(name);
        return this;
    }

    inputEmail(email){
        const emailField = cy.get('#Email');
        emailField.should('be.visible');
        emailField.clear();
        emailField.type(email);
        return this;
    }

    inputEnquiry(enquiry){
        const enquiryField = cy.get('#Enquiry');
        enquiryField.should('be.visible');
        enquiryField.clear();
        enquiryField.type(enquiry);
        return this;
    }

    clickOnSubmit(){
        const submitButton = cy.get('.buttons > .button-1');
        submitButton.should('be.visible');
        submitButton.click();
    }

    verifyInvalidEmailAlert(){
        const invalidEmailAlert = cy.get('#Email-error');
        invalidEmailAlert.should('be.visible');
        invalidEmailAlert.should('contain','Wrong email');
    }

    verifyEmptyInputFieldsAlert(){
        const emptyNameField = cy.get('#FullName-error');
        emptyNameField.should('be.visible');
        emptyNameField.should('contain','Enter your name');
        const emptyEmailField = cy.get('#Email-error');
        emptyEmailField.should('be.visible');
        emptyEmailField.should('contain','Enter email');
        const emptyEnquiryField = cy.get('#Enquiry-error');
        emptyEnquiryField.should('be.visible');
        emptyEnquiryField.should('contain','Enter enquiry');
    }

//---------------------------------------Required Verification----------------------------------------//
verifyRequiredYourNameField(){
    const requiredYourNameSign = cy.get(':nth-child(1) > .required');
    requiredYourNameSign.should('be.visible');
    requiredYourNameSign.should('contain','*');
}

verifyRequiredEmailField(){
    const requiredEmailSign = cy.get(':nth-child(2) > .required');
    requiredEmailSign.should('be.visible');
    requiredEmailSign.should('contain','*');
}

verifyRequiredEnquiryField(){
    const requiredEnquirySign = cy.get(':nth-child(3) > .required');
    requiredEnquirySign.should('be.visible');
    requiredEnquirySign.should('contain','*');
}
}
export default ContactPO;