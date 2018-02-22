import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchAndParse } from '../../helper';
import { savePokemon } from '../../actions/index';
class FakeContainer extends Component {
  componentDidMount = async () => {
    const url = 'http://localhost:3001/types';
    const pokemon = await fetchAndParse(url);

    this.props.sendPokemonToStore(pokemon);
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
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  sendPokemonToStore: (pokemon) => dispatch(savePokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
