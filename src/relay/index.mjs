import debug from 'debug'

import initiate from './initiate/index.mjs'

import regulate from './regulate/index.mjs'

const log = debug('shinkansen-relay')

log('`shinkansen` is awake')

export default class Relay {
  static initiate = initiate

  static regulate = regulate
}
