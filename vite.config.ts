import { defineConfig } from "vite";
import string from "vite-plugin-string"; // ✅ CORRECT


export default defineConfig({
  plugins: [string({
    include: "**/*.html"
  })]
});
