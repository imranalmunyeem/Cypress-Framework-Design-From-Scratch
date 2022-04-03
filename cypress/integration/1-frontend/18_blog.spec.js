///<reference types = 'cypress'/>

import BlogPO from "../../support/pageobjects/Frontend/BlogPO";

describe('News Page',()=>{

    const blogpo = new BlogPO;

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('blogUrl'));
    });

    context('Blog Page Content Verification',()=>{
        it('Header text should contain the "Blogs" keyword',()=>{
            blogpo.verifyBlogHeaderText();
        });

        it('Every blog should contain the correct blog names',()=>{
            blogpo.verifyFirstBlogName();
            blogpo.verifySecondBlogName();
        });

        it('Every blog should contain the correct publication date',()=>{
            blogpo.verifyFirstBlogPublicationDate();
            blogpo.verifySecondBlogPublicationDate();
        });
    });
});