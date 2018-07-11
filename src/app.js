import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import { addDataToMap, receiveMapConfig } from 'kepler.gl/actions';

import InfoPanel from './components/InfoPanel';
import ParkingMap from './components/ParkingMap';
import { getMapConfig, MAP_MODE } from './configs/map';

import Processors from 'kepler.gl/processors';
import data from './data/parking-csv';

class App extends React.Component {

	state = {
		mapMode: MAP_MODE.POINTS,
		width: window.innerWidth,
    	height: window.innerHeight
	};

	updateSize = () => {
		this.setState({
	      width: window.innerWidth,
	      height: window.innerHeight
	    });
	}

	updateView = (mode) => {

		const config = getMapConfig(mode);
		const datasets = [{
				          	info: { 
				          		id: 'parking_data',
				          		label: 'Moscow Paid Parking' 
				          	},
				          	data: Processors.processCsvData(data)
				         }];

		this.props.dispatch(
				addDataToMap({
					datasets,
			        config
				})
			);
	}

	toggleMapMode = ({ target }) => {

		const mapMode = target.dataset.mode;
		this.updateView(mapMode);
		this.setState({ mapMode });
	}

	shouldComponentUpdate(nextProps, nextState) {
		const { mapMode, width, height } = this.state;
		return (mapMode !== nextState.mapMode) ||
			Math.abs(width - nextState.width) > 0.5 ||
			Math.abs(height - nextState.height) > 0.5;
	}

	componentDidMount() {
		this.updateView(this.state.mapMode);
		
		this.onResize = throttle(this.updateSize, 150, { trailing: true });
		window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		 window.removeEventListener('resize', this.onResize);
	}

	render() {
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
