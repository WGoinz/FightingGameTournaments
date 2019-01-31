# FightingGameTournaments - Unit 3 Project
Tournament Results Tracker

## Sources:
1. Request - https://www.npmjs.com/package/request
2. Bootstrap 4 - https://getbootstrap.com/docs/4.0/getting-started/introduction/
3. Date - https://www.geeksforgeeks.org/javascript-date-now/
4. Smash.gg - https://help.smash.gg/faq/misc/rest-api-access-legacyold

## Overview/Description
Project 3 is using the MERN Stack
I created an app that could accept a smash.gg "slug"(shortlink) and create a tournament based off of that slug.
THERE IS NO PRE EXISTING DATA FOR THIS PROJECT. EVERYTHING IS CREATED BY THE EXTERNAL API CALL.

Once a valid slug is entered, the user can select the rendered tournament. To show the events, click the "Show Events" button. This will load the specific events. Events have a specific ID that an additional api call has to be made to get the data for standings. When you click "Show Standings" that call is made and the standings are rendered on a separate page.

## Deployment
* Heroku - https://secret-harbor-93575.herokuapp.com/
* GitHub - https://github.com/WGoinz/FightingGameTournaments

## Technologies Used:
* Bootstrap 4
* React
* MongoDB
* Mongoose
* Express.JS
* Styled-Components

## Fonts
Google Fonts - https://fonts.google.com/featured/Headline-Worthy+Serifs?selection.family=Sanchez

## Trello
https://trello.com/b/i2xoGmGJ/fighting-game-tournaments

## Version 2 Update
* User Authentication
* GraphQL API Calls - https://developer.smash.gg/docs/intro
* Population of all Tournaments based off User

## Extra Tools Used
1. Stack Overflow - https://stackoverflow.com/questions/44519001/how-can-i-use-one-foreach-loop-to-iterate-over-two-different-arrays
2. Sorting Object - https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value

## Wireframes
![ERD](/public/images/BlankERD.png)
![Tournament WireFrame](/public/images/FightingGameTournament.png)
* May differ from final product