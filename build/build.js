/**
 *  build.js
 *  Create By rehellinen
 *  Create On 2019/3/23 15:24
 */
process.env.NODE_ENV = 'production'

const ora = require('ora')
const { promisify } = require('util')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building by webpack ...')
const rmPromise = promisify(rm)
const webpackPromise = promisify(webpack)
spinner.start()

rmPromise(`${config.PROD.ASSETS_ROOT}`)
  .then(() => webpackPromise(webpackConfig))
  .then((stats) => {
    spinner.stop()

    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('Some Errors Occur!'))
      process.exit(1)
    }

    console.log(chalk.cyan('Building Complete!'))
  })
  .catch(ex => { throw ex })
