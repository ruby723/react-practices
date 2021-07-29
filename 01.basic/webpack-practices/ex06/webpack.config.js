const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetsModuleFilename:'assets/image/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'assets/resource'
        },{
            test: /\.(sa|sc|c)ss$/i,
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