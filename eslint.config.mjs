import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import perfectionist from "eslint-plugin-perfectionist";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-jsx-props": ["warn", {
        type: "custom",
        order: "asc",
        groups: ["identifiers", "attributes", "aria-data", "state", "callbacks", "unknown"],
        customGroups: {
          identifiers: ["key", "ref", "id", "name", "className"],
          "aria-data": ["aria-*", "data-*"],
          state: ["disabled", "checked", "selected", "open", "loading", "readOnly", "required"],
          callbacks: ["on*"],
        }
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