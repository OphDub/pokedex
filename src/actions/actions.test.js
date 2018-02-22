import * as actions from './index';

describe('savePokemon', () => {
  it('should create an action with a type of SAVE_POKEMON', () => {
    const somePokemon = {name: 'Pikachu'};
    const expected = {
      type: 'SAVE_POKEMON',
      payload: somePokemon
    };

    expect(actions.savePokemon(somePokemon)).toEqual(expected);
  });
});