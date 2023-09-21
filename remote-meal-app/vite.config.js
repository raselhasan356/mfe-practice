import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteMealApp",
      filename: "remoteEntry.js",
      remotes: {
        //remoteApp: "http://localhost:5001/assets/remoteEntry.js",
        store: "http://192.168.9.101:5000/remoteEntry.js",
      },
      exposes: {
        "./RemoteDashboard": "./src/App",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
