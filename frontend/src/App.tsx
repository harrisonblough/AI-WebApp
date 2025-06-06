import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home/home";
import { Agent } from "./pages/agent/agent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Agent />} />
      </Routes>
    </>
  );
}

export default App;
