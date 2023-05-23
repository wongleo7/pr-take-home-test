## Intro

This is an app that calculates the Modulo Three using finite state machine.

## Getting Started

To get started, make sure you are on the latest version of pnpm (e.g. 8.5.1) or your favorite package manager.

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project is bootstrapped with Nextjs 13, styled with Tailwind.

## Github

https://github.com/wongleo7/pr-take-home-test

## Deploy

App is automatically deployed to vercel at: https://pr-take-home-test.vercel.app/

## Testing

Unit tests and E2E testing is powered by Cypress: https://cloud.cypress.io/projects/6bh7vx/

To run tests, make sure you have all dependencies set up for cypress: https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies

Then run:

```bash
pnpm run test
```

Or to run the component tests:

```bash
pnpm run test --component
```

note: on windows WSL, there is a problem with cypress running gpu acceleration: https://github.com/cypress-io/cypress/issues/25357