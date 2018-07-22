import Processors from 'kepler.gl/processors';
import KeplerGlSchema from 'kepler.gl/schemas';
import { wrapTo, addDataToMap } from 'kepler.gl/actions';

import { getMapConfig } from '../configs/map';

export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const UPDATE_DATASET = 'UPDATE_DATASET';

const demoDataUrl = 'data/parking.csv';

export function loadParkingData() {
	
    return (dispatch, getState) => {
    	
        setLoadingStatus(dispatch,true);
        
        fetch(demoDataUrl)
        	.then(response => response.text())
            .then(data => {
            	setLoadingStatus(dispatch, false);
            	setLoadedData(dispatch, data, getState());
		    }); 
    };
}

function setLoadingStatus(dispatch, isLoading = false) {
	dispatch({
        type: SET_LOADING_STATUS,
        isLoading
    });
}

function setLoadedData(dispatch, data, state) {
	const datasets = [{
		       			info: { 
			          		id: 'parking_data',
			          		label: 'Moscow Paid Parking' 
			          	},
			          	data: Processors.processCsvData(data)
			          }]; 
	
	const config = getMapConfig(state.app.mapMode);
	
	dispatch(
	   	wrapTo('parking_map',
			addDataToMap({
				datasets,
				config
			})
		)); 
}