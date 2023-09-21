import { Route, Routes } from "react-router-dom";

import Header from "./header";
import HeaderMenu from "./headerMenu";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <HeaderMenu />
          </>
        }
      />
    </Routes>
  );
}

export default App;
