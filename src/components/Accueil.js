import React from 'react';
import PlayerCards from './PlayerCards';
import AnimationCard from './AnimationCard';

const Accueil = () => {
  return (
    <div>
      <h1>Club de Basket</h1>
      <p>Bienvenue sur notre site web</p>

      {/* <AnimationCard /> */}
      <PlayerCards />
    </div>
  );
}

export default Accueil;