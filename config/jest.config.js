module.exports = async () => {
    return {
        verbose: true,
        rootDir: "../",
        reporters: [
            "default"
        ],
        testTimeout: 15000,
        setupFilesAfterEnv: ["jest-allure/dist/setup"]
    };
};
