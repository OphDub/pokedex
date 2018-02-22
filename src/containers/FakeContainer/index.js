import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchAndParse } from '../../helper';
import { getPokemon } from '../../helper';
import { savePokemon } from '../../actions/index';
class FakeContainer extends Component {
  getPokemon = async () => {
    const url = 'http://localhost:3001/types';
    const intialFetch = await fetchAndParse(url);
    getPokemon(intialFetch);

    // this.props.sendPokemonToStore(pokemon);
  }

  componentDidMount () {
    this.getPokemon();
  }

  render() {
    return (
      <div>
        <button onClick={()=> {
          this.props.fakeAction()
          alert('FAKE')
        }}> FAKE </button>
      </div>
    );
  }
}

FakeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired,
  sendPokemonToStore: func.isRequired,
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  sendPokemonToStore: (pokemon) => dispatch(savePokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
