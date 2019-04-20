# Host-neighborhood description service
   

## Build with:

1. React
1. Express
1. Sqlite


## API:

Google Maps API (https://developers.google.com/maps/documentation/)

## API helpers:

npm: google-map-react (https://www.npmjs.com/package/google-map-react)


## Getting Started:

To start the application:
1. Install dependencies: run ` npm i `
2. Start the server and build the bundle: run ` npm start `

To stop the application's server: 
 run ` npm stop `


## Integrating:

1. When in ssh, navigate to repository, outside main folder create a config file with the api key
2. Check if the axios requests go to absolute path :

- '/chat.jsx': get- and postMessages methods
- '/index.jsx': getHost method 

## Setting up database

Need to make sure that you're adding PostGreSQL Apt repository to ubuntu before you try to install. Even number versions are long term version (16.04 and 18.04) and are backwards compatible. Odd number versions (19.04) may not be backwards compatible and are more for testing of new features. But regardless, need to give access so in Ubuntu to postgresql website to be able to install:
https://askubuntu.com/questions/1088444/install-postgresql-9-4-on-ubuntu-18-04

