import React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import { addDataToMap, receiveMapConfig } from 'kepler.gl/actions';

import Map from './components/Map';
import { default as config } from './configs/map';

import Processors from 'kepler.gl/processors';
import parkingData from './data/parking-csv';

class App extends React.Component {

	state = {
		width: window.innerWidth,
    	height: window.innerHeight
	};

	_updateSize = () => {
		this.setState({
	      width: window.innerWidth,
	      height: window.innerHeight
	    });
	}

	componentDidMount() {
		this.props.dispatch(addDataToMap({
			datasets: [{
	          	info: {
	           		label: 'Moscow Paid Parking',
	           		id: 'parking_data'
	           	},
	          	data: Processors.processCsvData(parkingData)
	        }],
	        config
		}));

		this.onResize = throttle(this._updateSize, 150, { trailing: true });
		window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		 window.removeEventListener('resize', this.onResize);
	}

	render() {
		const { width, height } = this.state;

		return (
			<Map 
				width={ width }
				height={ height }
			/>
		);
	}
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
