import pointLayer from './pointLayer'

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

const mapState = {
	"bearing": 0,
	"dragRotate": false,
	"latitude": 55.7558,
	"longitude": 37.6173,
	"pitch": 0,
	"zoom": 11,
	"isSplit": false
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

const layers = [
  pointLayer
];

export default {
    version: "v1",
    config: {
      visState: {
      	filters: [],
        layers,
      	interactionConfig,
      	layerBlending: "normal",
        splitMaps: []
      },
      mapState,
      mapStyle
    }
};