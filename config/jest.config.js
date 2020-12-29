module.exports = async () => {
    return {
        verbose: true,
        rootDir: "../",
        reporters: [
            "default"
        ],
        testTimeout: 15000,
        setupFilesAfterEnv: ["<rootDir>/node_modules/jest-allure/dist/setup"],
        collectCoverage: true,
        testResultsProcessor: "jest-allure-reporter"
    };
};
