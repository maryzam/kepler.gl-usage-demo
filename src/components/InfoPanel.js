import React from 'react';
import './info-panel-styles.css';

import { MAP_MODE } from '../configs/map';

function getCssClass(btnMode, currentMode) {
	return (btnMode === currentMode) ? 
		'active' :
		'';
}

const Header = () => (
		<header>
			<h2>Moscow Parking</h2>
			<p>Map of all Paid Parking at Moscow streets with car capacity & pricing information</p>
		</header>
	);

const Footer = () => (
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
			);

const InfoPanel = ({ mode, onToggle }) => {

		return (
			<div className="info-panel">
				<Header />
				<main>
					<p>Switch between view modes</p>
					<div className="buttons">
						<button 
							data-mode={ MAP_MODE.POINTS }
							className={ getCssClass(MAP_MODE.POINTS, mode) }
							onClick={ onToggle }>
							Overview
						</button>
						<button 
							data-mode={ MAP_MODE.GRID }
							className={ getCssClass(MAP_MODE.GRID, mode) }
							onClick={ onToggle }>
							Aggregated
						</button>
					</div>
				</main>
				<Footer />
			</div>);
};

export default InfoPanel;