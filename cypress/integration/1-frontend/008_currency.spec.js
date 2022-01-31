/// <reference types = 'cypress'/>

import CurrencyPO from "../../support/pageobjects/CurrencyPO";

describe('Currency',()=>{
    it('Navigate to the website', ()=>{
        cy.visit('/');
    })

    it('Select USD',()=>{
        const currencypo = new CurrencyPO();
        currencypo.selectUSD();
        currencypo.verifyUSD();
    })

    it('Select Euro', ()=>{
        const currencypo = new CurrencyPO();
        currencypo.selectEuro();
        currencypo.verifyEuro();
    })



})