import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import KeplerGlSchema from 'kepler.gl/schemas';
import { wrapTo, addDataToMap, receiveMapConfig } from 'kepler.gl/actions';

import { loadParkingData, toggleMapMode } from './store/actions';

import InfoPanel from './components/InfoPanel';
import ParkingMap from './components/ParkingMap';

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

	toggleMapMode = ({ target }) => {
		const { mode } = target.dataset;
		this.props.dispatch( toggleMapMode(mode) );
	}

	shouldComponentUpdate(nextProps, nextState) {
		const { width, height } = this.state;
		const  { mapMode } = this.props.app;

		return (mapMode !== nextProps.app.mapMode) ||
			Math.abs(width - nextState.width) > 0.5 ||
			Math.abs(height - nextState.height) > 0.5;
	} 

	componentDidMount() {
		this.props.dispatch(loadParkingData());
		this.onResize = throttle(this.updateSize, 150, { trailing: true });
		window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		 window.removeEventListener('resize', this.onResize);
	}

	render() {

		const { width, height } = this.state;
		const  { mapMode } = this.props.app;
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
