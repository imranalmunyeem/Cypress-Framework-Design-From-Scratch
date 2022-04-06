///<reference types = 'cypress'/>

import ProductAttributePO from "../../support/pageobjects/Admin/ProductAttributePO";

describe('Product Attribute Page',()=>{
    //--------------------------------------Object of Page object Class--------------------------------//
    const productattributepo = new ProductAttributePO();
     
    //---------------------------------------Login to Admin -------------------------------------------//
     beforeEach('Run before all the it blocks',()=>{
        cy.adminLogin('admin@yourstore.com', 'admin');
     });

   //---------------------------------------URL & Title Verification----------------------------------------//
    context('Url and title verification',()=>{
        it('Verify the title of the Product Attribute page',()=>{
            cy.visit(Cypress.env('productAttributeUrl'));
            cy.title().should('eq', 'Product attributes / nopCommerce administration');
        });

        it('Verify URL of the Product Attribute page',()=>{
            cy.visit(Cypress.env('productAttributeUrl'));
            cy.url().should('include', '/Admin/ProductAttribute/List');
        });
        
        it('Verify URL of the Create Product Attribute page',()=>{
            cy.visit(Cypress.env('createProductAttributeUrl'));
            cy.url().should('include', '/Admin/ProductAttribute/Create');
        });
        
        it('Verify URL of the Create Specific Attribute page',()=>{
            cy.visit(Cypress.env('createSpecificAttributeUrl'));
            cy.url().should('include', '/Admin/SpecificationAttribute/CreateSpecificationAttribute');
        });
        
        it('Verify URL of the Create Specific Group Attribute page',()=>{
            cy.visit(Cypress.env('createSpecificAttributeUrl'));
            cy.url().should('include', '/Admin/SpecificationAttribute/CreateSpecificationAttributeGroup');
        });
        
        it('Verify URL of the Create Checkout Attribute page',()=>{
            cy.visit(Cypress.env('createCheckoutAttributeUrl'));
            cy.url().should('include', '/Admin/CheckoutAttribute/Create');
        }); 
   });

      //---------------------------------------Add Attribute Verification----------------------------------------//
    context('Add Attribute Verification',()=>{
        it('Adding new attribute should be successful with proper inputs',()=>{
            cy.visit(Cypress.env('createProductAttributeUrl'));
            productattributepo.inputAttributeName('Structure');
            productattributepo.clickOnSave();
            productattributepo.verifyAddAttributeSuccessAlert();
        });

        it('Adding new attribute should not be successful with empty input fields',()=>{
            cy.visit(Cypress.env('createProductAttributeUrl'));
            productattributepo.clickOnSave();
            productattributepo.verifyAddAttributeUnsuccessAlert();
        });      
   });

    //---------------------------------------Add Specific Attribute Verification----------------------------------------//
    context('Add Specific Attribute Verification',()=>{
        it('Adding new specific attribute should be successful with proper inputs',()=>{
            cy.visit(Cypress.env('createSpecificAttributeUrl'));
            productattributepo.inputAttributeName('Test specific attribute');
            productattributepo.clickOnSave();
            productattributepo.verifyAddAttributeSuccessAlert();
        });

        it('Adding new specific attribute should not be successful with empty input fields',()=>{
            cy.visit(Cypress.env('createSpecificAttributeUrl'));
            productattributepo.clickOnSave();
            productattributepo.verifyAddAttributeUnsuccessAlert();
        });

        it('Adding new specific group attribute should not be successful with empty input fields',()=>{
            cy.visit(Cypress.env('createSpecificGroupAttributeUrl'));
            productattributepo.inputAttributeName('Test specific group attribute');
            productattributepo.clickOnSave();
            productattributepo.verifyAddSpecificGroupAttributeSuccessAlert();
        });
        
        it('Adding new specific group attribute should not be successful with empty input fields',()=>{
            cy.visit(Cypress.env('createSpecificGroupAttributeUrl'));
            productattributepo.clickOnSave();
            productattributepo.verifyAddAttributeUnsuccessAlert();
        });
   });

    //---------------------------------------Add Checkout Attribute Verification----------------------------------------//
    context('Add Checkout Attribute Verification',()=>{
        it('Adding new checkout attribute should be successful with proper inputs',()=>{
            cy.visit(Cypress.env('createCheckoutAttributeUrl'));
            productattributepo.inputAttributeName('Test Checkout Attribute');
            productattributepo.selectRadioButton2();
            productattributepo.selectCheckbox3();
            productattributepo.selectTextbox4();
            productattributepo.selectMultilineTextbox5();
            productattributepo.selectDatePicker6();
            productattributepo.selectFileUpload7();
            productattributepo.selectColorSquares8();
            productattributepo.selectReadOnlyCheckboxes9();
            productattributepo.checkRequired();
            productattributepo.UncheckRequired();
            //productattributepo.inputDisplayOrder('1');
            productattributepo.clickOnSave();
            productattributepo.verifyAddAttributeSuccessAlert();
        });

        it('Adding new checkout attribute should not be successful with empty input fields',()=>{
            cy.visit(Cypress.env('createCheckoutAttributeUrl'));
            productattributepo.clickOnSave();
            productattributepo.verifyAddAttributeUnsuccessAlert();
        });      
   });

});