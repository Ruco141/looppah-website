import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import perfectionist from "eslint-plugin-perfectionist";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-jsx-props": ["warn", {
        type: "alphabetical",
        order: "asc",
        groups: ["identifiers", "unknown", "aria-data", "state", "callbacks"],
        customGroups: [
          { groupName: "identifiers", elementNamePattern: ["key", "ref", "id", "name", "className"] },
          { groupName: "aria-data", elementNamePattern: ["aria-*", "data-*"] },
          { groupName: "state", elementNamePattern: ["disabled", "checked", "selected", "open", "loading", "readOnly", "required"] },
          { groupName: "callbacks", elementNamePattern: ["on*"] },
        ]
      }]
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;