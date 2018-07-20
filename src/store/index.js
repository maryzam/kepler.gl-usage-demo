
import {createStore, applyMiddleware, compose} from 'redux';
import {taskMiddleware} from 'react-palm';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
 
// using enhancers
const initialState = {}
const middlewares = [taskMiddleware, thunkMiddleware]
const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers)
);
