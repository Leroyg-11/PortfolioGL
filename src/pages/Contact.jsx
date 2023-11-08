import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSuccessMessageClose = () => {
    setSuccessMessage("");
  };

  const form = useRef();

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r012cd6",
        "template_j4ow6n3",
        form.current,
        "Lon5Jzk7nxbfjrV8O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSuccessMessage("Votre message a été envoyé avec succès.");
    setNom("");
    setEmail("");
    setTelephone("");
    setMessage("");
  };

  return (
    <main>
      <h1>CONTACTEZ MOI</h1>
      <section>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <label>Nom</label>
            <input
              type="text"
              name="user_name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Telephone</label>
            <input
              type="number"
              name="user_phone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" value="Send" />
          </form>
          <div
            className={`message-container ${successMessage ? "" : "hidden"}`}
          >
            {successMessage && (
              <>
                <p
                  className="close-message"
                  onClick={handleSuccessMessageClose}
                >
                  x
                </p>
                <p className="success-message">{successMessage}</p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
