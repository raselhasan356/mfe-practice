import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { StoreProvider, store } from "store/store";
// const { StoreProvider, store } = React.lazy(() => import("store/store"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: test-host-app</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
