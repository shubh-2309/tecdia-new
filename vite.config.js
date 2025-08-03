import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/tecdia-new/", // Add this line
  plugins: [react()],
});
