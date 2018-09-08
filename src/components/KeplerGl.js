import React from 'react';

import { 
	injectComponents, 
	ModalContainerFactory, 
	SidePanelFactory,
} from 'kepler.gl/components';

// define null factory to don not render any unneсesыary components
const NullComponent = () => null;
const nullComponentFactory = () => NullComponent;

// Remove default upload modal dialog & side panel 
const KeplerGl = injectComponents([
   [ModalContainerFactory, nullComponentFactory],
   [SidePanelFactory, nullComponentFactory],
]);

export default KeplerGl;