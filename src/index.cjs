require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-relay')

log('`shinkansen` is awake')

const {
  default: Relay // @ts-ignore
} = require('./relay/index.mjs')

module.exports.Relay = Relay
