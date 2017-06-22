'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dc = dc;

var _shinkansenSignals = require('shinkansen-signals');

function dc(_ref) {
  var _ref$now = _ref.now;
  _ref$now = _ref$now === undefined ? {} : _ref$now;
  var alpha = _ref$now.alpha,
      omega = _ref$now.omega,
      _ref$was = _ref.was,
      was = _ref$was === undefined ? {} : _ref$was;
  var ALPHA = _shinkansenSignals.Signals.ALPHA,
      OMEGA = _shinkansenSignals.Signals.OMEGA;


  var HAS_ALPHA = !!alpha;
  var HAS_OMEGA = !!omega;
  var HAS_ALPHA_CHANGED = alpha !== was[ALPHA];
  var HAS_OMEGA_CHANGED = omega !== was[OMEGA];
  var WAS_ALPHA_DEFINED = ALPHA in was;
  var WAS_OMEGA_DEFINED = OMEGA in was;

  return {
    HAS_ALPHA: HAS_ALPHA,
    HAS_OMEGA: HAS_OMEGA,
    HAS_ALPHA_CHANGED: HAS_ALPHA_CHANGED,
    HAS_OMEGA_CHANGED: HAS_OMEGA_CHANGED,
    WAS_ALPHA_DEFINED: WAS_ALPHA_DEFINED,
    WAS_OMEGA_DEFINED: WAS_OMEGA_DEFINED
  };
}