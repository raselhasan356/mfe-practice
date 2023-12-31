import { Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
