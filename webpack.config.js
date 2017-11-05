const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: ['./src/typescript/app.ts', './src/sass/style.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'build/public/js'),
        publicPath: 'public/js/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.scss']
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" }
            ]
        },
        {
            test: /\.ts$/,
            use: [
                { loader: 'ts-loader'}
            ]
        }]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true, 
            uglifyOptions: {
                ie8: false,
                ecma: 8
            } 
        })
    ]
}