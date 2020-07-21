import React from 'react';
// setup file

import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
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

test('renders increment button', () => {
  const wrapper = setup();
  const button = fintByTestAttr(wrapper, 'increment-button');
  expect(button).toHaveLength(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = fintByTestAttr(wrapper, 'decrement-button');
  expect(button).toHaveLength(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = fintByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay).toHaveLength(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking increment button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button and click
  const button = fintByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = fintByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking decrement button decrements counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = fintByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  const counterDisplay = fintByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
});

test('decrement button should be disabled it counter is 0', () => {
  const wrapper = setup(null, { counter: 0 });
  const button = fintByTestAttr(wrapper, 'decrement-button');
  expect(button.html()).toContain('disabled');
  // expect(button).toBeDisabled()  ** Not Working issue opened in enzyme **
});
