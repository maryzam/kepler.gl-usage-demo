 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
         rules: [
             {
                 test: /\.js$/,                 
                 exclude: [/(node_modules)/],
                 use: 'babel-loader'
             }, 
             {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: [/node_modules/]
             }
         ]
    },
    // Reading mapbox token from environment variable
    plugins: [
        new webpack.EnvironmentPlugin({
          MapboxAccessToken: 'pk.eyJ1IjoibWFyeXphbSIsImEiOiJjamlzenVxYmIxd2dmM2tyenltbHppZ2twIn0.S7rPnQ07vc2OXvkBNnDpRg'
        })
    ]
 };