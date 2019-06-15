'use strict';

module.exports = {
  rootDir: './src',
  moduleNameMapper: {
    '^@webpack/(.*)': '<rootDir>/$1',
  },
  // `js` is needed for node_modules
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/__tests__/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
