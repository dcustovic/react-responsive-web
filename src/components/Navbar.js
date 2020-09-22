import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  // state
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // functions
  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(); //so that it only renders 1 time
  });

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* navigation bar */}
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            WEBSITE
          </Link>

          {/* menu icon */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          {/* menu icon */}

          {/* menu  links */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--medium">
                    SIGN UP
                  </Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP!
                  </Button>
                </Link>
              )}
            </li>
          </ul>
          {/* menu links */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
