///<reference types = 'cypress'/>

describe('Products',()=>{

    context('Computers',()=>{
        it('Desktops',()=>{
            cy.visit(Cypress.env('desktopsUrl'));
        })

        it('Notebooks',()=>{
            cy.visit(Cypress.env('notebooksUrl'));

        })

        it('Softwares',()=>{
            cy.visit(Cypress.env('softwareUrl'));

        })
      })

    context('Electronics',()=>{
        it('Camera & photo',()=>{
            cy.visit(Cypress.env('cameraphotoUrl'));

        })

        it('Cell phones',()=>{
            cy.visit(Cypress.env('cellphonesUrl'));

        })

        it('others',()=>{
            cy.visit(Cypress.env('othersUrl'));

        })
      })     

    context('Apparel',()=>{
        it('Shoes',()=>{
            cy.visit(Cypress.env('shoesUrl'));

        })

        it('Clothings',()=>{
            cy.visit(Cypress.env('clothingsUrl'));

        })

        it('Accessories',()=>{
            cy.visit(Cypress.env('accessoriesUrl'));

        })
      })      

    context('Digital Downloads',()=>{
        it('Navigate to website',()=>{
            cy.visit(Cypress.env('digitaldownloadUrl'));

        })
      })

    context('Books',()=>{
        it('Navigate to website',()=>{
            cy.visit(Cypress.env('booksUrl'));

        })
      })

    context('Jewerly',()=>{
        it('Navigate to website',()=>{
            cy.visit(Cypress.env('jewelryUrl'));

        })
      })

    context('Gift Cards',()=>{
        it('Navigate to website',()=>{
            cy.visit(Cypress.env('giftscardUrl'));

        })
      })      
})