import React, { useState, useEffect } from "react";
import "./Pages.scss";
import AboutCard from "../components/projet/ProjetCard";
import avatar from "../assets/Avatar.jpg";
const About = () => {
  const [appear, setAppear] = useState(false);

  // Utilisez useEffect pour ajouter la classe "show" après le rendu initial
  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <section className={`fade-in ${appear ? "show" : ""}`}>
      <h1>ABOUT</h1>

      <p>
        About me : <br />
        <br />
        About About About About About About About About About About About About
        About About About About About About About About About About About
      </p>
      <p>
        About me : <br />
        <br />
        About About About About About About About About About About About About
        About About About About About About About About About About About
      </p>
    </section>
  );
};

export default About;
