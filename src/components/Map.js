
import React from 'react';
//import KeplerGl from 'kepler.gl';
import * as cn from 'kepler.gl/components';
console.log("---");
const keys = Object.keys(cn).filter((x) => x.includes('Factory'));
console.log(keys);
console.log(cn);
console.log("---");

const mapboxAccessToken = process.env.MapboxAccessToken;

import {injectComponents, LoadDataModalFactory, ModalContainerFactory} from 'kepler.gl/components';
 
// define custom header
const NullPh = () => null;
const myCustomFactory = () => NullPh;
 
// Inject custom header into Kepler.gl, replacing default
const KeplerGl = injectComponents([
  [LoadDataModalFactory, myCustomFactory],
  [ModalContainerFactory, myCustomFactory],
]);

const Map = (props) => (
  	<KeplerGl
	      id="map"
	      mapboxApiAccessToken={mapboxAccessToken}
	      width={ props.width }
	      height={ props.height } 
    />
);

export default Map;