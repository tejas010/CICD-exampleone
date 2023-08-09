///<reference types = "cypress"/>

describe('Tranverse method in cypress',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.get('.traversal-button-states').children().should('have.length',4)
    })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.get('.traversal-button-states').children().first().should('have.text',"Danger")
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.get('.traversal-button-states').children().last().should('have.text',"Alert")
    })
    // tc1
    //tc2g
    //tc3
    //tc4
    //tc5
    //tc6
    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.get('.traversal-button-states').children().last().should('have.text',"Alert")
    })
    //tc7
    //tc8
    //tc9

})
