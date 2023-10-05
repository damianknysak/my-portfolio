import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PostsAndComms from "./Pages/PostsAndComms";
import OurTrip from "./Pages/OurTrip";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/posts-and-comms" element={<PostsAndComms />} />
        <Route path="projects/travel-active" element={<OurTrip />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
