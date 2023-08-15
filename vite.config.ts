import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import sassDts from "vite-plugin-sass-dts";
// import { fileURLToPath } from "url";
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles" as common;`,
  //       importer(...args) {
  //         if (args[0] !== "@/styles") {
  //           return;
  //         }

  //         return {
  //           file: `${path.resolve(__dirname, "./src/assets/styles")}`,
  //         };
  //       },
  //     },
  //   },
  // },
  plugins: [
    react(),
    // sassDts({
    //   enabledMode: ["development", "production"],
    //   global: {
    //     generate: true,
    //     outputFilePath: path.resolve(__dirname, "./src/style.d.ts"),
    //   },
    //   sourceDir: path.resolve(__dirname, "./src"),
    //   outputDir: path.resolve(__dirname, "./dist"),
    // }),
  ],
});
