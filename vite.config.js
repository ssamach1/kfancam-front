import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, "src/helpers"),
      components: path.resolve(__dirname, "src/components"),
      consts: path.resolve(__dirname, "src/consts"),
      pages: path.resolve(__dirname, "src/pages"),
      icons: path.resolve(__dirname, "src/icons"),
      video: path.resolve(__dirname, "src/video"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    historyApiFallback: true,
    open: true,
    strictPort: true,
  },
  build: {
    outDir: "dist",
  },
});
