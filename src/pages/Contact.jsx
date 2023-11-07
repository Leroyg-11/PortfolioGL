import React, { useEffect, useState } from "react";
import "./Pages.scss";
const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour soumettre les données du formulaire.
    console.log(formData);
  };

  return (
    <main>
      <section>
        <form
          action="https://formsubmit.co/guillaumeleroy21@gmail.com"
          method="POST"
        >
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleInputChange}
          />

          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            value={formData.prenom}
            onChange={handleInputChange}
          />

          <label htmlFor="telephone">Téléphone :</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            required
            value={formData.message}
            onChange={handleInputChange}
          />

          <button type="submit" onSubmit={handleSubmit}>
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
