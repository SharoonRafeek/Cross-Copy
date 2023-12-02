import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Randomstring from "randomstring";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";

function App() {
  const route = Randomstring.generate({ length: 5, charset: "alphabetic" });

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/" + route} />} />
          <Route path="/:route" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
