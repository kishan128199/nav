import React, { createContext, useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Career from "./page/Career";
import About from "./page/About";
import Contact from "./page/Contact";
import Project from "./page/Project";
import "../src/style/navStyle.css";
let ContextVal = createContext();
export default function Navbar() {
  let [scroll, setScroll] = useState(null);
  let [value, setValue] = useState(null);
  let ref = useRef("");

  let myStyle = {
    maxWidth: `${window.screen.width}px`,
  };
  useEffect(() => {
    setValue(ref.current.children[0].offsetTop);
  }, []);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY <= (value || 0)) {
      setScroll(null);
    } else {
      setScroll("scroll");
    }
  });
  return (
    <>
      <ContextVal.Provider value={{ value, setValue }}>
        <div id="navbar_contnr" className={`navbar_contnr ${scroll}`} ref={ref}>
          <div className="nav-group">
            <div className="company-logo-nav-btn-contnr">
              <div className="nav-btn-contnr">
                <button className="nav-btn">
                  <svg viewBox="0 20 100 35" width="19" height="19">
                    <rect width="100" height="14"></rect>
                    <rect y="60" width="100" height="14"></rect>
                  </svg>
                </button>
              </div>
              <div className="company-name">
                SCALE<span>TECH</span>
              </div>
            </div>
            <div className={`navlist-group`} style={myStyle}>
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
            <div className="quete-btn-contnr">
              <button className="quete-btn">Start a Project</button>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </ContextVal.Provider>
    </>
  );
}
