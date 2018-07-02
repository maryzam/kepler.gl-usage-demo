import React from 'react';
import './side-panel-styles.css';

import { MAP_MODE } from '../configs/map';

const SidePanel = ({mode}) => {

	return (
		<div className="side-panel">
			<header>
				<h2>Moscow Parking</h2>
				<p>Map of all Paid Parking at Moscow streets with car capacity & pricing information</p>
			</header>
			<main>
				<p>Switch between view modes</p>
				<div className="buttons">
					<button className={ mode == MAP_MODE.POINTS ? 'active' : ''}>
						Overview
					</button>
					<button className={ mode == MAP_MODE.GRID ? 'active' : ''}>
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
	};

export default SidePanel;