import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  {
    "extends": [
      // ...other extends configurations
      "plugin:prettier/recommended" // This must be the last element in "extends"
    ],
    "rules": {
      "prettier/prettier": "error" // Ensures Prettier formatting is enforced as an ESLint rule
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);




