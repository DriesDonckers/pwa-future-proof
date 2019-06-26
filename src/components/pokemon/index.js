import React from 'react';

import './pokemon.css';

const Pokemon = ({ pokemon }) => (
  <div className="pokemon">
    <img src={pokemon.sprites.front_default} alt="sprite" />
    <p>{pokemon.order}. {pokemon.name.toUpperCase()}</p>
  </div>
);

export default Pokemon;