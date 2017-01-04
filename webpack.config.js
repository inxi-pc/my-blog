var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var appAssetPath = __dirname + '/static/';
var appLibPath = __dirname + '/src/lib/';
var appConfigPath = __dirname + '/';
var appApiPath = __dirname + '/src/api/';

module.exports = {
    entry: {
        main: './src/main.js'
    },

    output: {
        path: __dirname + '/dist',
        publicPath: "/dist/",
        filename: 'js/[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules\//,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),

        new ExtractTextPlugin("styles.css"),

        new webpack.LoaderOptionsPlugin({
            debug: true
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        })
    ]
};

(function() {
    // get external env
    if (process.env.NODE_ENV == 'production') {
        module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }));
    }
})()
