/**
 *  utils.js
 *  Create By rehellinen
 *  Create On 2019/3/23 15:52
 */
const { resolve } = require('path')

// locate to the root directory
exports.r = path => resolve(__dirname, '../', path)
// judge whether it is production environment
exports.isProduction = process.env.NODE_ENV === 'production'
// process the errors (not yet completed)
exports.logError = (severity, errors) => {
}
