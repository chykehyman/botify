module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)':
      '<rootDir>/jest.mock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  coveragePathIgnorePatterns: ['node_modules', '.mock.ts', '.scss'],
};
