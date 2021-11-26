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


Given(/^User login usf with "([^"]*)"$/, (args1) => {
	cy.viewport(1440, 900)
	cy.visit('https://ecomr4-sit.ama-nonprod.usfoods.com/')
	cy.get('#username-input > .native-input').type('R4tmid5')
	cy.get('#password-input > .native-input').type('Welcome20')
	cy.get('.buttonL').click({force:true})
	cy.wait(2000)
});



Then(/^audit page with LightHouse$/, () => {
	
	const customThresholds = {  
        performance: 40,
        accessibility: 90,
        seo: 90,
        'best-practices': 90,
        pwa: 0,
      };

      const desktopConfig = { 
        extends: 'lighthouse:default',
        formFactor: 'desktop',
        screenEmulation: {disabled: true},
		disableStorageReset: false
      };
      
	cy.lighthouse(customThresholds, desktopConfig);
	
	
	//cy.exec('npm run lighthouse https://ecomr4-sit.ama-nonprod.usfoods.com/desktop/home')
});

