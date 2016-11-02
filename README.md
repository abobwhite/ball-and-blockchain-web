Ball-And-Blockchain Web Client

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with [TypeScript](https://www.typescriptlang.org/).
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

## Table of Contents

* [Dependencies](#dependencies)
* [Installing](#installing)
* [Running the app](#running-the-app)
* [Developing](#developing)
* [Testing](#testing)

## Dependencies

What you need to run this app:
* `node` and `npm`
* Ensure you're running Node (`v4.4.x`+) and NPM (`3.9.x`+)

## Installing

* `npm install` to install all dependencies

## Developing

### Running the app w/ dev server

After you have installed all dependencies you can now run the app with:
`npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:7777`. 

## Build files for distribution

* `npm run build`
* Outputs to `/dist` folder. Copy these contents into whichever web server you would like to host the app

## Testing

### Unit Tests

* single run: `npm run test`
* live mode (TDD style): `npm run test-watch`
