export function sendPokemonRequest(pokemon,alias){
    cy.api({
        method: "POST", 
        url: `${Cypress.config('baseApi')}/pokemon/${pokemon}`,
    }).as(alias)

}
export function checkStatusCode(alias, statusCode){
    cy.get(alias).then((response) => {
        expect(response).property('status').to.equal(Number(statusCode));
      })
}



	