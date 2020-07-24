import React from 'react';
import { shallow } from 'enzyme';
import { fintByTestAttr, storeFactory } from '../../../utils/test';

import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();

  return wrapper;
};

setup();

describe('render', () => {
  describe('word has not been gussed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      const component = fintByTestAttr(wrapper, 'component-input');
      expect(component).toHaveLength(1);
    });

    test('renders input box', () => {
      const inputBox = fintByTestAttr(wrapper, 'input-box');
      expect(inputBox).toHaveLength(1);
    });

    test('renders submit button', () => {
      const submitButton = fintByTestAttr(wrapper, 'submit-button');
      expect(submitButton).toHaveLength(1);
    });
  });

  describe('word has been gussed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('renders component without error', () => {
      const component = fintByTestAttr(wrapper, 'component-input');
      expect(component).toHaveLength(1);
    });

    test('does not renders input box', () => {
      const inputBox = fintByTestAttr(wrapper, 'input-box');
      expect(inputBox).toHaveLength(0);
    });

    test('does not renders submit button', () => {
      const submitButton = fintByTestAttr(wrapper, 'submit-btn');
      expect(submitButton).toHaveLength(0);
    });
  });
});

describe('update state', () => {});
