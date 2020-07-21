import React from 'react';
import { shallow } from 'enzyme';
import { fintByTestAttr, checkProps } from '../../../utils/test';
import GussedWords from './GussedWords';

const defaultProps = {
  gussedWords: [{ gussedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GussedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GussedWords, defaultProps);
});

describe('if there are no words gussed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ gussedWords: [] });
  });

  test('renders without error', () => {
    const component = fintByTestAttr(wrapper, 'component-gussed-words');
    expect(component).toHaveLength(1);
  });

  test('renders instructions to guess a word', () => {
    const instruction = fintByTestAttr(wrapper, 'gussed-instructions');
    expect(instruction.text()).not.toBe('');
  });
});

describe('if there are words gussed', () => {
  const gussedWords = [
    {
      gussedWord: 'train',
      letterMatchCount: 3,
    },
    {
      gussedWord: 'agile',
      letterMatchCount: 1,
    },
    {
      gussedWord: 'party',
      letterMatchCount: 5,
    },
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ gussedWords });
  });

  test('renders without error', () => {
    const component = fintByTestAttr(wrapper, 'component-gussed-words');
    expect(component).toHaveLength(1);
  });

  test('renders guessed words section', () => {
    const gussedWordsNode = fintByTestAttr(wrapper, 'gussed-words');
    expect(gussedWordsNode).toHaveLength(1);
  });

  test('correct number of gussed words', () => {
    const guessdWordNodes = fintByTestAttr(wrapper, 'gussed-word');
    expect(guessdWordNodes).toHaveLength(gussedWords.length);
  });
});
