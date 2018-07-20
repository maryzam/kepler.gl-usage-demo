import { combineReducers } from 'redux';

import keplerGlReducer from 'kepler.gl/reducers';

import { SET_LOADING_STATUS } from './actions';

const appReducer = function (state = {}, action) {
	if (action.type === SET_LOADING_STATUS) {
		return ({
			...state,
			isLoading: action.isLoading
		})
	}
	return state; 
}

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