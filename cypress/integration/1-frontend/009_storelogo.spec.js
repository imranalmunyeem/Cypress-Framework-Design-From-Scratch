import StoreLogoPO from '../../support/pageobjects/StoreLogoPO';
///<reference types = 'cypress'/>

describe('Header Logo', ()=>{
    it('Navigate to the website',()=>{
        cy.visit('/');
    })

    it('Navigation to the correct page should be succesful after clicking on the logo',()=>{
        const storelogopo = new StoreLogoPO();
        storelogopo.clickOnLogo();
        storelogopo.verifyLogo();
        
    })
})