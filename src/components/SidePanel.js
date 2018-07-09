import React from 'react';
import './side-panel-styles.css';

import { MAP_MODE } from '../configs/map';

class SidePanel extends React.Component {

	state = { mode: MAP_MODE.POINTS }

	handleModeChange = (e) => {
		const mode = e.target.dataset.mode;
		this.setState({ mode });
	}

	getCssClass(mode) {
		return (mode == this.state.mode) ? 'active' : '';
	}

	render() {

		return (
			<div className="side-panel">
				<header>
					<h2>Moscow Parking</h2>
					<p>Map of all Paid Parking at Moscow streets with car capacity & pricing information</p>
				</header>
				<main>
					<p>Switch between view modes</p>
					<div className="buttons">
						<button 
							data-mode={ MAP_MODE.POINTS }
							className={ this.getCssClass(MAP_MODE.POINTS) }
							onClick={ this.handleModeChange }>
							Overview
						</button>
						<button 
							data-mode={ MAP_MODE.GRID }
							className={ this.getCssClass(MAP_MODE.GRID) }
							onClick={ this.handleModeChange }>
							Aggregated
						</button>
					</div>
				</main>
				<footer>
					<p>
						Made | <a href="https://twitter.com/MaryZamCode" target="_blank">Mary Zam</a>
					</p>
					<p>
						Powered | <a href="https://uber.github.io/kepler.gl/" target="_blank">Kepler.Gl</a>
					</p>
					<p>
						Data | <a href="https://data.mos.ru/opendata/623" target="_blank">data.mos.ru</a>
					</p>
					<p>
						Maps | <a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox </a>
							   <a href="https://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a>
					</p>
				</footer>		
			</div>);
	}

};

export default SidePanel;