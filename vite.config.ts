import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 8080,
  },
  resolve: {
    alias: {
      "@enums": path.resolve(__dirname, "src/enums"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@containers/*": path.resolve(__dirname, "src/containers/*"),
    },
  },
});
