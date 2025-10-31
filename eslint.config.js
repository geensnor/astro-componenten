import astroPlugin from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";

export default [
  // Apply to all files
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node.js globals
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        console: "readonly",
      },
    },
    rules: {
      // We don't want to leak logging into our user's console unless it's an error
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },

  // Astro recommended config
  ...astroPlugin.configs.recommended,

  // Astro files
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
  },

  // TypeScript files
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
  },
];
