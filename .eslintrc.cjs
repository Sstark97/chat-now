module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:testing-library/react",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "next",
        "next/core-web-vitals",
        "plugin:jest/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "testing-library"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
    overrides: [
        {
            files: ["src/test/*.test.jsx"],
            rules: {
                "testing-library/prefer-user-event": "error",
                "testing-library/prefer-screen-queries": "error",
                "testing-library/await-async-query": "error",
                "testing-library/no-debugging-utils": "error",
                "testing-library/no-await-sync-events": "error",
                "testing-library/no-node-access": "error",
            },
        },
    ],
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
}
