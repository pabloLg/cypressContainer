// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
/// <reference types="Cypress" />
// Import commands.js using ES2015 syntax:
import './commands_ui'
import './commands_api'
import '@shelex/cypress-allure-plugin'
import '@bahmutov/cy-api/support'
import setup from 'cypress-cy-select'
setup()
require('cypress-commands')
require('@shelex/cypress-allure-plugin')
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Server.defaults({
	delay: 500,
	force404: false,
	whitelist: xhr => {
		// handle custom logic for whitelisting
		return true
	},
})
