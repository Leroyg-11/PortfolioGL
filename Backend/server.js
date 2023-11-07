const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

app.post("/send-email", (req, res) => {
  const { nom, prenom, telephone, email, message } = req.body;

  // Créez un transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Utilisez le service de messagerie de votre choix
    auth: {
      user: "votre_email@gmail.com", // Adresse e-mail d'envoi
      pass: "votre_mot_de_passe", // Mot de passe de l'adresse e-mail
    },
  });

  const mailOptions = {
    from: "votre_email@gmail.com",
    to: "email_destinataire@example.com",
    subject: "Nouveau message de formulaire de contact",
    text: `Nom: ${nom}\nPrénom: ${prenom}\nTéléphone: ${telephone}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'envoi de l'e-mail");
    } else {
      console.log("E-mail envoyé : " + info.response);
      res.send("E-mail envoyé avec succès");
    }
  });
});

app.listen(3000, () => {
  console.log("Serveur écoutant sur le port 3000");
});
