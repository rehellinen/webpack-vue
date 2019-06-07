/**
 *  build.js
 *  Create By rehellinen
 *  Create On 2019/3/23 15:24
 */
// setting the current environment as the production environment
process.env.NODE_ENV = 'production'

const ora = require('ora')
const { promisify } = require('util')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./config')
const webpackConfig = require('./webpack.prod.conf')

// use promise to make the code more readable
const rmPromise = promisify(rm)
const webpackPromise = promisify(webpack)
// add a spinner
const spinner = ora('building by webpack ...')
spinner.start()

// delete the previous build code
rmPromise(`${config.PROD.ASSETS_ROOT}`)
  // begin to build using Webpack
  .then(() => webpackPromise(webpackConfig))
  // print the result of the build
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
    }

    console.log(chalk.cyan('Building Complete!'))
  })
  // handling errors that occur during construction
  .catch(ex => { throw ex })
