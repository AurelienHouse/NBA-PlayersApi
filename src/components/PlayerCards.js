import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import './PlayerCards.css'; // Assure-toi d'ajuster le chemin selon l'emplacement de ton fichier CSS

const PlayerCards = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://www.balldontlie.io/api/v1/players');
        const data = await response.json();

        setPlayers(data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des joueurs', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h2>Cartes des Joueurs</h2>
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayerCards;
