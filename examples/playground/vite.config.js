import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// chibivueで実装したものをimport出来るようにエイリアスを張る
const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));
export default defineConfig({
  resolve: {
    alias: {
      chibivue: path.resolve(dirname, "../../packages"),
    },
  },
});
