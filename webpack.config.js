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
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                loader: "babel-loader",
            },
            {
                test: /\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: './',
                        name: '[name].[ext]?[hash]',
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
                exclude: "/node_modules/"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
      },
}