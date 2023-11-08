import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
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
    <main
      className={`home-section ${
        windowSize <= 768 ? "home-section-mobile" : ""
      }`}
    >
      <h1>Bienvenue </h1>
      <section>
        <div className="image-and-text">
          <p>
            <span class="pic"></span>
            Bonjour, je suis Guillaume Leroy. <br />
            <br />
            Développeur Web Junior à Lille, j'ai 28 ans. Suite à une
            reconversion de carrière, j'ai décidé de me lancer dans le
            développement web. <br /> <br />
            J'ai suivi une formation et des cours en ligne pour maîtriser les
            langages de programmation, notamment HTML, CSS, JavaScript, ainsi
            que des frameworks populaires tels que React et NodeJS. <br />
            Mon ambition est de m'investir dans des projets stimulants,
            d'acquérir une expérience pratique significative, et de participer à
            la création de solutions créatives et innovantes. Je suis
            actuellement ouvert aux opportunités de stage ou d'emploi dans le
            domaine du développement web.
          </p>
        </div>
      </section>
      <p>
        Exercitationem perferendis quibusdam vero aliquid harum saepe eligendi!
        Doloribus saepe eos dolor, molestiae illum fugit recusandae voluptas
        aliquam necessitatibus repellendus sint dolores eum veniam ullam est
        quidem impedit dolore non! Quas, repudiandae architecto! Nobis officiis
        alias ipsa optio repellat amet quam ratione consectetur, odio facilis
        fuga voluptates vel sint odit hic esse voluptatibus incidunt eos
        corporis nemo eaque? Aliquam voluptate pariatur magni, aspernatur
        necessitatibus ducimus impedit quisquam.
      </p>
    </main>
  );
};

export default Home;
