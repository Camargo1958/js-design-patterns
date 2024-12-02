import globals from "globals";

//import path from "path";
//import { fileURLToPath } from "url";
//import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import tseslint from 'typescript-eslint';

// mimic CommonJS variables -- not needed if using CommonJS
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {files: ["**/*.js","**/*.ts"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
  ),
  {rules: {
    "no-unused-vars": "warn",
    "no-undef": "error"
  }}
];