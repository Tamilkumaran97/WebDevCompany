import React from "react";
import Home from "./Webdevcom/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Webdevcom/Navbar.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
