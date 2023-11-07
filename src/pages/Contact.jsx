import React, { useEffect, useState } from "react";
import "./Pages.scss";
const Contact = () => {
  const [appear, setAppear] = useState(false);

  // Utilisez useEffect pour ajouter la classe "show" après le rendu initial
  useEffect(() => {
    setAppear(true);
  }, []);
  return (
    <section>
      <h1>CONTACT</h1>

      <p className={`fade-in ${appear ? "show" : ""}`}>
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact
      </p>
    </section>
  );
};

export default Contact;
