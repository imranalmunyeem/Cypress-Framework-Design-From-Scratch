class RegisterPO{
//---------------------------------------Input Fields Verification----------------------------------------//
verifyHeaderText(){
    const headerTextField = cy.get('h1');
    headerTextField.should('be.visible');
    headerTextField.should('contain','Register');
}

verifyHeaderParagraph(){
    const headerParagrapghField = cy.get('form > :nth-child(1) > .title > strong');
    headerParagrapghField.should('be.visible');
    headerParagrapghField.should('contain','Your Personal Details');
}

verifyGenderField(){
    const genderField = cy.get('[for="gender"]');
    genderField.should('be.visible');
    genderField.should('contain','Gender');
}

verifymaleField(){
    const maleField = cy.get('.male > .forcheckbox');
    maleField.should('be.visible');
    maleField.should('contain','Male');
}

verifyfemaleField(){
    const femaleField = cy.get('.female > .forcheckbox');
    femaleField.should('be.visible');
    femaleField.should('contain','Female');
}

verifyFistNameField(){
    const firstNameField = cy.get(':nth-child(1) > .form-fields > :nth-child(2) > label');
    firstNameField.should('be.visible');
    firstNameField.should('contain','First name:');
}

verifyLastNameField(){
    const lastNameField = cy.get(':nth-child(3) > label');
    lastNameField.should('be.visible');
    lastNameField.should('contain','Last name:');
}

verifyDateofbirthField(){
    const dateofbirthField = cy.get('.date-of-birth > label');
    dateofbirthField.should('be.visible');
    dateofbirthField.should('contain','Date of birth:');
}

verifyEmailField(){
    const emailField = cy.get(':nth-child(5) > label');
    emailField.should('be.visible');
    emailField.should('contain','Email:');
}

verifyPasswordHeaderField(){
    const passwordHeaderTextField = cy.get(':nth-child(4) > .title > strong');
    passwordHeaderTextField.should('be.visible');
    passwordHeaderTextField.should('contain','Your Password');
}

verifyPasswordField(){
    const passwordField = cy.get(':nth-child(4) > .form-fields > :nth-child(1) > label');
    passwordField.should('be.visible');
    passwordField.should('contain','Password:');
}

verifyConfirmPasswordField(){
    const confirmPasswordField = cy.get(':nth-child(4) > .form-fields > :nth-child(2) > label');
    confirmPasswordField.should('be.visible');
    confirmPasswordField.should('contain','Confirm password:');
}

verifyRegisterButtonText(){
    const registerButtonTextField = cy.get('#register-button');
    registerButtonTextField.should('be.visible');
    registerButtonTextField.should('contain','Register');
}

//---------------------------------------Required Verification----------------------------------------//
verifyRequiredFirstNameField(){
    const requiredFirstNameSign = cy.get(':nth-child(1) > .form-fields > :nth-child(2) > .required');
    requiredFirstNameSign.should('be.visible');
    requiredFirstNameSign.should('contain','*');
}

verifyRequiredLastNameField(){
    const requiredLastNameSign = cy.get(':nth-child(3) > .required');
    requiredLastNameSign.should('be.visible');
    requiredLastNameSign.should('contain','*');
}

verifyRequiredPasswordField(){
    const requiredPasswordSign = cy.get(':nth-child(1) > .required');
    requiredPasswordSign.should('be.visible');
    requiredPasswordSign.should('contain','*');
}

verifyRequiredConfirmPasswordField(){
    const requiredConfirmPasswordSign = cy.get(':nth-child(4) > .form-fields > :nth-child(2) > .required');
    requiredConfirmPasswordSign.should('be.visible');
    requiredConfirmPasswordSign.should('contain','*');
}

verifyRequiredEmailField(){
    const requiredEmailSign = cy.get(':nth-child(5) > .required');
    requiredEmailSign.should('be.visible');
    requiredEmailSign.should('contain','*');
}


//----------------------------------------------Registration Fields----------------------------------------------//
    checkMale(){
        const maleField = cy.get('#gender-male');
        maleField.should('be.visible');
        maleField.click();
    }
    
    checkFemale(){
        const femaleField = cy.get('#gender-female');
        femaleField.should('be.visible');
        femaleField.click();
    }

    
    inputFirstName(firstname){
        const firstNameField = cy.get('#FirstName');
        firstNameField.should('be.visible');
        firstNameField.clear();
        firstNameField.type(firstname);
    }

    inputLasttName(lastname){
        const lastNameField  = cy.get('#LastName');
        lastNameField.should('be.visible');
        lastNameField.clear();
        lastNameField.type(lastname);
    }

    inputDateOfBrith(date, month, year){
        const dateField = cy.get('[name="DateOfBirthDay"]');
        dateField.should('be.visible');
        dateField.select(date);

        const monthField = cy.get('[name="DateOfBirthMonth"]');
        monthField.should('be.visible');
        monthField.select(month);

        const yearField = cy.get('[name="DateOfBirthYear"]');
        monthField.should('be.visible');
        yearField.select(year);

    }
    inputEmail(email){
        const emailField = cy.get('#Email');
        emailField.should('be.visible');
        emailField.clear();
        emailField.type(email);
    }

    inputCompany(company){
        const companyField = cy.get('#Company');
        companyField.should('be.visible');
        companyField.clear();
        companyField.type(company);
    }

    checkNewsletter(){
        const newsletterField = cy.get('#Newsletter');
        newsletterField.should('be.visible');
        newsletterField.check();
    }

    uncheckNewsletter(){
        const newsletterField = cy.get('#Newsletter');
        newsletterField.should('be.visible');
        newsletterField.uncheck();
    }

    inputPassword(password, repassword){
        const passwordField = cy.get('#Password');
        passwordField.should('be.visible');
        passwordField.clear();
        passwordField.type(password);

        const confirmPasswordField = cy.get('#ConfirmPassword');
        confirmPasswordField.should('be.visible');
        confirmPasswordField.clear();
        confirmPasswordField.type(repassword);
    }

    clickOnRegister(){
        const registerField = cy.get('#register-button')
        registerField.should('be.visible');
        registerField.click();
    }

    //--------------------------------Invalid Email Alert---------------------------------------//
    verifyInvalidEmailAlert(){
        const invalidEmailAlert = cy.get('#Email-error');
        invalidEmailAlert.should('be.visible');
        invalidEmailAlert.should('contain','Wrong email');
    }

        //--------------------------------Duplicate Email Alert---------------------------------------//
    verifyDuplicateEmailAlert(){
        const duplicateEmailAlert = cy.get('.message-error > ul > li');
        duplicateEmailAlert.should('be.visible');
        duplicateEmailAlert.should('contain','The specified email already exists');
    }

    //---------------------------------------Empty input fields alert-----------------------------------//
    verifyEmptyInputFieldsAlert(){
        const emptyInputFieldsAlert = cy.get('#FirstName-error');
        emptyInputFieldsAlert.should('be.visible');
        emptyInputFieldsAlert.should('contain','First name is required.');
    }

    //---------------------------------------Unmatched Password-------------------------------------------//
    verifyUnmatchedPasswordAlert(){
        const unmatchedPasswordAlert = cy.get('#ConfirmPassword-error');
        unmatchedPasswordAlert.should('be.visible');
        unmatchedPasswordAlert.should('contain','The password and confirmation password do not match.');
    }
}   
export default RegisterPO;