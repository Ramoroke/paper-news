import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//C O M P O N E N T S
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";

// P A G E S
import Home from "./pages/Home";
import Category from "./pages/Category";
import Story from "./pages/Story";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <Router>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:categoryPage" element={<Category />} />
        <Route path="/story/:storyId" element={<Story />} />
        {/* <Route path="/:categoryPage/:story" element={<Story />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
