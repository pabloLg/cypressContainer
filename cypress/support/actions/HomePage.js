// Locator
export var about = '[href="/about"]'
export var apiV2 = '.Header-module__nav--25Sms > [href="/docs/v2"]'

// Actions
export function clickOnAboutLink() {
    cy.get(about).click()	
}

export function clickOnApiV2(){
    cy.get(apiV2).click();
}