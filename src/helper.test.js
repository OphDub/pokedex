/* eslint-disable */
import { fetchAndParse, getPokemon,cleanPokemon } from './helper';
import { mockInitialFetch, dirtyPokemon, cleanedPokemon } from './mockData';

describe('HELPER', () => {
  describe('fetchAndParse', () => {
    it('should call fetch with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          mockInitialFetch
        })
      }))
      const url = 'http://localhost:3001/pokemon/'

      expect(window.fetch).not.toHaveBeenCalled();
      fetchAndParse(url);
      expect(window.fetch).toHaveBeenCalledWith(url)
    });
  });

  describe('cleanPokemon', () => {
    it('should return a new cleaned pokemon object', () => {
      expect(cleanPokemon(dirtyPokemon)).toEqual(cleanedPokemon);
    });
  });
});