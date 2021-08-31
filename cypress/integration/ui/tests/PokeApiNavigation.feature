@feature("CypressContainer")
Feature: Poke Api - Navigation 

As a Tester I want to run my automation test inside a docker container

@Navigation @suite("PokeApi") 
Scenario Outline: User should be able to navigate to the about section
Given User navigates to pokeapi with "<device>"
When clicks in about section
Then user should see "<question>"
Examples:
    |   device      |question      |
    |   browser     |What is this? |

