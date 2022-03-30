///<reference types = 'cypress'/>

import ProductsPO from "../../support/pageobjects/ProductsPO";

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
            productspo.inputSku('Test SKU')
        });
    });  
});