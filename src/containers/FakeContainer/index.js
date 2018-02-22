import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchAndParse } from '../../helper';
import { getPokemon } from '../../helper';
import { savePokemon } from '../../actions/index';
import { Card } from '../../components/Card/Card';
export class FakeContainer extends Component {
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
    
  }

  render() {
    return (
      <section className="FakeContainer">
      </section>
    );
  }
}

FakeContainer.propTypes = {
  sendPokemonToStore: func.isRequired,
};

export const mapStateToProps = ({ pokemon }) => ({
  pokemon
});

export const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  sendPokemonToStore: (pokemon) => dispatch(savePokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
