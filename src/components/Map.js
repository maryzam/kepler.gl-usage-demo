
import React from 'react';
import { injectComponents, ModalContainerFactory, SidePanelFactory} from 'kepler.gl/components';

const mapboxAccessToken = process.env.MapboxAccessToken;
 
// define null factory to don not renrder any unnesesary components
const NullComponent = () => null;
const nullComponentFactory = () => NullPh;
 
// Remove default upload modal dialog & side panel 
const KeplerGl = injectComponents([
  [ModalContainerFactory, nullComponentFactory],
  [SidePanelFactory, nullComponentFactory],
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