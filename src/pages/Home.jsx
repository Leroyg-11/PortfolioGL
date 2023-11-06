import React, { useEffect, useRef, useState } from "react";
import "./Pages.scss";
import About from "./About";
import Projet from "./Projet";
import Contact from "./Contact";

const Home = () => {
  const aboutRef = useRef();
  const projetRef = useRef();
  const contactRef = useRef();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    observer.observe(aboutRef.current);
    observer.observe(projetRef.current);
    observer.observe(contactRef.current);
  }, []);

  const [appear, setAppear] = useState(false);

  // Utilisez useEffect pour ajouter la classe "show" après le rendu initial
  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <div className="home-section">
      <div className={` fade-in ${appear ? "show" : ""}`}>
        <div className="container-hidden" ref={aboutRef}>
          <About />
        </div>

        <div className="container-hidden" ref={projetRef}>
          <Projet />
        </div>
        <div className="container-hidden" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
