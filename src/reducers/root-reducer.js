import { combineReducers } from 'redux';
import fakeReducer from './fake-reducer';
import pokemonReducer from './pokemon-reducer';

const rootReducer = combineReducers({
  fake: fakeReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
