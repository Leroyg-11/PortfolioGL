import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`nav ${windowSize <= 768 ? "nav-mobile" : ""}`}>
      <ul className="nav-name">
        <Link to="/">
          <li>
            <i className="fa-solid fa-user-tie" />
            <p className="li-name">Leroy</p>
            <p>Guillaume</p>
          </li>
        </Link>
      </ul>
      <i className="fa-solid fa-bars hamburger-icon" onClick={toggleMenu}></i>

      <ul
        className={`nav-item ${
          (windowSize <= 768) & showMenu ? "nav-item-mobile hidden" : ""
        }`}
      >
        <Link className="nav-link-item" to="/">
          <li className="li-item">
            <i className="fa-solid fa-code animi"></i>
            <p className="animli">Home</p>
          </li>
        </Link>
        <Link className="nav-link-item" to="/about">
          <li className="li-item">
            <i className="fa-solid fa-terminal animi"></i>
            <p className="animli">About</p>
          </li>
        </Link>
        <Link className="nav-link-item" to="/projet">
          <li className="li-item">
            <i className="fa-solid fa-folder-open animi"></i>
            <p className="animli">Projet</p>
          </li>
        </Link>
        <Link className="nav-link-item" to="/contact">
          <li className="li-item">
            <i className="fa-regular fa-address-card animi"></i>
            <p className="animli">Contact</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
