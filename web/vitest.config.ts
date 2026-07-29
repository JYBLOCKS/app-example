import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        url: "http://localhost",
      },
    },
    setupFiles: ["src/utils/vitest.setup.ts"],
    exclude: [...configDefaults.exclude, "packages/template/*"],
  },
});
