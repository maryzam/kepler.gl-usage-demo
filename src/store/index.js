
import {createStore, applyMiddleware, compose} from 'redux';
import {taskMiddleware} from 'react-palm';

import reducers from './reducers';
 
// using enhancers
const initialState = {}
const middlewares = [taskMiddleware]
const enhancers = [applyMiddleware(...middlewares)];

export default createStore(
  reducers,
  initialState,
  compose(...enhancers)
);
