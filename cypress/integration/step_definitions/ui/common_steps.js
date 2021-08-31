/// <reference types="cypress" />

import {Given,Then,When} from 'cypress-cucumber-preprocessor/steps'
import {validateQuestion} from '../../../support/actions/AboutSection'
import {clickOnAboutLink} from '../../../support/actions/HomePage'

Given(/^User navigates to pokeapi with "([^"]*)"$/, (device) => {
	switch (device) {
		case 'browser':
			cy.viewport(1440, 900)
			break
		case 'iphone': 			
			cy.viewport('iphone-5')
			break
	}
	cy.visit('/')
});

When(/^clicks in about section$/, () => {	
	clickOnAboutLink()
});

Then(/^user should see "([^"]*)"$/, (question) => {
	validateQuestion(question);
});
