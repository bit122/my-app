import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import OpenSource from "./pages/OpenSource"; // Import the new Open Source page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opensource" element={<OpenSource />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
  