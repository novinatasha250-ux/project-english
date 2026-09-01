import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Module01 from "./components/Module01";
import Learn01 from "./components/Learn01";
import Project01 from "./components/Project01";

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <Home />
        }
      />

      <Route
        path="/project01"
        element={
          <Module01 />
        }
      />

      <Route
        path="/project01/grammar"
        element={
          <Learn01 />
        }
      />

      <Route
        path="/project01/practice"
        element={
          <Project01 />
        }
      />

    </Routes>
  );
}