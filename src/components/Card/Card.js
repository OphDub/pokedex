import React from 'react';
import propTypes, { shape, string, number } from 'prop-types';

export const Card = (pokemon) => {
  const { name, picture, weight }  = pokemon
  return (
    <article className="Card">
      <h5>{name}</h5>
      <img src={picture} alt={`pic of ${name}`}/>
      <h6>{weight}</h6>
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