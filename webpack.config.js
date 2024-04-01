const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'budle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: 'css-loader' },
        ]
    }
}