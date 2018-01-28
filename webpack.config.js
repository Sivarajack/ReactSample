const path= require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                },

            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
            },
            { test: /\.svg$/, loader: 'svg-loader' }
        ],



    }
}