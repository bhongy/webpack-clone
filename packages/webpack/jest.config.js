'use strict';

module.exports = {
  rootDir: './src',
  // `js` is needed for node_modules
  moduleFileExtensions: ['js', 'ts'],
  // testEnvironment: 'node',
  testMatch: ['<rootDir>/**/?(*.)+(test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
