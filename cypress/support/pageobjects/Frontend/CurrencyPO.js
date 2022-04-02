class CurrencyPO{
    selectUSD(){
        const currencyDropbox = cy.get('#customerCurrency');
        currencyDropbox.should('be.visible');
        currencyDropbox.select('US Dollar');
    }

    verifyUSD(){
        cy.get('.header-selectors-wrapper').should('contain', 'US Dollar');
    }

    selectEuro(){
        const currencyDropbox = cy.get('#customerCurrency');
        currencyDropbox.should('be.visible');
        currencyDropbox.select('Euro');
    }

    verifyEuro(){
        cy.get('.header-selectors-wrapper').should('contain', 'Euro');
    }


}
export default CurrencyPO;