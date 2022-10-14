import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Career from "./page/Career";
import About from "./page/About";
import Contact from "./page/Contact";
import Project from "./page/Project";
export default function Navbar() {
  return (
    <>
      <div id="navbar_contnr" className="navbar_contnr">
        <div className="navbar-group">
          <ul className="navbar">
            <li className="nav-list-1 nav-list">
              <div>
                <Link to={"/"}>Home</Link>
              </div>
            </li>
            <li className="nav-list-1 nav-list">
              <div>
                <Link to={"/about"}>About</Link>
              </div>
            </li>
            <li className="nav-list-1 nav-list">
              <div>
                <Link to={"/career"}>Career</Link>
              </div>
            </li>
            <li className="nav-list-1 nav-list">
              <div>
                <Link to={"/contact"}>Contact</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}
