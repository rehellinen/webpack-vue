/**
 *  config.js
 *  Create By rehellinen
 *  Create On 2018/11/10 22:55
 */
const { r } = require('./utils')

module.exports = {
  // development environment config
  DEV: {
    HOST: '127.0.0.1',
    PORT: 9527,
    AUTO_OPEN_BROWSER: false,
    USE_ESLINT: true,
    DEV_TOOL: 'cheap-module-eval-source-map',
    PUBLIC_PATH: '/',
    PROXY: {}
  },

  // production environment config
  PROD: {
    ASSETS_ROOT: r('./dist'),
    STATIC_ROOT: r('./dist/static'),
    PUBLIC_PATH: '',
    // use bundle analyzer plugin by add '--report' in the CLI
    BUNDLE_ANALYZER: process.env.npm_config_report
  }
}

