import {
  Signals
} from 'shinkansen-signals'

export default function initiate ({ now: { alpha, omega } = {}, was = {} }) {
  const {
    ALPHA,
    OMEGA
  } = Signals

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
