///<reference types = 'cypress'/>

describe('Products',()=>{

    context('Computers',()=>{
        it('Desktops',()=>{
            cy.visit(Cypress.env('desktopsUrl'));
            cy.get('h1').should('contain','Desktops');                              //Verify whether the page contains 'Desktops'
            cy.productcounter();                                                    //Runnng from commands
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })

        it('Notebooks',()=>{
            cy.visit(Cypress.env('notebooksUrl'));
            cy.get('h1').should('contain','Notebooks');                              //Verify whether the page contains 'Notebooks'
            cy.productcounter();                                                    //Runnng from commands
            //cy.get('.item-grid').find('.product-item').should('have.length', 6); //Alternative verification 

        })

        it('Softwares',()=>{
            cy.visit(Cypress.env('softwareUrl'));
            cy.get('h1').should('contain','Software');                              //Verify whether the page contains 'Software'
            cy.productcounter();                                                   //Runnng from commands
           //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })
      })


    context('Electronics',()=>{
        it('Camera & photo',()=>{
            cy.visit(Cypress.env('cameraphotoUrl'));
            cy.get('h1').should('contain','Camera & photo');                         //Verify whether the page contains 'Camera & photo'
            cy.productcounter();                                                    //Runnng from commands
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })

        it('Cell phones',()=>{
            cy.visit(Cypress.env('cellphonesUrl'));
            cy.get('h1').should('contain','Cell phones');                            //Verify whether the page contains 'Cell phones'
            cy.productcounter();                                                    //Runnng from commands
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })

        it('others',()=>{
            cy.visit(Cypress.env('othersUrl'));
            cy.get('h1').should('contain','Others');                                //Verify whether the page contains 'Others'
            cy.productcounter();                                                   //Runnng from commands
           //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })
      })     


    context('Apparel',()=>{
        it('Shoes',()=>{
            cy.visit(Cypress.env('shoesUrl'));
            cy.get('h1').should('contain','Shoes');                                  //Verify whether the page contains 'Shoes'
            cy.productcounter();                                                    //Runnng from command
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })

        it('Clothings',()=>{
            cy.visit(Cypress.env('clothingsUrl'));
            cy.get('h1').should('contain','Clothing');                              //Verify whether the page contains 'Clothing'
            cy.productcounter();                                                   //Runnng from commands
           //cy.get('.item-grid').find('.product-item').should('have.length', 4); //Alternative verification 

        })

        it('Accessories',()=>{
            cy.visit(Cypress.env('accessoriesUrl'));
            cy.get('h1').should('contain','Accessories');                            //Verify whether the page contains 'Accessories'
            cy.productcounter();                                                    //Runnng from commands
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })
      })      


    context('Digital Downloads',()=>{
        it('Navigate to website',()=>{
            cy.visit(Cypress.env('digitaldownloadUrl'));
            cy.get('h1').should('contain','Digital downloads');                      //Verify whether the page contains 'Digital downloads'
            cy.productcounter();                                                    //Runnng from commands
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })
      })


    context('Books',()=>{
        it('Navigate to website',()=>{
            cy.visit(Cypress.env('booksUrl'));
            cy.get('h1').should('contain','Books');                                  //Verify whether the page contains 'Books'
            cy.productcounter();                                                    //Runnng from commands
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })
      })


    context('Jewerly',()=>{
        it('Navigate to website',()=>{
            cy.visit(Cypress.env('jewelryUrl'));
            cy.get('h1').should('contain','Jewelry');                                //Verify whether the page contains 'Jewelry'
            cy.productcounter();                                                    //Runnng from commands 
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })
      })

      
    context('Gift Cards',()=>{
        it('Navigate to website',()=>{
            cy.visit(Cypress.env('giftscardUrl'));
            cy.get('h1').should('contain','Gift Cards');                             //Verify whether the page contains 'Gift Cards'
            cy.productcounter();                                                    //Runnng from commands
            //cy.get('.item-grid').find('.product-item').should('have.length', 3); //Alternative verification 

        })
      })      
})