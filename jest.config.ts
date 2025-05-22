/** @type { import('jest').Config} */

const config = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js, jsx, ts, tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
}

export default config;
