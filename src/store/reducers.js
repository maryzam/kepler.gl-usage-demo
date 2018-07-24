import { combineReducers } from 'redux';

import keplerGlReducer from 'kepler.gl/reducers';

import { REQUEST_PARKING_DATA, GET_PARKING_DATA, SET_MAP_MODE } from './actions';
import { MAP_MODE } from '../configs/map';

const isLoadingReducer = function ( state = false, action) {
	switch (action.type) {
		case REQUEST_PARKING_DATA:
			return true;
		case GET_PARKING_DATA:
			return false;
		default: 
			return state;
	}
};

const mapModeReducer = function ( state = MAP_MODE.POINTS, action ) {
	if (action.type === SET_MAP_MODE) {
		return action.mapMode;
	}
	return state;
};

const appReducer = combineReducers({
	mapMode: mapModeReducer,
	isLoading: isLoadingReducer
});

const mapReducer = keplerGlReducer
	.initialState({
		uiState: {
	      readOnly: true,
	      mapControls: {
	        visibleLayers: {
	          show: false
	        },
	        toggle3d: {
	          show: false
	        },
	        splitMap: {
	          show: true
	        },	    
	        mapLegend: {
	          show: true,
	          active: false
	        }
	      }
		}
	})

const reducers = combineReducers({
  keplerGl: mapReducer,
  app: appReducer,
});

export default reducers;