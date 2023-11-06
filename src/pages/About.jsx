import React, { useState, useEffect } from "react";
import "./Pages.scss";
import AboutCard from "../components/projet/ProjetCard";
const About = () => {
  const [appear, setAppear] = useState(false);

  // Utilisez useEffect pour ajouter la classe "show" après le rendu initial
  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <section className={`fade-in ${appear ? "show" : ""}`}>
      <p>
        About About About About About About About About About About About About
        About About About About About About About About About About About About
        About About About About About About About About About About About About
        About About About About About About About About About About About About
        About About About About About About About About About About About About{" "}
      </p>
    </section>
  );
};

export default About;
