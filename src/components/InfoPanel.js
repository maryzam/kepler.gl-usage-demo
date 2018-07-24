import React from 'react';
import './info-panel-styles.css';

import { MAP_MODE } from '../configs/map';

import Header from './Header';
import Footer from './Footer';

function getCssClass(btnMode, currentMode) {
	return (btnMode === currentMode) ? 
		'active' :
		'';
}

const InfoPanel = ({ mode, isLoading, onToggle }) => {

		return (
			<div className="info-panel">
				<Header />
				{
					isLoading ? 
					( <main>
							<div className="preloader"></div> 
					  </main> ) :
					( <main>
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
					  </main> )
				}
				<Footer />
			</div>);
};

export default InfoPanel;