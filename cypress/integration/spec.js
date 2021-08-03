/// <reference types="cypress" />

it('toggles lights', () => {
  cy.visit('index.html')
  cy.get('.lightbulb')
    .should('have.length', 2)
    .each(($lightbulb) => {
      expect($lightbulb).to.have.class('off')
    })
  cy.log('**both lights on**')
  cy.get('#master_switch').click()
  cy.get('.lightbulb.on').should('have.length', 2)
  cy.log('**both lights off**')
  cy.get('#master_switch').click()
  cy.get('.lightbulb.off').should('have.length', 2)
})

it('triggers custom event', () => {
  cy.visit('index.html')
    .its('$')
    .then(($) => {
      cy.document()
        .then($)
        .invoke('on', 'lights:toggle', cy.stub().as('toggle'))
    })

  cy.get('#master_switch').click().click().click()
  cy.get('@toggle').should('have.been.calledThrice')
})
