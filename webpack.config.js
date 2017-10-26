var path = require('path');
var basePath = __dirname;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(basePath,'src'),
    resolve: {
        extensions: ['.js','.ts','.scss'],
    },
    entry: {
        app: ['./js/stringsDemo.js'],
        appStyles: [
            './css/site.scss',
        ],
        vendor: [
            'jquery',
            'lodash',
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
        ],
    },
    output: {
        path: path.join(basePath,'dist'),
        filename: '[chunkhash].[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'},
                    ],
                }),
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader'},
                    ],
                }),
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg-xml',
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=5000',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: true,
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            JQuery: "jquery",
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest'],
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
            filename: '[chunkhash].[name].css',
            disable: false,
            allChunks: true,
        }),
    ]
};