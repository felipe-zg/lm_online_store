
module.exports = {
  testMatch: ['<rootDir>/__tests__/**/*.test.js'],
  modulePaths: ['<rootDir>/src/'],
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
  ],
  coverageDirectory: '<rootDir>/__tests__/react-coverage',
  coverageReporters: ['text-summary'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  testURL: 'http://localhost',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^~/(.*)": "<rootDir>/src/$1"
  }
}
