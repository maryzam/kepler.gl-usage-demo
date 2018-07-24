import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import KeplerGlSchema from 'kepler.gl/schemas';
import { wrapTo, addDataToMap, receiveMapConfig } from 'kepler.gl/actions';

import { loadParkingData, toggleMapMode } from './store/actions';

import InfoPanel from './components/InfoPanel';
import ParkingMap from './components/ParkingMap';

import { MAP_MODE } from './configs/map';

class App extends React.Component {

	state = {
		mapMode: MAP_MODE.POINT,
		width: window.innerWidth,
    	height: window.innerHeight
	};

	updateSize = () => {
		this.setState({
	      width: window.innerWidth,
	      height: window.innerHeight
	    });
	}

	toggleMapMode = ({ target }) => {
		const mapMode = target.dataset.mode;
		this.props.dispatch( toggleMapMode(mapMode) );
		this.setState({ mapMode });
	}

/*	shouldComponentUpdate(nextProps, nextState) {
		const { mapMode, width, height } = this.state;
		return (mapMode !== nextState.mapMode) ||
			Math.abs(width - nextState.width) > 0.5 ||
			Math.abs(height - nextState.height) > 0.5;
	} */

	componentDidMount() {
		this.props.dispatch(loadParkingData());
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
