import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";
import globals from "globals";
import jest from "eslint-plugin-jest";

export default defineConfig([
  // Ignored files
  { ignores: ["**/dist/", "**/node_modules/"] },

  // JavaScript
  {
    files: ["**/*.{js,cjs,mjs}"],
    ...eslint.configs.recommended,
    languageOptions: {
      globals: globals.node,
    },
  },

  // Tests
  {
    files: ["**/*.test.{js,cjs,mjs,ts,cts,mts}"],
    ...jest.configs["flat/recommended"],
  },

  // Prettier
  prettierConfig,
]);
