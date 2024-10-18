const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/_db/**/*.{mjs,ts}",
    "!src/_metrics/**/*.ts",
    "!src/_types/**/*.ts",
    "!src/global-constants.ts",
    "!src/app/sample/**/*.tsx"
  ],
  coverageDirectory: '.coverage',
};

module.exports = createJestConfig(customJestConfig);
