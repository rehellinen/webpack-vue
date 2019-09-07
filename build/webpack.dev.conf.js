/**
 *  webpack.dev.conf.js
 *  Create By rehellinen
 *  Create On 2018/11/8 16:41
 */
const portFinder = require('portfinder')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')
const baseWebpackConf = require('./webpack.base.conf')
portFinder.basePort = process.env.PORT || config.DEV.PORT

const devWebpackConf = merge(baseWebpackConf, {
  output: {
    publicPath: config.DEV.PUBLIC_PATH
  },
  devtool: config.DEV.DEV_TOOL,
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    host: process.env.HOST || config.DEV.HOST,
    port: process.env.PORT || config.DEV.PORT,
    compress: true,
    quiet: true,
    open: config.DEV.AUTO_OPEN_BROWSER,
    proxy: config.DEV.PROXY
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portFinder
    .getPortPromise()
    .then(port => {
      process.env.PORT = port
      devWebpackConf.devServer.port = port
      devWebpackConf.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`running at { http://${config.DEV.HOST}:${port} }`]
        }
      }))
      resolve(devWebpackConf)
    })
    .catch(ex => {
      throw ex
    })
})
