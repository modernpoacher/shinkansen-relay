/**
 *  @typedef {RelayTypes.InitiateParamsType} InitiateParamsType
 *  @typedef {RelayTypes.InitiateType} InitiateType
 */

import debug from 'debug'

import {
  Signals
} from 'shinkansen-signals'

const log = debug('shinkansen-relay')

log('`shinkansen` is awake')

/**
 *  @param {InitiateParamsType} params
 *  @returns {InitiateType}
 */
export default function initiate ({
  now = {},
  was = {}
} = {}) {
  log('initiate')

  const {
    ALPHA,
    OMEGA
  } = Signals

  const alpha = now[ALPHA]
  const omega = now[OMEGA]

  const HAS_ALPHA = !!alpha
  const HAS_OMEGA = !!omega

  log(now, HAS_ALPHA, HAS_OMEGA)

  const HAS_ALPHA_CHANGED = was[ALPHA] !== alpha
  const HAS_OMEGA_CHANGED = was[OMEGA] !== omega

  const WAS_ALPHA_DEFINED = ALPHA in was
  const WAS_OMEGA_DEFINED = OMEGA in was

  return {
    HAS_ALPHA,
    HAS_OMEGA,
    HAS_ALPHA_CHANGED,
    HAS_OMEGA_CHANGED,
    WAS_ALPHA_DEFINED,
    WAS_OMEGA_DEFINED
  }
}
