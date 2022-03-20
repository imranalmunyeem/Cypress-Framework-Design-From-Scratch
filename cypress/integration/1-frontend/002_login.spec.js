///<reference types ='cypress'/>

import { getOwnEnumerableProperties } from "chai/lib/chai/utils";
import AdminLogin from "../../support/pageobjects/AdminLoginPO";

describe('Login', ()=>{
  const adminlogin = new AdminLogin();
  before('Run before it blocks',()=> {
    //Visit the url
    cy.fixture("fixtures/adminLoginData.json").then(
      (data) => {
        this.email = data.email;
        this.Password = data.password;
      });
      
    it('Login should be successful with valid credentials', ()=>{
      adminlogin.inputEmail(this.email);
      adminlogin.inputPassword(this.password);
      adminlogin.clickOnLogin();
    })

    it('Login should not be successful with invalid credentials', ()=>{
      adminlogin.inputEmail(wrongemail@gmail.com);
      adminlogin.inputPassword(wrongpassword);
      adminlogin.clickOnLogin();
      });

    it('Login should not be successful with empty field', ()=>{
      adminlogin.clickOnLogin();
        cy.get('#Email-error').should('contain','Please enter your email');
      });
})
