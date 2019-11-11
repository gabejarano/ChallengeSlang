const path = require('path');
const minicssExtractPlugin = require('mini-css-extract-plugin');
const htmlplugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.png']
    },
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    minicssExtractPlugin.loader,
                    'css-loader'
                    , 'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new htmlplugin({
            template: 'src/index.html'
        }),
        new minicssExtractPlugin('style.css')
    ],
   
}