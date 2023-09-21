import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./RemoteNavBar": "./src/NavBar",
        "./RemoteLoginForm": "./src/LoginForm",
        "./remoteUtilityFunctions": "./src/utils/functions.js",
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
