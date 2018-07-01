
const visualChannels = {
        colorField: {
            "name": "Price",
            "type": "integer"
        },
        colorScale: "quantize",
        sizeField: {
           	"name": "CarCapacity",
           	"type": "integer"
        },
        sizeScale: "sqrt"
    };

const pointConfig = {
        radius: 1,
        fixedRadius: false,
        opacity: 0.4,
        outline: false,
        colorRange: {
            colors: [
                  "#00939C",
                  "#5DBABF",
                  "#BAE1E2",
                  "#F8C0AA",
                  "#DD7755",
                  "#C22E00"
            ],
            reversed: false
        },
        radiusRange: [ 0, 20 ],
        "hi-precision": false
	};

const layerConfig = {
        dataId: "parking_data",
        label: "Paid parking",
        columns: {
              "lat": "Latitude_WGS84",
              "lng": "Longitude_WGS84",
              "altitude": null
        },
        isVisible: true,
        visConfig: pointConfig
	};

export default {
	id: "point_layer",
	type: "point",
	config: layerConfig,
	visualChannels
};