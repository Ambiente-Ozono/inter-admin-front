const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'budle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}