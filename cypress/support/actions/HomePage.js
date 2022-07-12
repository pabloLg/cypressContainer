// Locator
export var about = '[href="/about"]'


// Action
export function clickOnAboutLink() {
    cy.get(about).click()
	
}