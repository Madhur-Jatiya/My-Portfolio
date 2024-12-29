import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import React from "react";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";
import Project from "./project/Project";
import Contact from "./contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
