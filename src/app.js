import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import { wrapTo, addDataToMap } from 'kepler.gl/actions';

import { loadParkingData } from './store/actions';

import InfoPanel from './components/InfoPanel';
import ParkingMap from './components/ParkingMap';

import { getMapConfig, MAP_MODE } from './configs/map';

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

	updateMap = (mode) => {
		const config = getMapConfig(mode);
		this.props.dispatch(
			wrapTo('parking_map',
				addDataToMap({ datasets: [], config })
			));
	}

	toggleMapMode = ({ target }) => {

		const mapMode = target.dataset.mode;
		this.updateMap(mapMode);
		this.setState({ mapMode });
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(this.props.app.isLoading);
		const { mapMode, width, height } = this.state;
		return (mapMode !== nextState.mapMode) ||
			Math.abs(width - nextState.width) > 0.5 ||
			Math.abs(height - nextState.height) > 0.5;
	}

	componentDidMount() {
		this.props.dispatch(loadParkingData());
		this.updateMap(this.state.mapMode);
		
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
