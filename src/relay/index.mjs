import debug from 'debug'

import initiate from '#relay/relay/initiate'

import regulate from '#relay/relay/regulate'

const log = debug('shinkansen-relay')

log('`shinkansen` is awake')

export default class Relay {
  static initiate = initiate

  static regulate = regulate
}
