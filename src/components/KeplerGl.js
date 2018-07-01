import React from 'react';
import SidePanel from './SidePanel';

import { 
	injectComponents, 
	ModalContainerFactory, 
	SidePanelFactory,
} from 'kepler.gl/components';

// define null factory to don not renrder any unnesesary components
const NullComponent = () => null;
const nullComponentFactory = () => NullComponent;

const customSidePanelFactory = () => SidePanel;

// Remove default upload modal dialog & side panel 
const KeplerGl = injectComponents([
  [ModalContainerFactory, nullComponentFactory],
  [SidePanelFactory, customSidePanelFactory],
]);

export default KeplerGl;