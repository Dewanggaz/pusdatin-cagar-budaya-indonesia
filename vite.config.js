import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/pusdatin-cagar-budaya-indonesia/",
  server: {
    port: 5173,
    open: true,
  },
});