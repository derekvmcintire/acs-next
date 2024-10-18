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
    "src/_api/**/*.ts",
    "src/_components/**/*.tsx",
    "src/_utility/**/*.ts",
    "src/app/**/*.ts",
    "!src/_db/**/*.mjs"
  ],
  coverageDirectory: '.coverage',
};

module.exports = createJestConfig(customJestConfig);
