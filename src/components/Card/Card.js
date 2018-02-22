import React from 'react';
import propTypes, { shape, string, number } from 'prop-types';
import './Card.css';

export const Card = (type, showPokemon) => {
  const pokemonArray = type.pokemon.map(monster => {
    return (
      <div className="monster">
        <h6>{monster.name}</h6>
        <img src={monster.picture} alt={`picture of ${monster.name}`}/>
        <h6>Weight: {monster.weight}</h6>
      </div>
    )
  })

  return (
    <article className="Card" onClick={showPokemon}>
      <h2>{type.name}</h2>
      {/* {pokemonArray} */}
    </article>
  );
};

Card.propTypes = {
  pokemon: shape({
    name: string,
    weight: number,
    picture: string
  })
};