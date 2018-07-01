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
        sizeScale: "linear"
    };

const cellConfig = {
        opacity: 0.8,
        worldUnitSize: 1,
        colorRange: {
            colors: [
                  "#00939C",
                  "#3EADB3",
                  "#7CC7CB",
                  "#BAE1E2",
                  "#F8C0AA",
                  "#E68F71",
                  "#D45F39",
                  "#C22E00"
            ],
            reversed: false
        },
        coverage: 0.7,
        sizeRange: [ 0, 500 ],
        percentile: [ 0, 100 ],
        elevationPercentile: [ 0, 100 ],
        elevationScale: 5,
        "hi-precision": false,
        colorAggregation: "average",
        sizeAggregation: "sum",
        enable3d: true
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
        visConfig: cellConfig
  };

const config = {
  id: "grid_layer",
  type: "grid",
  config: layerConfig,
  visualChannels
};

const mapState = {
    "bearing": 25,
    "dragRotate": true,
    "latitude": 55.7558,
    "longitude": 37.5915,
    "pitch": 20,
    "zoom": 9,
    "isSplit": false
};

export default { config, mapState };