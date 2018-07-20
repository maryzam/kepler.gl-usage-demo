import Processors from 'kepler.gl/processors';
import { wrapTo, updateVisData } from 'kepler.gl/actions';

export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

const demoDataUrl = 'data/parking.csv';

export function loadParkingData() {
	
    return (dispatch) => {
    	
        dispatch({
            type: SET_LOADING_STATUS,
            isLoading: true
        });
        
        fetch(demoDataUrl)
        	.then(response => response.text())
            .then(data => {

            	dispatch({
		         	type: SET_LOADING_STATUS,
            		isLoading: false
		        });

            	const datasets = [{
		        	info: { 
		          		id: 'parking_data',
		          		label: 'Moscow Paid Parking' 
		          	},
		          	data: Processors.processCsvData(data)
		         }]; 

		         dispatch(
		         	wrapTo('parking_map',
						updateVisData({
							datasets,
					        config: {} //todo
						})
					)); 
		    }); 
    };
}