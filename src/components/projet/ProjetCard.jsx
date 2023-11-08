import React from "react";
import "./Card.scss";
const ProjetCard = (repos) => {
  const logoUrl = repos.logoUrl; // Retrieve logoUrl from props

  return (
    <article className="card flip-card">
      <div className="card-top">
        <img
          className="card-img"
          src={logoUrl}
          alt="Logo du projet"
          width="1920"
          height="2193"
        />
      </div>

      <div className="card-bottom flip-card-inner  ">
        <div className="card-content-description ">
          <h2 className="card-title">{repos.name}</h2>
          <p className="card-description">{repos.description}</p>
        </div>

        <div className="card-content-skill ">
          <ul className="skills">
            {repos.topics.map((topic, index) => {
              return (
                <li key={index} className="skill">
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flip-card-back">
          <h2>Lien vers le repo GitHub de {repos.name}</h2>
          <a href={repos.html_url}>
            <button className="card-button">Lien GitHub</button>
          </a>
        </div>
        {/* <button className="card-button">Lien GitHub</button> */}
      </div>
    </article>
  );
};

export default ProjetCard;
