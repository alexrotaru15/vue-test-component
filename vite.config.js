import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "TestTermeneComponent",
      fileName: "termene-test-component",
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: { vue: "Vue" },
      },
    },
  },
});
