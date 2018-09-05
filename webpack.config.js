const webpack = require('webpack');
const path = __dirname;

module.exports = {
    entry: {
        newiscool: path + '/src/index.js',
        vendor: ['jquery', 'whatwg-fetch', 'axios']
    },
    output: {
        path: path + '/opencode/js/',
        filename: "[name].js"
    },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         names: ['vendor']
    //     })
    // ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                plugins: ["transform-runtime", "react-html-attrs"],
                presets: ['react', ['es2015', {modules: false}]]
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader?sourceMap="inline"!stylus-loader?paths=src'
            }
        ]
    }
}