///<reference types = 'cypress'/>

import StoreLogoPO from "../../support/pageobjects/Frontend/StoreLogoPO";

describe('Header Logo', ()=>{
    
    const storelogopo = new StoreLogoPO();

    context('Logo Verification',()=>{
        it('Navigation to the correct page should be succesful after clicking on the logo',()=>{
            cy.visit('/');
            storelogopo.clickOnLogo();
            storelogopo.verifyLogo();
            
        });
    });


});