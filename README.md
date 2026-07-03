# CaseStudyGm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## JSON DB Server
Run `npm run server-start` for a json server. This will start mock up server to handle http request.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Login Credential for Application

User name:- Gmk
Password:- FIS123

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

Create a Spring Boot 3 authentication broker that acts as a SAML 2.0 Service Provider (SP).

Requirements:
- Use Spring Security SAML 2.0.
- Configure SAML login with an external IDP using metadata XML.
- Expose a login endpoint that redirects users to the IDP.
- Expose an Assertion Consumer Service (ACS) endpoint to receive and validate the SAML response.
- After successful authentication, extract the user's identity (username, email, roles).
- Generate and sign a JWT using RS256.
- Return the JWT to the desktop application (for now, a simple JSON response is sufficient).
- Keep the broker authentication-only. Do not proxy or call backend services.
- Organize the project with clear packages (config, controller, service, security, model).
- Externalize all SAML and JWT configuration in application.yml.
- Include sample configuration and comments explaining where to provide the IDP metadata, certificates, Entity ID, ACS URL, and JWT signing keys.
