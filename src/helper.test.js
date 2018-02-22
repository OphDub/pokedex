import helper from './helper';
import { mockIntialFetch } from './mockData';

describe('HELPER', () => {
  describe('fetchAndParse', () => {
    it('should call fetch with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          mockIntialFetch
        })
      }))
    });
    const url = 'http://localhost:3001/pokemon/'

    expect(fetchAndParse(url)).toEqual(mockIntialFetch)
  });
});