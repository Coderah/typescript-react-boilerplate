var webpack = require('webpack');
var mainConfig = require('./webpack.config');

module.exports = function(env) {
    let config = mainConfig(env);

    config.entry.app = [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        config.entry.app
    ];

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    );

    config.devServer = {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,

        hot: true,
        inline: true
    }

    return config;
}