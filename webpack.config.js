const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sass = require('sass');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output : {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '../dist',
                        name: '[name].[ext]?[hash]'
                    }
                }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/

                // use: ['style-loader','sass-loader']
                // use: [{
                //     loader: 'sass-loader',
                //     options: {
                //         // sourceMap: !envConfig.production,
                //         // outputStyle: "compact"
                //     }
                // }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}