const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')

const config = {
    //tell webpack the root file of our
    //server application
    entry: './src/client/client.js',
    //Tell Webpack where to put the output file
    //That is generated
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config);