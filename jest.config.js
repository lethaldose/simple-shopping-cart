export default {
  rootDir: "src",
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/../jest.setup.ts"],
  coverageReporters: ["json", "lcov"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 80,
      lines: 80,
      functions: 80,
    },
  },
};
