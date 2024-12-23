/**
 * @typedef {import('shinkansen-relay').RelayTypes} RelayTypes
 */

import debug from 'debug'

import {
  Signals
} from 'shinkansen-signals'

const log = debug('shinkansen-relay')

log('`shinkansen` is awake')

/**
 * @param {{ was: Record<PropertyKey, string>, now: Record<PropertyKey, string> }} relay
 * @returns {RelayTypes.StateType}
 */
export default function initiate ({ now = {}, was = {} } = {}) {
  const {
    ALPHA,
    OMEGA
  } = Signals

  const alpha = Reflect.get(now, ALPHA)
  const omega = Reflect.get(now, OMEGA)

  const HAS_ALPHA = !!alpha
  const HAS_OMEGA = !!omega
  const HAS_ALPHA_CHANGED = Reflect.get(was, ALPHA) !== alpha
  const HAS_OMEGA_CHANGED = Reflect.get(was, OMEGA) !== omega
  const WAS_ALPHA_DEFINED = Reflect.has(was, ALPHA)
  const WAS_OMEGA_DEFINED = Reflect.has(was, OMEGA)

  return {
    HAS_ALPHA,
    HAS_OMEGA,
    HAS_ALPHA_CHANGED,
    HAS_OMEGA_CHANGED,
    WAS_ALPHA_DEFINED,
    WAS_OMEGA_DEFINED
  }
}
