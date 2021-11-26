/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import {sendPokemonRequest,checkStatusCode} from '../../../support/actions/Api_getPokemon'


Given(/^Poke Api pokemon "([^"]*)" is requested$/, (poke) => {
	sendPokemonRequest(poke,'pokemon')
});

Then(/^poke response should contain status "([^"]*)"$/, (status) => {
	checkStatusCode('@pokemon',status)
});

