import debug from 'debug'

const log = debug('shinkansen-relay')

log('`shinkansen` is awake')

export { default as Relay } from './relay/index.mjs'
