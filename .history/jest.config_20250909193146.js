module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
};