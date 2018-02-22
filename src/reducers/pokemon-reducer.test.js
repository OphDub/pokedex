import pokemonReducer from './pokemon-reducer';
import * as actions from '../actions/index';

describe('pokemonReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(pokemonReducer(undefined, {})).toEqual(expected);
  });

  it('should return the payload if type if SAVE_POKEMON', () => {

  });
});