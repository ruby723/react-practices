const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(sa|scc)ss$/i,
            use:['style-loader', 'css-loader','sass-loader']
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 6060,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}