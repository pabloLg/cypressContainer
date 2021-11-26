@feature("LightHouseReport")
Feature: LightHouse report

As a Tester I want to run my automation test inside a docker container

@Navigation @suite("LightHouse") 
Scenario:LightHouse report POKEAPI
Given User navigates to pokeapi with "browser"
Then audit page with LightHouse