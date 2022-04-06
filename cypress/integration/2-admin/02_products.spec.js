///<reference types = 'cypress'/>

import ProductsPO from "../../support/pageobjects/Admin/ProductsPO";


describe('Products Page',()=>{

    const productspo = new ProductsPO();

    beforeEach('Will run before each it block',()=>{
        cy.adminLogin('admin@yourstore.com', 'admin');
    });

    context('Add Product Verification',()=>{
        it('Adding a new product should be successful with valid values',()=>{
            cy.visit(Cypress.env('createProductUrl'));
            productspo.inputProductName('Test Product');
            productspo.inputShortDescription('Test short description');
           // productspo.inputFullDescription('Test full description');
            productspo.inputSku('Test SKU');
            productspo.selectProductCategory('Computers');
            //productspo.selectManufacturerApple1('Apple', { force: true });
            // productspo.selectManufacturerHP2();
            // productspo.selectManufacturerNike3();
            productspo.uncheckPublished();
            productspo.checkPublished();
            productspo.inputProductTag('pc');
            productspo.inputGTIN('1234');
            productspo.inputManufacturerPartNumber('5678');
            productspo.selectSimpleProductType();
            //productspo.selectGroupedProductType();
            productspo.selectCustomerRole('Guests');
            productspo.clickOnSave();
            productspo.verifyProductAdditionSuccessAlert();
        });

        it('Adding a new product should not be successful with empty input fields',()=>{
            cy.visit(Cypress.env('createProductUrl'));
            productspo.clickOnSave();
            productspo.verifyProductAdditionUnsuccessAlert();
        });    
    });  
});