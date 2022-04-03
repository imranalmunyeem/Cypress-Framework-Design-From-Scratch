class NewsPO{

    //------------------------------------News Name-----------------------------------------------//
    verifyNewsHeaderText(){
        const newsHeaderText = cy.get('h1');
        newsHeaderText.should('be.visible');
        newsHeaderText.should('contain','News');
    }

    verifyFirstNewsName(){
        const firstNewsName = cy.get(':nth-child(1) > .news-head > .news-title');
        firstNewsName.should('be.visible');
        firstNewsName.should('contain','New online store is open!');
    }

    verifySecondNewsName(){
        const secondNewsName = cy.get(':nth-child(2) > .news-head > .news-title');
        secondNewsName.should('be.visible');
        secondNewsName.should('contain','nopCommerce new release!');
    }

    verifyThirdNewsName(){
        const thirdNewsName = cy.get(':nth-child(3) > .news-head > .news-title');
        thirdNewsName.should('be.visible');
        thirdNewsName.should('contain','About nopCommerce');
    }

    //------------------------------------News Publication Date-----------------------------------------------//
    verifyFirstNewsPublicationDate(){
        const firstNewsPublicationDate = cy.get(':nth-child(1) > .news-head > .news-date');
        firstNewsPublicationDate.should('be.visible');
        firstNewsPublicationDate.should('contain','-Thursday, July 26, 2018');
    }

    verifySecondNewsPublicationDate(){
        const secondNewsPublicationDate = cy.get(':nth-child(2) > .news-head > .news-date');
        secondNewsPublicationDate.should('be.visible');
        secondNewsPublicationDate.should('contain','-Thursday, July 26, 2018');
    }

    verifyThirdNewsPublicationDate(){
        const thirdNewsPublicationDate = cy.get(':nth-child(3) > .news-head > .news-date');
        thirdNewsPublicationDate.should('be.visible');
        thirdNewsPublicationDate.should('contain','-Thursday, July 26, 2018');
    }

    //-------------------------------Comment Form------------------------------------------//
    inputTitle(title){
        const titleField = cy.get('#AddNewComment_CommentTitle');
        titleField.should('be.visible');
        titleField.clear();
        titleField.type(title);
        return this;
    }

    inputComment(comment){
        const commentField = cy.get('#AddNewComment_CommentText');
        commentField.should('be.visible');
        commentField.clear();
        commentField.type(comment);
        return this;
    }

    clickOnNewComment(){
        const newCommentButton = cy.get('.buttons > .button-1');
        newCommentButton.should('be.visible');
        newCommentButton.click();
    }

    verifyCommentSuccessAlert(){
        const commentSuccessAlert = cy.get('.result');
        commentSuccessAlert.should('be.visible');
        commentSuccessAlert.should('contain','News comment is successfully added.');
    }

    verifyCommentUnsuccessAlert(){
        const commentUnsuccessAlert = cy.get(':nth-child(1) > .field-validation-error');
        commentUnsuccessAlert.should('be.visible');
        commentUnsuccessAlert.should('contain','Enter comment title');
    }

    //--------------------------------Input Fields Validation----------------------------------------//
    verifyCommentFormHeaderText(){
        const commentFormHeaderText = cy.get('#comments > .title > strong');
        commentFormHeaderText.should('be.visible');
        commentFormHeaderText.should('contain','Leave your comment');
    }

    verifyTitleFieldText(){
        const titleFieldText = cy.get('.form-fields > :nth-child(1) > label');
        titleFieldText.should('be.visible');
        titleFieldText.should('contain','Title:');
    }

    verifyCommentFieldText(){
        const commentFieldText = cy.get(':nth-child(2) > label');
        commentFieldText.should('be.visible');
        commentFieldText.should('contain','Comment:');
    }

    verifyNewCommentButtonText(){
        const newCommentButtonText = cy.get('.buttons > .button-1');
        newCommentButtonText.should('be.visible');
        newCommentButtonText.should('contain','New comment');
    }

    verifyCommentSectionHeaderText(){
        const commentSectionHeaderText = cy.get('.comment-list > .title > strong');
        commentSectionHeaderText.should('be.visible');
        commentSectionHeaderText.should('contain','Comments');
    }

}
export default NewsPO;