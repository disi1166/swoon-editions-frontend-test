var path = require('path');
var webpack = require('webpack');
var config = {
    devtool: 'source-map',
    devServer: {
        open: true,
        inline: true
    },
    entry: [path.resolve(__dirname, 'src/js/index.js')],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js'
        ],
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, 'node_modules')
        ]
    }
};
module.exports = config;
