'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Relay = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _initiate = require('./initiate');

var _regulate = require('./regulate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Relay = exports.Relay = function Relay() {
  (0, _classCallCheck3.default)(this, Relay);
};

Relay.initiate = _initiate.initiate;
Relay.regulate = _regulate.regulate;