import {
  Boiler
} from 'shinkansen-boiler'

export function regulate ({ now: { alpha, omega } = {}, was = {} }) {
  const {
    ALPHA,
    OMEGA
  } = Boiler

  const HAS_ALPHA = !!alpha
  const HAS_OMEGA = !!omega
  const HAS_ALPHA_CHANGED = (alpha !== was[ALPHA])
  const HAS_OMEGA_CHANGED = (omega !== was[OMEGA])
  const WAS_ALPHA_DEFINED = (ALPHA in was)
  const WAS_OMEGA_DEFINED = (OMEGA in was)

  return {
    HAS_ALPHA,
    HAS_OMEGA,
    HAS_ALPHA_CHANGED,
    HAS_OMEGA_CHANGED,
    WAS_ALPHA_DEFINED,
    WAS_OMEGA_DEFINED
  }
}
