require('@babel/register')({ ignore: [/node_modules/], configFile: require.resolve('../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-relay')

log('`shinkansen` is awake')

const {
  default: Relay
} = require('./relay/index.mjs')

module.exports.Relay = Relay
