export const fakeAction = () => ({ type: 'FAKE'});

export const savePokemon = (pokemon) => ({
  type: 'SAVE_POKEMON',
  payload: pokemon
});
