class CopyrightPO{
    verifyCopyrightDetails(){
        const copyrightField = cy.get('.footer-disclaimer');
        copyrightField.should('be.visible');
        copyrightField.should('contain','Copyright © 2022 nopCommerce demo store. All rights reserved.');
    }
}
export default CopyrightPO;