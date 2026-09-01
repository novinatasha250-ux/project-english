import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import Project01 from "./components/Project01";
import Module01 from "./components/Module01";
import Learn01 from "./components/Learn01";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <Home onStart={() => setPage("module1")} />
      )}

      {page === "module1" && (
  <Module01
    onBack={() => setPage("home")}
    onOpenGrammar={() => setPage("learn1")}
    onOpenHomework={() => alert("Homework coming soon!")}
  />
)}

      {page === "learn1" && (
        <Learn01
          onContinue={() => setPage("project1")}
        />
      )}

      {page === "project1" && (
        <Project01 />
      )}
    </>
  );
}