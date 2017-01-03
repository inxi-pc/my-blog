var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var appAssetPath = __dirname + '/static/';
var appLibPath = __dirname + '/src/lib/';
var appConfigPath = __dirname + '/';
var appApiPath = __dirname + '/src/api/';

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: "/dist",
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
                test: /\.json$/,
                loader: 'json-loader',
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
            },
            {
                test: /highlight.js\//,
                loaders: [
                    'imports?this=>window'
                ]
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
            app_asset: appAssetPath,
            app_lib: appLibPath,
            app_config: appConfigPath,
            app_api: appApiPath
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
