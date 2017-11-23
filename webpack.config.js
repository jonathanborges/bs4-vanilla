const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bs4.js',
        library: 'bs4-vanilla',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    module: {
        rules: [

            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
            
        ]
    },

    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ],
        extensions: ['.js', '.json']
    }
    
}