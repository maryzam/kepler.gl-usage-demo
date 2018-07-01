import pointLayer from './pointLayer'
import gridLayer from './gridLayer'

const mapStyle = {
	 styleType: "dark",
	 topLayerGroups: {},
	 visibleLayerGroups: {
	    "label": true,
	    "road": true,
	    "border": false,
	    "building": true,
	    "water": true,
	    "land": true
	 }
};

const interactionConfig = {
	tooltip: {
        fieldsToShow: {
            "parking_data": [
              "ParkingName",
              "Address",
              "WorkingHours",
              "Price",
              "CarCapacity"
            ]
        },
        enabled: true
    },
    brush: {
        enabled: false
    }
};

export default {
    version: "v1",
    config: {
      visState: {
      	filters: [],
        layers: [ gridLayer.config ],
      	interactionConfig,
      	layerBlending: "normal",
        splitMaps: []
      },
      mapState: gridLayer.mapState,
      mapStyle
    }
};