import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PetsPage from "./pages/PetsPage";
import AdoptPage from "./pages/AdoptPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
      </Routes>
    </Router>
  );
}

export default App;
