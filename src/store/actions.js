import Processors from 'kepler.gl/processors';
import KeplerGlSchema from 'kepler.gl/schemas';
import { wrapTo, addDataToMap } from 'kepler.gl/actions';

import { getMapConfig } from '../configs/map';

export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_MAP_MODE = 'SET_MAP_MODE'
export const UPDATE_DATASET = 'UPDATE_DATASET';

const demoDataUrl = 'data/parking.csv';
const info = { 
			    id: 'parking_data',
			    label: 'Moscow Paid Parking' 
			};

export function loadParkingData(mapMode) {
	
    return (dispatch) => {
    	
        dispatch( setLoadingStatus(true) );
        
        fetch(demoDataUrl)
        	.then(response => response.text())
            .then(source => {
				const data = Processors.processCsvData(source);
				const config = getMapConfig(mapMode);
				const datasets = [{ info, data }]; 

				dispatch(
				   	wrapTo('parking_map',
						addDataToMap({
							datasets,
							config
						})
					)); 

            	dispatch( setLoadingStatus(false) );
		    }); 
    };
}

export function toggleMapMode(mode) {

	return (dispatch, getState) => {
    	
        const config = getMapConfig( mode );
        const datasets =  getDatasets(getState());

        dispatch(
		   	wrapTo('parking_map',
				addDataToMap({
					datasets,
					config
				})
			)); 

        dispatch( setMapMode(mode) );
    };
}

function setMapMode(mapMode) {
	return {
        type: SET_MAP_MODE,
        mapMode
    };
}

function setLoadingStatus(isLoading) {
	return {
        type: SET_LOADING_STATUS,
        isLoading
    };
}

function getDatasets({ keplerGl }) {
	
	const map = keplerGl.parking_map;
	if (!map || !map.visState) {
		return [];
	}

	const { parking_data } = map.visState.datasets;
	return [{
				info,
				data: {
				    fields: parking_data.fields,
				    rows: parking_data.allData
				}
			}];
}
