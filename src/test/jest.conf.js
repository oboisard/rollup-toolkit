// eslint-disable-next-line @typescript-eslint/no-var-requires
// const tsconfig = require('../tsconfig.json');
// import tsconfig from '../tsconfig.json';

export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest'],
  },
  rootDir: '../../',
  modulePaths: ['<rootDir>'],
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  cacheDirectory: '<rootDir>/target/jest-cache',
  coverageDirectory: '<rootDir>/target/test-results/',
  testMatch: ['<rootDir>/src/test/**/@(*.)@(spec.ts?(x))'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  coveragePathIgnorePatterns: ['<rootDir>/src/test'],
  modulePathIgnorePatterns: [],
  moduleNameMapper: {},
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './target/test-results/',
        outputName: 'TESTS-results-jest.xml',
        ancestorSeparator: ' › ',
      },
    ],
  ],
  testEnvironment: 'jsdom',
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/src/test/__setup__/index.ts'],
};
