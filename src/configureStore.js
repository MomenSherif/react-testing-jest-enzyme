import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [thunk];

export default createStore(rootReducer, applyMiddleware(...middlewares));
