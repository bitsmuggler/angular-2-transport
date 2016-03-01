# angular-2-transport
![Heroku](https://heroku-badge.herokuapp.com/?app=angular-2-transport)

## What is angular-2-transport?
angular-2-transport is a demo app made with [Angular 2](http://wwww.angular.io). It shows some of the new Angular 2 core concepts and it can be used as scaffolding.
The client connects to the swiss public transport api.

## Concepts
* Components and its file structure
* Dependency Injection
* Http-Client with RxJS Observables
* Data-Binding
* Providers and Directives


## Live-Demo
Check out the demo on [Heroku](https://angular-2-transport.herokuapp.com)

(CI-/CD Build from the master-branch)

## Local Development
Start the node package manager.
    npm install

As webserver we recommend the live-server
    npm install live-server -g
    
Or you can use the harp server. Harp is declared as npm dependency due to heroku.
    node /node_modules/bin/harp server . --port 80
or install it globally
    harp server . ---port 80

## Running on heroku
1. Create an heroku-app
2. Connect your github-fork
3. Run the heroku build. Done.