# FridayClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Api
It is using OpenAPI to generate the endpoints. The definition file is in the root folder `openapi.json` file.
When you add new definitions to this file please run `node_modules/.bin/ng-openapi-gen -i openapi.json`.

## Flex Layout
It is using flex layout since we want it mobile friendly (first mobile). There are other options that could be used like Grid Layout.

## Retry (when api fails)
Since the backend can be unstable from time to time I decided to retry the api calls automatically when it fails (maximum of 3 tries). If it keeps failing after those 3 tries, an error message is displayed.

## TODO
- fix layout for desktop
- filter component: user should be able to type in an input and filter lists
- filter vehicle by body and fuel types: can be a select for each filter
- create an interceptor for api calls that will retry when it fails
- add a nice hourglass for loading
- add icons when lists are expanded or not
- create a react app