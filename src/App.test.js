import React from 'react';
// setup file

import { shallow } from 'enzyme';
import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App component
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Returns ShalowWrapper containing node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {String} attr
 * @returns {ShallowWrapper}
 */
const fintByTestAttr = (wrapper, attr) => wrapper.find(`[data-test="${attr}"]`);

test('renders withoud error', () => {
  const wrapper = setup();
  const appComponent = fintByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
