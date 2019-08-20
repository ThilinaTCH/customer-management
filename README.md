# Customer Management Portal

This is a customer information management portal developed using MEAN stack.
Front-end has developed using Angular7 and API is implemented using LoopBack which is developed on top of Node and Express. For more detail, [LoopBack](http://loopback.io).
MongoDB is used as the Database.

Make sure that you are running at least node 8.x and npm 6.x by running node -v and npm -v in a terminal. Older versions may not support some features and produce errors, but newer stable versions are always recommended.

# Client setup

## Development server

Checkin to the `client` folder and run `npm install` to install all dependancies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Install Angular CLI globally usign the command `npm install -g @angular/cli`
Then you can use `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. Please refer [Angular CLI doc](https://cli.angular.io/) for more information

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Server/DB setup

## Setup MongoDB instance

This app needs to have MongoDB installed and service up and running.
Please follow [installation guide](https://docs.mongodb.com/manual/administration/install-community/)
No need to create DB or tables manually as LoopBack will setup the DB schema on start, so make sure MongoDB service running before server starts.
You can find DB config under `server/datasource.json`, please update the config according to your DB host, port and login information.

## Start API 

Run `npm install` in root folder.
Run `node .` to start development server.
Server will be running on `http://localhost:3000` also you can see the API explorer from `http://localhost:3000/explorer/`, which provide sample request format of REST API to use by external apps.

## Code scaffolding

Install loopback-cli by running `npm install -g loopback-cli` to use LookBack scaffolding feature to add new models or DB connections [doc](https://loopback.io/doc/en/lb3/Command-line-tools.html)

# Commit message convention

Please follow GIT commit message convention as in [here](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)