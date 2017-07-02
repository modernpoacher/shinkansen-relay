'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Relay = undefined;

var _initiate = require('./initiate');

var _regulate = require('./regulate');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Relay = exports.Relay = function Relay() {
  _classCallCheck(this, Relay);
};

Relay.initiate = _initiate.initiate;
Relay.regulate = _regulate.regulate;