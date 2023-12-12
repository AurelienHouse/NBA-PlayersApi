import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h3>{`${player.first_name} ${player.last_name}`}</h3>
      <p><strong>Position:</strong> {player.position}</p>
      <p><strong>Equipe actuelle:</strong> {player.team.full_name}</p>
      {/* Ajoute d'autres informations des joueurs selon les besoins */}
    </div>
  );
};

export default PlayerCard;
