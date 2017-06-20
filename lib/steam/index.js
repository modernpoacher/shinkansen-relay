'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Steam = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _regulate = require('./regulate');

var _generate = require('./generate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Steam = exports.Steam = function Steam() {
  (0, _classCallCheck3.default)(this, Steam);
};

Steam.regulate = _regulate.regulate;
Steam.generate = _generate.generate;