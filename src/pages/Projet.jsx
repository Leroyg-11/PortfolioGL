import React, { useEffect, useState } from "react";
import "./Pages.scss";
import ProjetCard from "../components/projet/ProjetCard";
import axios from "axios";

const Projet = () => {
  const [repos, setRepos] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null); // Ajoutez un état pour le sujet sélectionné

  const getRepos = () => {
    axios
      .get("https://api.github.com/users/Leroyg-11/repos")
      .then((res) => {
        // console.log(res.data);
        setRepos(res.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getRepos(); // Call the 'getRepos' function when the component mounts
  }, []);

  const reposWithOneStar = repos.filter((repo) => repo.stargazers_count === 1);
  console.log(reposWithOneStar);

  return (
    <main>
      <h1>PROJETS</h1>

      <section className="projet-container">
        {reposWithOneStar.map((repo) => {
          const logoUrl = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Logo.png`;

          return (
            <ProjetCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              topics={repo.topics}
              language={repo.language}
              logoUrl={logoUrl}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Projet;
