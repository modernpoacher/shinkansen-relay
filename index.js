const debug = require('debug')

const log = debug('shinkansen-relay')

log('`relay` is awake')

module.exports = require('./lib')
