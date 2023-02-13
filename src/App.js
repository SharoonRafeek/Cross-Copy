import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Randomstring from "randomstring";

function App() {
  const route = Randomstring.generate({ length: 5, charset: "alphabetic" });

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/" + route} />} />
          <Route path="/:route" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
