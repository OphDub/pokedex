/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { FakeContainer, mapStateToProps, mapDispatchToProps } from './index';

describe('FAKE CONTAINER', () => {
  it('should match the snapshot', () => {
    const renderedComponent = shallow(<FakeContainer />);

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should call dispatch correctly', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.sendPokemonToStore();

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should map the store correctly', () => {
    const somePokemon = [
      {name: 'Pikachu'}
    ];
    const mockStore = {
      pokemon: somePokemon
    };

    const mapped = mapStateToProps(mockStore);

    expect(mapped.pokemon).toEqual(mockStore.pokemon);
  })
});