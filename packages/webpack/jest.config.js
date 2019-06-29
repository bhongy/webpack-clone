'use strict';

module.exports = {
  rootDir: './src',
  moduleNameMapper: {
    '^@webpack/(.*)': '<rootDir>/$1',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
