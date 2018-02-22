import React, {Component} from 'react';
import propTypes, { arrayOf, shape, string, number } from 'prop-types';
import './Card.css';

export class Card extends Component {
  constructor () {
    super();
    this.state = {
      showing: 'hidden-pkm'
    }
  }

  pokemonArray = () => {
    return this.props.type.pokemon.map(monster => {
      return (
        <div className="monster" key={monster.id}>
          <h6>{monster.name}</h6>
          <img src={monster.picture} alt={`picture of ${monster.name}`}/>
          <h6>Weight: {monster.weight}</h6>
        </div>
      );
    });
  }

  changeClass = (e) => {
    console.log(e.target);
  }

  render () {
    return (
      <article className="Card" onClick={this.changeClass}>
        <h2>{this.props.name}</h2>
        <div className={this.state.showing}>
          {this.pokemonArray}
        </div>
      </article>
    )
  }
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