/// <reference types="cypress" />

import {Given,Then,When} from 'cypress-cucumber-preprocessor/steps'
import {validateQuestion} from '../../../support/actions/AboutSection'
import {clickOnAboutLink,about} from '../../../support/actions/HomePage'

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
	//cy.get(about).click();
});

Then(/^user should see "([^"]*)"$/, (question) => {
	validateQuestion(question);
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
	
	
	
});

