import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const { secretWord } = getState();
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord)
      dispatch({
        type: actionTypes.CORRECT_GUESS,
      });
  };
};

export const getSecretWord = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:3030');
    dispatch({ type: actionTypes.SET_SECRET_WORD, payload: data });
  };
};
