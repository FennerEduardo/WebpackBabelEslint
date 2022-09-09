const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[
                  {loader: "url-loader"}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Babel + Webpack, Loaders, Plugins + ESLint',
            template: 'index.html'
        }),
        new ESLintPlugin()
    ]
}