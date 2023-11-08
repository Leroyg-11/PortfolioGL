import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://leroyg-11.github.io/PortfolioGL",
  plugins: [react()],
});
