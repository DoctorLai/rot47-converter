import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Test configuration lives in vitest.config.js.
export default defineConfig({
  base: "/rot47-converter/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
