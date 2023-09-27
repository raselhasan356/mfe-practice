import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      remotes: {
        webpackHost: {
          external: `http://192.168.9.101:5000/remoteEntry.js`,
          format: "var",
          from: "webpack",
        },
      },
      exposes: {
        "./RemoteNavbar": "./src/components/navigation/navbar",
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
