import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/index.js",
      name: "Test1Component",
      fileName: "termene-test-component",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: { vue: "Vue" },
      },
    },
    // rollupOptions: {
    //   input: {
    //     main: path.resolve(__dirname, "src/components/main.js"),
    //   },
    //   external: ["vue"],
    // },
  },
});
