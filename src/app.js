import React from 'react';
import Map from './components/Map';

import sampleData from './data/sample';

console.log(sampleData);

const App = (props) => {

	return ( 
		<Map 
			data={sampleData} 
			width={900}
			height={600}
		/>);
}

export default App;