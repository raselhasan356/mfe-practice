import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes: {
        store: "http://192.168.9.101:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
