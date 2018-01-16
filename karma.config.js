var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        nyanReporter: {
            // suppress the error report at the end of the test run
            suppressErrorReport: false, // default is false

            // suppress the red background on errors in the error
            // report at the end of the test run
            suppressErrorHighlighting: false, // default is false

            // increase the number of rainbow lines displayed
            // enforced min = 4, enforced max = terminal height - 1
            numberOfRainbowLines: 4, // default is 4

            // only render the graphic after all tests have finished.
            // This is ideal for using this reporter in a continuous
            // integration environment.
            renderOnRunCompleteOnly: false // default is false
        },
        files: [
            'tests.webpack.js'
        ],
        frameworks: [
            'mocha'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress', 'nyan'],
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true
                        }
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
            },
            externals: {
                'react-dom/test-utils': true,
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        }
    });
};
