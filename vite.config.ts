import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Forces a single, consistent pre-bundle of this package's dual ESM/CJS
    // exports - without it the dev server (only the dev server; production
    // builds are unaffected) can end up resolving two separate React
    // instances via this dependency, tripping "Invalid hook call".
    include: ["@phosphor-icons/react"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ["import", "color-functions", "global-builtin"],
      },
    },
  },
});
