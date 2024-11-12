module.exports = {
    parser: "@babel/eslint-parser",
    extends: ["eslint:recommended"],
    env: {
        node: true,
        mocha: true,
    },
    rules: {
        "space-before-function-paren": ["error", "never"],
        indent: ["error", 4],
        quotes: ["error", "double"],
    },
};
