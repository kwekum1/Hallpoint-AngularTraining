# APM

Angular training starter (product list) upgraded to **Angular 22**.

## Development server

Run `npm start` (`ng serve -o`). Navigate to `http://localhost:4200/`.

## Build

Run `npm run build`. Artifacts go to `dist/APM`.

## Unit tests

Run `npm test` (Karma + Jasmine, Chrome Headless).

## Lint

Run `npm run lint` (ESLint via `angular-eslint`). TSLint was removed upstream.

## E2E

Protractor was removed with modern Angular CLI. The `npm run e2e` script is a no-op placeholder; add Playwright or Cypress if you need e2e coverage.
