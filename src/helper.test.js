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
      }));
      const url = 'http://localhost:3001/pokemon/'

      expect(window.fetch).not.toHaveBeenCalled();
      fetchAndParse(url);
      expect(window.fetch).toHaveBeenCalledWith(url)
    });

    it('should return an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          pokemon: {}
        })
      }));
      const expected = {pokemon: {}}

      expect(fetchAndParse()).resolves.toEqual(expected);
    });

    it('shoudl return an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 300
      }));
      const expected = new Error('Unable to get Pokemon data!')

      expect(fetchAndParse()).rejects.toEqual(expected);
    });
  });

  describe('getPokemon', ()=> {
    it('should return an array based on the categories it receives', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          mockInitialFetch
        })
      }));

      
    });
  })

  describe('cleanPokemon', () => {
    it('should return a new cleaned pokemon object', () => {
      expect(cleanPokemon(dirtyPokemon)).toEqual(cleanedPokemon);
    });
  });
});