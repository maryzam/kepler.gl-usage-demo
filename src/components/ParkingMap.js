
import React from 'react';
import KeplerGl from './KeplerGl';

const mapboxAccessToken = process.env.MapboxAccessToken;

const ParkingMap = (props) => (
  	<KeplerGl
	      id="parking_map"
	      mapboxApiAccessToken={mapboxAccessToken}
	      width={ props.width }
	      height={ props.height } 
	      mint={ false }

    />
);

export default ParkingMap;