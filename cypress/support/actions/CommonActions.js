

export function validateText(question) {
    cy.contains(question).should('be.visible')
  }