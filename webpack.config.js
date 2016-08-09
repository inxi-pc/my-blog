module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/static',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                loader: 'vue'   // loader to use for matched files
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', // Enable es6 support by babels
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//
            }
        ]
    },
    
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}