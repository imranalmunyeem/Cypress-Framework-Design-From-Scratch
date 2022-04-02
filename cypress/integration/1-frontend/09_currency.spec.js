/// <reference types = 'cypress'/>

import CurrencyPO from "../../support/pageobjects/Frontend/CurrencyPO";

describe('Currency',()=>{

    const currencypo = new CurrencyPO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    });

//--------------------------------------Currency switching verification----------------------------------------//   
    context('Currency switching verification',()=>{
        it('Select USD',()=>{
            currencypo.selectUSD();
            currencypo.verifyUSD();
        });
    
        it('Select Euro', ()=>{
            currencypo.selectEuro();
            currencypo.verifyEuro();
        });
    });
});