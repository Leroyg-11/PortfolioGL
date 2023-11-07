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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error odit
        tempora earum nesciunt adipisci facere ad eum repellendus illum fugiat,
        aliquid blanditiis odio dolor, suscipit nihil laboriosam libero
        laudantium unde asperiores? Iure nemo, cupiditate mollitia saepe
        voluptates tenetur doloribus officia ex cum ullam atque quia illo itaque
        voluptatibus repellat praesentium nostrum natus nesciunt id laborum
        repudiandae sit! Similique rem maiores harum nesciunt omnis quas et illo
        porro inventore accusantium deleniti perspiciatis tenetur ipsam
        laboriosam, at dolor ipsum obcaecati possimus aut non aliquid
        voluptatibus eum tempore facere? Quam, autem nobis. Aspernatur non
        corrupti voluptatibus minus voluptatum, sed eius, consequatur animi
        minima recusandae impedit eum aliquam laboriosam labore ab saepe
        cupiditate. In dolorem commodi a eius nobis? Dolorem deleniti esse
        itaque dicta cum odio quas beatae tenetur nulla, in iste mollitia
        accusantium voluptates praesentium corporis officia! Quidem aut enim eum
        maxime ullam. Corporis officiis facilis esse ipsa voluptatum, quaerat
        error sit quo nobis, nemo omnis exercitationem maiores reiciendis
        perspiciatis similique accusantium explicabo iusto? Dicta, consequatur
        eum, unde sunt iste pariatur nulla, voluptate sequi eligendi eos odio
        dolorum eveniet! Laborum earum sequi at dignissimos, perferendis
        officiis esse iste nesciunt pariatur iure consequuntur blanditiis
        nostrum porro eius impedit dolores inventore minima commodi quis
        voluptate et harum accusantium. Architecto quaerat accusamus delectus
        quibusdam! Optio doloremque vel nam placeat esse dicta pariatur sequi
        tenetur modi. Voluptate laboriosam quos odit at minus, illum doloribus
        explicabo sapiente nesciunt voluptas vel tempora sed dolorem natus nobis
        maiores provident unde! Ullam, neque? Distinctio, voluptas? Accusamus
        nobis numquam nihil distinctio, quod unde debitis expedita itaque modi
        dolor fugiat a in veritatis praesentium alias. Nam commodi, animi
        accusamus, soluta repellendus nihil nulla ipsum placeat amet autem
        labore repellat obcaecati asperiores culpa ratione ea illo eos
        distinctio quia earum quae doloremque magnam voluptatem! Unde cupiditate
        perferendis quas obcaecati dolorem, distinctio sequi qui amet illo
        corrupti incidunt laudantium repellat porro explicabo ducimus! Nisi
        facere alias consequatur iusto ipsa magnam vitae. Impedit velit alias
        porro asperiores. Beatae velit soluta quo quis eos nostrum inventore
        facere, harum error ab recusandae esse labore cupiditate praesentium,
        modi aliquam. Quisquam, fugiat dolor! Nisi nesciunt, quas atque porro
        eligendi doloremque harum distinctio, nulla, fugiat ipsa nihil iure ex
        commodi? Vitae asperiores iusto esse reiciendis, pariatur molestias
        doloribus illo dolore! Voluptatum, labore. Sunt illo tempore porro
        sapiente voluptas, culpa corrupti distinctio doloremque dolorum quasi
        officia iusto fuga ducimus explicabo quia ratione consectetur optio
        excepturi rem. Quos distinctio accusantium incidunt praesentium atque
        sed laborum quibusdam, totam, a officiis perferendis eius? Aut possimus
        exercitationem sint ab vel accusantium nihil minima, ad temporibus
        excepturi optio nisi officiis reiciendis consequuntur maxime fuga
        incidunt ullam quasi veritatis non hic. Exercitationem perferendis
        quibusdam vero aliquid harum saepe eligendi! Doloribus saepe eos dolor,
        molestiae illum fugit recusandae voluptas aliquam necessitatibus
        repellendus sint dolores eum veniam ullam est quidem impedit dolore non!
        Quas, repudiandae architecto! Nobis officiis alias ipsa optio repellat
        amet quam ratione consectetur, odio facilis fuga voluptates vel sint
        odit hic esse voluptatibus incidunt eos corporis nemo eaque? Aliquam
        voluptate pariatur magni, aspernatur necessitatibus ducimus impedit
        quisquam.
      </p>
    </main>
  );
};

export default Home;
