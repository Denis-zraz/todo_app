import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js, jsx, ts, tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jest-environment-jsdom',
    moduleDirectories: ['node_modules'],
    roots: ['src'],
    transform: {
        '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['@babel/preset-env'] }],
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    verbose: true,
};

export default config;
