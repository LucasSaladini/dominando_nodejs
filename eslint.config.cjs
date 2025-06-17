const js = require("@eslint/js");
const globals = require("globals");
const prettier = require("eslint-config-prettier");
const eslintPluginPrettier = require("eslint-plugin-prettier");
const eslintConfigAirbnbBase = require("eslint-config-airbnb-base");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
      ...eslintConfigAirbnbBase.rules, // Regras do Airbnb
      ...prettier.rules,  // Regras do Prettier
    },
  },
];
