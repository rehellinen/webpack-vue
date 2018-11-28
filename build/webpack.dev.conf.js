/**
 *  webpack.dev.conf.js.js
 *  Create By rehellinen
 *  Create On 2018/11/8 16:41
 */
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('./config')
const {resolve} = require('path')
const webpackDevServer = require('webpack-dev-server');
const friendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.base.conf')

const r = path => resolve(__dirname, path)

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devtool: config.dev.devtool,
  devServer: {
    hot: true,
    host: config.dev.host,
    port: config.dev.port,
    compress: true,
    quiet: true,
    open: config.dev.autoOpenBrowser,
    proxy: {
      '/api': {
        target: 'http://localhost:9528',
        pathRewrite: {"^/api" : ""},
        proxyTimeout: 200000
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new friendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`running at { http://${config.dev.host}:${config.dev.port} }`]
      },
      onErrors (severity, errors) {
        console.log(errors)
      }
    })
  ]
})
