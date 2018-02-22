import React from 'react';
import propTypes, { arrayOf, shape, string, number } from 'prop-types';
import './Card.css';

export const Card = (type, showPokemon) => {
  const pokemonArray = type.pokemon.map(monster => {
    return (
      <div className="monster" key={monster.id}>
        <h6>{monster.name}</h6>
        <img src={monster.picture} alt={`picture of ${monster.name}`}/>
        <h6>Weight: {monster.weight}</h6>
      </div>
    );
  });

  const changeClass = (e) => {
    console.log(e.target);
  }

  return (
    <article className="Card" onClick={(e) => changeClass(e)}>
      <h2>{type.name}</h2>
      <div className="hidden-pkm">
        {pokemonArray}
      </div>
    </article>
  );
};

const pokemon = {
  id: number,
  name: string,
  weight: number,
  picture: string
}

Card.propTypes = {
  type: arrayOf(pokemon)
};