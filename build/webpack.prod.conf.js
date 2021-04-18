/**
 *  webpack.prod.conf.js
 *  Create By rehellinen
 *  Create On 2019/3/23 15:18
 */
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const { r } = require('./utils')
const config = require('./config')
const baseWebpackConf = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConf, {
  optimization: {
    // code splitting
    splitChunks: {
      automaticNameDelimiter: '-',
      cacheGroups: {
        // split node_modules
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          chunks: 'all'
        }
      }
    },
    minimizer: [
      // uglify / minimize js
      new UglifyJsPlugin({
        parallel: true,
        cache: true,
        uglifyOptions: {
          output: {
            beautify: false
          }
        }
      }),
      // optimize / minimize css
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].[hash:5].css`,
      chunkFilename: `css/[name].[hash:5].css`
    }),
    new CopyWebpackPlugin([
      {
        from: r('static'),
        to: config.PROD.STATIC_ROOT
      }
    ])
  ]
})

if (config.PROD.BUNDLE_ANALYZER) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
