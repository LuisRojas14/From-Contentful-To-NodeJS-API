import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import ErrorPage from "./ErrorPage";

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div>
          <Link to="/Home" className="nav-link">
            {" "}
            Home
          </Link>
          <Link to="/Recipes" className="nav-link">
            {" "}
            Recipes
          </Link>
        </div>
        <div>
          <span className="welcome">Welcome</span>
        </div>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
