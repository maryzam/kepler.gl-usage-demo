import React from 'react';
import { throttle } from 'lodash';
import Map from './components/Map';

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

export default App;