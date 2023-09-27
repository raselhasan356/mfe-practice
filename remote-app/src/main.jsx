import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./app";

import "./index.css";

import { StoreProvider } from "webpackHost/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
      <Toaster position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);
