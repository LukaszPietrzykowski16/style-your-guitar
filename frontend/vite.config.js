import { defineConfig } from "vite";

export default defineConfig({
  base: "/style-your-guitar/",
  server: {
    host: "0.0.0.0",
    fs: {
      strict: false,
    },
  },
});
