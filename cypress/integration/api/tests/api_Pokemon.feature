@feature("PokeApi")
Feature: Pokemon api

  As a user I want to run a api testing inside docker 


  @API @suite("Poke_Api")
  Scenario Outline: Checking pokemon  API 
    Given Poke Api pokemon "<pokemon>" is requested   
    Then poke response should contain status "<status>"    
    Examples:
      | pokemon    |status   |
      | ditto      |200   |
   
