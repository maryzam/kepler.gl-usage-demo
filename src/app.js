import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import KeplerGlSchema from 'kepler.gl/schemas';
import { wrapTo, addDataToMap } from 'kepler.gl/actions';

import { loadParkingData } from './store/actions';

import InfoPanel from './components/InfoPanel';
import ParkingMap from './components/ParkingMap';

import { getMapConfig, MAP_MODE } from './configs/map';

const initialDataset = {
			       			info: { 
			       				id: 'parking_data', 
			       				label: 'Moscow Paid Parking' },
				          	data: []
				        };

class App extends React.Component {

	state = {
		width: window.innerWidth,
    	height: window.innerHeight
	};

	updateSize = () => {
		this.setState({
	      width: window.innerWidth,
	      height: window.innerHeight
	    });
	}

	updateMap = (mode) => {
		/*const config = getMapConfig(mode);
		const datasets = this.getMapDataset();
		this.props.dispatch(
			wrapTo('parking_map',
				addDataToMap({ datasets , config })
			)); */
	}

	toggleMapMode = ({ target }) => {
		const mapMode = target.dataset.mode;
		this.updateMap(mapMode);
		this.setState({ mapMode });
	}

	getMapDataset() {
		const { keplerGl } = this.props;
	    const { parking_map } = keplerGl;
	    return !parking_map ? 
	    			initialDataset:
	    			KeplerGlSchema.getDatasetToSave(parking_map);
	}

/*	shouldComponentUpdate(nextProps, nextState) {
		const { mapMode, width, height } = this.state;
		return (mapMode !== nextState.mapMode) ||
			Math.abs(width - nextState.width) > 0.5 ||
			Math.abs(height - nextState.height) > 0.5;
	} */

	componentDidMount() {
		this.props.dispatch(loadParkingData());
		//this.updateMap(this.state.mapMode);
		
		this.onResize = throttle(this.updateSize, 150, { trailing: true });
		window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		 window.removeEventListener('resize', this.onResize);
	}

	render() {
		console.log("render");
		const map = this.props.keplerGl.parking_map;
		if (!!map) {
			console.log(map.visState)
		};

		const { width, height, mapMode } = this.state;

		return (
			<Fragment>
				<InfoPanel 
					mode={ mapMode }
					onToggle={ this.toggleMapMode }
				/>
				<ParkingMap 
					width={ width }
					height={ height }
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
