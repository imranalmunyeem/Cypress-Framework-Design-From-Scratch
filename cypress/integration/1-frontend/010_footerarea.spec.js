///<reference types = 'cypress'/>

import FooterAreaPO from "../../support/pageobjects/FooterAreaPO";

describe('Footer Area', ()=>{

    context('Information Area',()=>{

        it('Sitemap',()=>{
            cy.visit('/'+'/sitemap');
            cy.url().should('include','sitemap');
            const footerareapo = new FooterAreaPO();
            footerareapo.verifySitemapHeader();
    
        })

        it('Shipping & Returns',()=>{
            cy.visit('/'+'/shipping-returns');
            cy.url().should('include','shipping-returns');

        })

        it("Privacy Notice", ()=>{
            cy.visit('/'+'/privacy-notice');
            cy.url().should('include','privacy');

        })

        it('Conditions of use',()=>{
            cy.visit('/'+'/conditions-of-use');
            cy.url().should('include','conditions');

        })

        it('About Us', ()=>{
            cy.visit('/'+'/about-us');
            cy.url().should('include','about');

        })

        it('Contact Us',()=>{
            cy.visit('/'+'/contactus');
            cy.url().should('include','contact');

            })


          })

        context('Customer Service',()=>{
            
            it('Search',()=>{
                cy.visit('/'+'/search');
                cy.url().should('include','search');

            })

            it('News', ()=>{
                cy.visit('/'+'/news');
                cy.url().should('include','news');

            })

            it('Blog',()=>{
                cy.visit('/'+'/blog');
                cy.url().should('include','blog');

            })

            it('Recently Viewd Products',()=>{
                cy.visit('/'+'/recentlyviewedproducts');
                cy.url().should('include','recentlyviewedproducts');

            })

            it('Compare Products', ()=>{
                cy.visit('/'+'/compareproducts');
                cy.url().should('include','compareproducts');

            })

            it('New Products', ()=>{
                cy.visit('/'+'/newproducts');
                cy.url().should('include','newproducts');

            })
        })

        context('My Account Area',()=>{

            it('My Account', ()=>{
                cy.visit('/'+'/login?ReturnUrl=%2Fcustomer%2Finfo');
                cy.url().should('include','login');

            })

            it('Orders', ()=>{
                cy.visit('/'+'/login?ReturnUrl=%2Forder%2Fhistory');
                cy.url().should('include','order');
          
            })

            it('Addresses', ()=>{
                cy.visit('/'+'/login?ReturnUrl=%2Fcustomer%2Faddresses');
                cy.url().should('include','addresses');

            })

            it('Shopping Cart', ()=>{
                cy.visit('/'+'/cart');
                cy.url().should('include','cart');

            })

            it('Wishlist', ()=>{
                cy.visit('/'+'/wishlist');
                cy.url().should('include','wishlist');

            })

            it('Apply for vendor account', ()=>{
                cy.visit('/'+'/login?ReturnUrl=%2Fvendor%2Fapply');
                cy.url().should('include','vendor');

            })
        })

    })
