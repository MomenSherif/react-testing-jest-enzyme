import React from 'react';
// setup file
import { shallow } from 'enzyme';

import { fintByTestAttr, checkProps } from '../../../utils/test';
import Congrats from './Congrats';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = fintByTestAttr(wrapper, 'component-congrats');
  expect(component).toHaveLength(1);
});

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  expect(wrapper.text()).toBe('');
});

test('renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  expect(wrapper.text()).not.toBe('');
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
