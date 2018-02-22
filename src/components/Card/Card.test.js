/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('CARD', () => {
  it('should match the snapshot', () => {
    const renderedComponent = shallow(<Card />);

    expect(renderedComponent).toMatchSnapshot();
  });
});