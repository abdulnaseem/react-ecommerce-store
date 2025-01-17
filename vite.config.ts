import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.ts", // Make sure it's .js if using PostCSS
  },
  base: '/', // Change to '/' if not deploying to a subdirectory
  server: {
    hmr: true,  // Ensure HMR is enabled
    port: 3000, // Default port; change if needed
    open: true, // Automatically open the app in the browser
  },
});
