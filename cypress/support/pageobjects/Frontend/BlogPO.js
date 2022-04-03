class BlogPO{
    verifyBlogHeaderText(){
        const blogHeaderText = cy.get('h1');
        blogHeaderText.should('be.visible');
        blogHeaderText.should('contain','Blog');
    }

    //-------------------------------Blog Publication Date------------------------------------------------//
    verifyFirstBlogPublicationDate(){
        const firstBlogPublicationDate = cy.get(':nth-child(1) > .post-head > .post-date');
        firstBlogPublicationDate.should('be.visible');
        firstBlogPublicationDate.should('contain','Thursday, July 26, 2018');
    }

    verifySecondBlogPublicationDate(){
        const secondBlogPublicationDate = cy.get(':nth-child(2) > .post-head > .post-date');
        secondBlogPublicationDate.should('be.visible');
        secondBlogPublicationDate.should('contain','Thursday, July 26, 2018');
    }

   //--------------------------------------------Blog Names------------------------------------------------//
   verifyFirstBlogName(){
        const firstBlogName = cy.get(':nth-child(1) > .post-head > .post-title');
        firstBlogName.should('be.visible');
        firstBlogName.should('contain','Why your online store needs a wish list');
    }

    verifySecondBlogName(){
        const secondBlogName = cy.get(':nth-child(2) > .post-head > .post-title');
        secondBlogName.should('be.visible');
        secondBlogName.should('contain','How a blog can help your growing e-Commerce business');
    }
}
export default BlogPO;