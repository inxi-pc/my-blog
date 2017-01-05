var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var appAssetPath = __dirname + '/static/';
var appLibPath = __dirname + '/src/lib/';
var appConfigPath = __dirname + '/';
var appApiPath = __dirname + '/src/api/';

// swith the prod or dev config, will affect plugin
var isDebug = process.env.NODE_ENV == 'production' ? false : true;

module.exports = {
    entry: {
        main: './src/main.js',
        'vendor': [
            'jquery'
        ]
    },

    output: {
        path: __dirname + '/dist',
        publicPath: "/dist/",
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/chunk/[name].js'
    },

    performance: {
        hints: isDebug
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules\//,
                loader: 'babel-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'resource/[name].[ext]'
                }
            },
            // Todo: url-loader has a bug, if file length > limit
            // then the file name is not same as prefix rule
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            },
            {
                test: /highlight.js\//,
                loader: 'imports-loader?this=>window'
            }
        ]
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
        new webpack.LoaderOptionsPlugin({
            debug: isDebug,
            minimize: !isDebug,
            options: {
                vue: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            fallbackLoader: 'style-loader',
                            loader: 'css-loader',
                            publicPath: '/dist/'
                        })
                    }
                }
            }
        }),

        new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: false,
            allChunks: true
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'mainfest']
        })
    ]
};

(function() {
    if (!isDebug) {
        module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }));
    }
})()
