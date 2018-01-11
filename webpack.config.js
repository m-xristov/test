const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");


module.exports = {
    entry: "./src/index.ts",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            { 
                test: /jquery-ui/, 
                loader: 'imports?jQuery=jquery' 
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.ejs'),
            title: "Webpack Test + Logger Samples",
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, 'app'),
            {}
        )
    ],
}