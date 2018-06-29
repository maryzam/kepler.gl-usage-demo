import { combineReducers } from 'redux';

import keplerGlReducer from 'kepler.gl/reducers';

const appReducer = function (state = {}, action) {
	return state; // do nothing for now
}

const reducers = combineReducers({
  keplerGl: keplerGlReducer,
  app: appReducer,
});

export default reducers;