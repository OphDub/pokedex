import pokemonReducer from './pokemon-reducer';
import * as actions from '../actions/index';

describe('pokemonReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(pokemonReducer(undefined, {})).toEqual(expected);
  });

  it('should return the payload if type if SAVE_POKEMON', () => {
    const expected = { name: 'Pikachu' };
    const mockAction = {
      type: 'SAVE_POKEMON',
      payload: expected
    };

    expect(pokemonReducer(undefined, mockAction)).toEqual(expected);
  });
});