/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:60075')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a Login', () => {
    // https://on.cypress.io/type
    // cy.get('.action-email')
    //   .type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('#loginLink').click()

    cy.get('input[type="submit"]').click({ multiple: true })

    cy.get('#Email').type('fake').should('have.value', 'fake', { delay: 300 })
    cy.get('input[type="submit"]').click({ multiple: true })
    cy.get('#Email').type('@email.com', { delay: 300 }).should('have.value', 'fake@email.com')
    cy.get('#Password').type('1234', { delay: 300 }).should('have.value', '1234')
    cy.get('input[type="submit"]').click({ multiple: true })
  })

  it('.type() - type into a Register', () => {
    // https://on.cypress.io/type
    // cy.get('.action-email')
    //   .type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('#registerLink').click()

    cy.get('input[type="submit"]').click({ multiple: true })

    cy.get('#Email').type('fake').should('have.value', 'fake', { delay: 300 })
    cy.get('input[type="submit"]').click({ multiple: true })

    cy.get('#Email').type('@email.com', { delay: 300 }).should('have.value', 'fake@email.com')
    cy.get('#Password').type('1234', { delay: 300 }).should('have.value', '1234')

    cy.get('#ConfirmPassword').type('1234', { delay: 300 }).should('have.value', '1234')
    cy.get('input[type="submit"]').click({ multiple: true })
  })

})
