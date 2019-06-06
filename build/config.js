/**
 *  config.js
 *  Create By rehellinen
 *  Create On 2018/11/10 22:55
 */
const { r } = require('./utils')

module.exports = {
  DEV: {
    HOST: '127.0.0.1',
    PORT: 9527,
    AUTO_OPEN_BROWSER: false,
    USE_ESLINT: true,
    DEV_TOOL: 'cheap-module-eval-source-map',

    // path
    PUBLIC_PATH: '/',
    PROXY: {}
  },

  PROD: {
    // path
    ASSETS_ROOT: r('./dist'),
    STATIC_ROOT: r('./dist/static'),
    PUBLIC_PATH: '',
    BUNDLE_ANALYZER: process.env.npm_config_report
  }
}

