import js from "@eslint/js";
import globals from "globals";
import * as reactHooks from "eslint-plugin-react-hooks";
import * as reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

const reactRefreshConfig =
  reactRefresh.default?.configs?.vite ??
  reactRefresh.configs?.vite ??
  reactRefresh.reactRefresh?.configs?.vite;

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat["recommended-latest"],
      reactRefreshConfig,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
]);
