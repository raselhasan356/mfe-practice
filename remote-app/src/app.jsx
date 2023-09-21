import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navigation/navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
}

export default App;
