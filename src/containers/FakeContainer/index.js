import React, { Component } from 'react';
import propTypes, { func, arrayOf, shape, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchAndParse, getPokemon } from '../../helper';
import { savePokemon } from '../../actions/index';
import { Card } from '../../components/Card/Card';
import './FakeContainer.css';
export class FakeContainer extends Component {
  constructor () {
    super();
  }
  getPokemon = async () => {
    const url = 'http://localhost:3001/types';
    const category = await fetchAndParse(url);
    const pokemon = await getPokemon(category);

    this.props.sendPokemonToStore(pokemon);
  }

  componentDidMount () {
    this.getPokemon();
  }

  renderedCards = () => {
    if (this.props.pokemon.length > 1) {
      const pokemonArray = this.props.pokemon.map(type => {
        return (
          <Card key={type.id}
            {...type}
            showPokemon={this.showPokemon}
          />
        );
      });

      return pokemonArray;
    } else {
      return (<img src={'../../../loading.gif'} alt="loading please wait"/>);
    }
  }

  render() {
    return (
      <section className="FakeContainer">
        {this.renderedCards()}
      </section>
    );
  }
}

const monster = shape({
  name: string,
  weight: number,
  picture: string
});

const monsterTypes = shape({
  id: string,
  name: string,
  pokemon: arrayOf(monster)
});

FakeContainer.propTypes = {
  pokemon: arrayOf(monsterTypes),
  sendPokemonToStore: func.isRequired
};

export const mapStateToProps = ({ pokemon }) => ({
  pokemon
});

export const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  sendPokemonToStore: (pokemon) => dispatch(savePokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
