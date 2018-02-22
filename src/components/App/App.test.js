import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('APP', () => {
  it('should match the snapshot', () => {
    const renderedComponent = shallow (<App />);

    expect(renderedComponent).toMatchSnapshot();
  });
});