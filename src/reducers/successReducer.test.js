import successReducer from './successReducer';
import { actionTypes } from '../actions';

test('returns default initial state of "false" when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns state of true upon receiving an action of type "CORRECT_GUESS"', () => {
  const action = { type: actionTypes.CORRECT_GUESS };
  const newState = successReducer(undefined, action);
  expect(newState).toBe(true);
});
