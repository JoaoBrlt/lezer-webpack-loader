module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  overrides: [
    // Tests
    {
      files: ["**/__tests__/**/*.js", "**/*.{spec,test}.js"],
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
    },
  ],
};
