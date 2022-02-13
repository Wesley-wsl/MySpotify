module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.test.ts(x)"],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
}
