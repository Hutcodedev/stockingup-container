const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederalPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederalPlugin({
            name: 'container',            
            remotes: {
                users: 'users@http://localhost:8081/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        )
    ]
}