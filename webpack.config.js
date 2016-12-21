var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var appAssetPath = __dirname + '/static/';

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: "/",
        filename: 'js/build.js'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules\//
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=resource/[name].[ext]'
            },
            // Todo: url-loader has a bug, if file length > limit
            // then the file name is not same as prefix rule
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    vue: {
        loaders: {
            css: ExtractTextPlugin.extract(
                "style-loader",
                "css-loader"
            )
        }
    },

    resolve: {
        alias: {
            app_asset: appAssetPath
        }
    },

    plugins: [
        new ExtractTextPlugin("css/[name].css"),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }),

        new webpack.optimize.CommonsChunkPlugin({
            filename: "js/vendor.bundle.js",
            name: 'vendor'
        })
    ],

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
