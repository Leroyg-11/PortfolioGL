import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { Link, NavLink } from "react-router-dom";

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
    <nav>
      {windowSize > 1008 ? (
        // Si la largeur de la fenêtre est inférieure à 960px, affichez cela
        <div className="nav-full-screen">
          <ul className="nav-name">
            <NavLink className="nav-name" to="/">
              <i className="fa-solid fa-user-tie"></i>
              <li className="li-name">Leroy</li>
              <li>Guillaume</li>
            </NavLink>
          </ul>
          <ul className="nav-item">
            <NavLink to="/">
              <li className="li-item">
                <i className="fa-solid fa-code"></i>
                Home
              </li>
            </NavLink>

            <NavLink className="nav-name" to="/about">
              <li className="li-item">
                <i className="fa-solid fa-terminal"></i>About
              </li>
            </NavLink>

            <NavLink className="nav-name" to="/projet">
              <li className="li-item">
                <i className="fa-solid fa-folder-open"></i>Projets
              </li>
            </NavLink>
            <NavLink className="nav-name" to="/contact">
              <li className="li-item">
                <i className="fa-regular fa-address-card"></i>Contact
              </li>
            </NavLink>
          </ul>
        </div>
      ) : (
        <div className="nav-mobile">
          <ul className="nav-name">
            <i className="fa-solid fa-user-tie"></i>
            <li className="li-name">Leroy</li>
            <li>Guillaume</li>
          </ul>
          <i
            className="fa-solid fa-bars hamburger-icon"
            onClick={toggleMenu}
          ></i>
          <div className={`hamburger-menu ${showMenu ? "" : "hidden"}`}>
            <ul className="nav-item-mobile">
              <NavLink to="/">
                <li className="li-item">
                  <i className="fa-solid fa-code"></i>
                  Home
                </li>
              </NavLink>
              <NavLink className="nav-name" to="/about">
                <li className="li-item">
                  <i className="fa-solid fa-terminal"></i>About
                </li>
              </NavLink>

              <NavLink className="nav-name" to="/projet">
                <li className="li-item">
                  <i className="fa-solid fa-folder-open"></i>Projets
                </li>
              </NavLink>
              <NavLink className="nav-name" to="/contact">
                <li className="li-item">
                  <i className="fa-regular fa-address-card"></i>Contact
                </li>
              </NavLink>
            </ul>
          </div>{" "}
        </div>
      )}
    </nav>
    // <nav>
    //   <ul className="nav-name">
    //     <li className="li-name">
    //       <i className="fa-solid fa-user-tie"></i>Leroy
    //     </li>
    //     <li>Guillaume</li>
    //   </ul>

    //   <div className={`hamburger-menu ${showMenu ? "" : "hidden"}`}>
    //     <i className="fa-solid fa-bars hamburger-icon" onClick={toggleMenu}></i>
    //     <ul className={`nav-item ${showMenu ? "" : "visible"}`}>
    //       <li className="li-item">
    //         <i className="fa-solid fa-code"></i>
    //         Home
    //       </li>
    //       <li className="li-item">
    //         <i className="fa-solid fa-terminal"></i>About
    //       </li>
    //       <li className="li-item">
    //         <i className="fa-solid fa-gears"></i>Service
    //       </li>
    //       <li className="li-item">
    //         <i className="fa-solid fa-folder-open"></i>Projet
    //       </li>
    //       <li className="li-item">
    //         <i className="fa-regular fa-address-card"></i>Contact
    //       </li>
    //     </ul>
    //   </div>

    //   <ul className="nav-item">
    //     <li className="li-item">
    //       <i className="fa-solid fa-code"></i>
    //       Home
    //     </li>
    //     <li className="li-item">
    //       <i className="fa-solid fa-terminal"></i>About
    //     </li>
    //     <li className="li-item">
    //       <i className="fa-solid fa-gears"></i>Service
    //     </li>
    //     <li className="li-item">
    //       <i className="fa-solid fa-folder-open"></i>Projet
    //     </li>
    //     <li className="li-item">
    //       <i className="fa-regular fa-address-card"></i>Contact
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavBar;
