///<reference types = 'cypress'/>

import CopyrightPO from "../../support/pageobjects/Frontend/CopyrightPO";

describe('Copyright Message',()=>{

    const copyrightpo = new CopyrightPO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    });

    context('Copyright text verification',()=>[
        it('Copyright message should contain correct date and text',()=>{
            copyrightpo.verifyCopyrightDetails();
        })
    ])
})