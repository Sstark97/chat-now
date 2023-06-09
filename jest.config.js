const nextJest = require("next/jest")

const createJestConfig = nextJest({
    dir: "./src",
})

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "@components/(.*)": "<rootDir>/src/components/$1",
        "@containers/(.*)": "<rootDir>/src/containers/$1",
        "@pages/(.*)": "<rootDir>/src/pages/$1",
        "@utils/(.*)": "<rootDir>/src/utils/$1",
        "@hooks/(.*)": "<rootDir>/src/hooks/$1",
        "@context/(.*)": "<rootDir>/src/context/$1",
        "@lib/(.*)": "<rootDir>/src/lib/$1",
    },
}

module.exports = createJestConfig(customJestConfig)
