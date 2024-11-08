# Amature Cycling Stats

This is a demo website that is currently under development

## Features

ACS is built with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [React](https://www.react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## ACS API

- [Amature Cycling Stats API](https://github.com/derekvmcintire/acs-next-api) built with NextJS

## npm scripts

### Dev scripts o run application dev environment

- `npm run dev` – start dev server
- `npm run api` - start mock api server

### Build scripts

- `npm run build` – bundle application for production
- `npm run analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `npm run typecheck` – checks TypeScript types
- `npm run lint` – runs ESLint
- `npm run prettier:check` – checks files with Prettier
- `npm run jest` – runs jest tests
- `npm run jest:watch` – starts jest watch
- `npm run test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `npm run prettier:write` – formats all files with Prettier

## JSON-Server Mock API

### JSON-Server Documentation

This mock API was created with `json-server`. It allows you to define a JSON object inside a `.json` file, and will automatically create endpoints based on the shape of the data. Once you create your file and add your JSON object, you run the command below and will be able to call the endpoints as if they were a normal API. You can add multiple resources to a single file to have them available at the same time on the same local host.

JSON-server documentation can be found here: https://www.npmjs.com/package/json-server[https://www.npmjs.com/package/json-server]

### To start the server:

`json-server --watch src/_db/mock-api/endpoints.json --port 8000`

### Existing Endpoints

- http://localhost:8000/racers
- http://localhost:8000/racers?id=1
- http://localhost:8000/history
- http://localhost:8000/history?racerId=1

## Generate New Data

`npm run api:generate`

This command will run the script in `src/_db/mock-api/generate-endpoints.mjs` and will build new data to populate the JSON-Server endpoints.

### Developing

- Build a data generator, or hardcode a javascript object and add it to the `endpoints` object in `src/_db/mock-api/generate-endpoints.mjs`
