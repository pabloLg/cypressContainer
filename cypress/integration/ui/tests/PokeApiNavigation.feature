@feature("CypressContainer")
Feature: Poke Api - Navigation 

As a Tester I want to run my automation test inside a docker container

@Navigation @suite("PokeApi") 
Scenario Outline: User should be able to navigate to the about us section
Given User navigates to pokeapi with "<device>"
When clicks on about section
Then user should see "<section>"
Examples:   
    |   device      |section      |
    |   browser     |What is this? |
    |   iphone      |What is this? |

@Navigation @suite("PokeApi") 
Scenario Outline:  User should be able to navigate to Api policy
Given User navigates to pokeapi with "<device>"
When clicks on API section
Then user should see "<section>"
Examples:   
    |   device      |section         |
    |   browser     |Fair Use Policy |


