module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/(components|pages)/**/*.ts(x)", "!**/_app.tsx", "!**/_document.tsx"],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy"
    }
}
