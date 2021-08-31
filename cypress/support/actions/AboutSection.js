

export function validateQuestion(question) {
    cy.contains(question).should('be.visible')
  }