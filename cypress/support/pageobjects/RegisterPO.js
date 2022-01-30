class RegisterPO{
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
}   
export default RegisterPO;