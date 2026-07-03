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

I need you to understand the target authentication architecture before suggesting any implementation.

Current environment:

* Frontend 1: Existing Angular web application using OAuth/OIDC.
* Frontend 2: New .NET desktop application.
* Backend: Existing Java application deployed on Oracle WebLogic 14.
* Backend services (SOAP/REST) are already in production and should remain unchanged.
* WebLogic Security Realm is already configured to validate JWTs for the Angular application.

New requirement:

* The .NET desktop application must authenticate users using SAML 2.0 with an external Identity Provider (IDP).
* We do NOT want to change the existing backend business services.
* We do NOT want to introduce an API Gateway or proxy all backend requests.
* The authentication component should only handle login.

Proposed architecture:

1. The .NET desktop application launches the browser for login.
2. A Java broker application (deployed as a WAR on WebLogic 14) acts as the SAML 2.0 Service Provider (SP).
3. The broker redirects the browser to the external SAML IDP.
4. The IDP authenticates the user and posts the SAML Response back to the broker's Assertion Consumer Service (ACS).
5. The broker validates the SAML assertion using Oracle WebLogic's native SAML capabilities if possible (avoid OpenSAML/Shibboleth unless absolutely necessary).
6. After successful authentication, the broker returns an authentication token (preferably JWT) to the .NET desktop application.
7. The .NET desktop application uses that token when calling the existing WebLogic SOAP/REST services.
8. The existing backend services should continue using the current JWT validation mechanism in WebLogic Security Realm and should not need to know whether the user originally authenticated via OAuth or SAML.

Please review this architecture and:

* Identify any flaws or incorrect assumptions.
* Explain whether WebLogic's native SAML implementation can support this design.
* Explain the responsibilities of the broker versus WebLogic.
* Recommend the simplest production-ready implementation that minimizes changes to the existing WebLogic application and backend services.
* If any part of this design is not feasible with WebLogic 14, explain why and suggest the closest supported alternative.
