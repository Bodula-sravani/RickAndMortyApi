import React, { useEffect, useState } from "react";
import "./RickAndMortyCharcaters.css";

function RickAndMortyCharacters() {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setCharacters(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching character data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <h1>Rick and Morty Characters</h1>
      <div className="grid-container">
        {characters.slice(0, 12).map((character) => (
          <div key={character.id} className="grid-item">
            <div className="image-container">
              <img src={character.image} alt={character.name}></img>
            </div>
            <div className="content-container">
              <article className="characterCard__Wrapper">
                <div className="characterCard__ContentWrapper">
                  <div className="section">
                    <a
                      href={character.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="externalLink__ExternalLink"
                      style={{ textDecoration: "none" }}
                    >
                      <h1>{character.name}</h1>
                    </a>
                    <span
                      className={`status ${character.status.toLowerCase()}`}
                    >
                      <span className="status__icon"></span>
                      {character.status} - {character.species}
                    </span>
                  </div>
                  <div className="section">
                    <span className="text-gray">Last known location: </span>
                    <br />
                    <a
                      href={character.location.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="externalLink__ExternalLink"
                    >
                      {character.location.name}
                    </a>
                  </div>
                  <div className="section">
                    <span className="text-gray">First seen in: </span>
                    <br />
                    <a
                      href={character.origin.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="externalLink__ExternalLink"
                    >
                      {character.origin.name}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default RickAndMortyCharacters;
