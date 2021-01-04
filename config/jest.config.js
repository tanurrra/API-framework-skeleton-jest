module.exports = async () => {
    return {
        verbose: true,
        rootDir: "../",
        reporters: [
            "default"
        ],
        testTimeout: 15000,
        setupFilesAfterEnv: ["<rootDir>/jest-allure/dist/setup"],
        collectCoverage: true
        // testResultsProcessor: "jest-allure-reporter"
    };
};
