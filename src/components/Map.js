
import React from 'react';
import KeplerGl from './KeplerGl';

const mapboxAccessToken = process.env.MapboxAccessToken;

const Map = (props) => (
  	<KeplerGl
	      id="map"
	      mapboxApiAccessToken={mapboxAccessToken}
	      width={ props.width }
	      height={ props.height } 
    />
);

export default Map;