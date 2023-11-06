import React, { useEffect, useState } from "react";
import "./Pages.scss";
import ProjetCard from "../components/projet/ProjetCard";
import axios from "axios";

const Projet = () => {
  const [repos, setRepos] = useState([]);
  const [appear, setAppear] = useState(false);
  const getRepos = () => {
    axios
      .get("https://api.github.com/users/Leroyg-11/repos")
      .then((res) => {
        // console.log(res.data);
        setRepos(res.data);
        setAppear(true);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getRepos(); // Call the 'getRepos' function when the component mounts
  }, []);

  // Utilisez useEffect pour ajouter la classe "show" après le rendu initial
  useEffect(() => {
    setAppear(true);
  }, []);

  const reposWithOneStar = repos.filter((repo) => repo.stargazers_count === 1);
  console.log(reposWithOneStar);

  return (
    <section className={`projet-container fade-in ${appear ? "show" : ""}`}>
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
  );
};

export default Projet;
