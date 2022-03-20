class ProductsPO{

    inputProductName(name){
        const productName = cy.get('#Name');
        productName.should('be.visible');
        productName.clear();
        productName.type(name);
        return this;
    }

    inputShortDescription(shortdescription){
        const shortDescription = cy.get('#ShortDescription');
        shortDescription.should('be.visible');
        shortDescription.clear();
        shortDescription.type(shortdescription);
        return this;
    }

    // inputFullDescription(fulldescription){
    //     //     cy.get('iframe#mce_0_ifr').within(($frame) => {
    //     //     const body = $frame.contents().find('#FullDescription_ifr')
    //     //     cy.wrap(body).clear().type(fulldescription)
    //     // })
    //    const iframe = cy.frameLoaded('iframe#mce_0_ifr');
    //    iframe.iframe('iframe#mce_0_ifr').find('#FullDescription_ifr').type(fulldescription)
    // }

    inputSku(SKU){
        const sku = cy.get('#Sku');
        sku.should('be.visible');
        sku.clear();
        sku.type(SKU)
    }

    selectCategory(value,option){
        const categories = cy.get(':nth-child(2) > .col-md-9 > .k-widget > .k-multiselect-wrap');
        categories.should('be.visible');
        categories.select(value,option)
        
    }
}
export default ProductsPO;